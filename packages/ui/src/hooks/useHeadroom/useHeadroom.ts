import * as React from 'react'
import shouldUpdate, { Action } from './shouldUpdate'
import { F } from '@mobily/ts-belt'

function getDocumentHeight(): number {
  const { body, documentElement } = document

  return Math.max(
    body.scrollHeight,
    documentElement.scrollHeight,
    body.offsetHeight,
    documentElement.offsetHeight,
    body.clientHeight,
    documentElement.clientHeight,
  )
}

function isOutOfBound(currentScrollY: number): boolean {
  const pastTop = currentScrollY < 0

  const scrollerPhysicalHeight = window.innerHeight
  const scrollerHeight = getDocumentHeight()

  const pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight

  return pastTop || pastBottom
}

interface State {
  translateY: string | number
  animation?: boolean
  state: Action
}

function reducer(state: State, { type }: { type: Action }): State {
  switch (type) {
    case 'pin': {
      return {
        ...state,
        translateY: 0,
        animation: true,
        state: 'pinned',
      }
    }
    case 'unpin': {
      return {
        ...state,
        translateY: '-100%',
        animation: true,
        state: 'unpinned',
      }
    }
    case 'unpin-snap': {
      return {
        ...state,
        translateY: '-100%',
        animation: false,
        state: 'unpinned',
      }
    }
    case 'unfix': {
      return {
        ...state,
        translateY: 0,
        animation: false,
        state: 'unfixed',
      }
    }
    case 'none': {
      return state
    }

    default: {
      throw new Error('action type missing')
    }
  }
}

function useHeight(
  ref: React.RefObject<HTMLElement>,
  calcHeightOnResize = true,
) {
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const node = ref?.current
    const handle = F.throttle(() => {
      if (node) setHeight(node.offsetHeight)
    }, 100)

    if (node) setHeight(node.offsetHeight)

    if (calcHeightOnResize) window.addEventListener('resize', handle)

    return () => {
      if (calcHeightOnResize) window.removeEventListener('resize', handle)
    }
  }, [height, ref, calcHeightOnResize])

  return height
}

interface UseHeadroomProps {
  disable: boolean
  upTolerance: number
  downTolerance: number
  pinStart: number
  calcHeightOnResize: boolean
}

interface UseHeadroom {
  wrapper: {
    height: number | ''
  }
  innerStyle: {
    [k: string]: any
  }
  currentScrollY: number
  state: Action
  node: React.Ref<HTMLDivElement>
  scrolled: boolean
}

const defaultProps = {
  disable: false,
  upTolerance: 5,
  downTolerance: 0,
  pinStart: 50,
  calcHeightOnResize: true,
}

export function useHeadroom({
  disable = false,
  upTolerance = 5,
  downTolerance = 0,
  pinStart = 50,
  calcHeightOnResize = true,
}: UseHeadroomProps = defaultProps): UseHeadroom {
  const ref = React.useRef<HTMLDivElement>(null!)
  const currentScrollY = React.useRef(0)
  const lastKnownScrollY = React.useRef(0)
  const height = useHeight(ref, calcHeightOnResize)

  const [state, dispatch] = React.useReducer(reducer, {
    state: 'unfixed',
    translateY: 0,
  })

  const [scrolled, setScrolled] = React.useState(false)

  const loop = React.useCallback(() => {
    currentScrollY.current = window.pageYOffset

    if (!isOutOfBound(currentScrollY.current)) {
      if (currentScrollY.current > 50 && scrolled === false) {
        setScrolled(true)
      } else if (scrolled && currentScrollY.current <= 50) {
        setScrolled(false)
      }

      const { action } = shouldUpdate(
        lastKnownScrollY.current,
        currentScrollY.current,
        {
          disable,
          upTolerance,
          downTolerance,
          pinStart,
        },
        {
          ...state,
          height,
        },
      )

      if (action !== 'none') dispatch({ type: action })
    }

    lastKnownScrollY.current = currentScrollY.current
  }, [
    disable,
    height,
    pinStart,
    upTolerance,
    downTolerance,
    state,
    setScrolled,
    scrolled,
  ])

  React.useEffect(() => {
    const handle = F.throttle(loop, 100)

    window.addEventListener('scroll', handle, {
      capture: false,
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [loop])

  let innerStyle: { [k: string]: any } = {
    position: 'fixed',
    top: 0,
    transform: `translate3D(0, ${state.translateY}, 0)`,
  }

  if (state.animation) {
    innerStyle = {
      ...innerStyle,
      transition: 'all .2s ease-in-out',
    }
  }

  return {
    wrapper: {
      height,
    },
    innerStyle,
    currentScrollY: currentScrollY.current,
    state: state.state,
    node: ref,
    scrolled,
  }
}
