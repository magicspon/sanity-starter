import * as React from 'react'

export const PASS = 'PASS'
export const FAIL = 'FAIL'

type State = 'PASS' | 'FAIL'

export interface PassFail {
  state?: State
  message?: string
}

export interface TPassFailState {
  response: PassFail
  isPass: boolean
  isFail: boolean
}

export interface TPassFailSetters {
  setMessage: (arg: string) => void
  setFail: (arg: string) => void
  setPass: (arg: string) => void
  clear: () => void
}

export type TusePassFail = TPassFailState & TPassFailSetters

const PassFailState = React.createContext<TPassFailState>(null!)
const PassFailDispatch = React.createContext<TPassFailSetters>(null!)

export function useFeedbackState() {
  return React.useContext(PassFailState)
}
export function useFeedbackDispatch() {
  return React.useContext(PassFailDispatch)
}

export function useFeedbackContext() {
  return [useFeedbackState(), useFeedbackDispatch()] as [
    state: TPassFailState,
    dispatch: TPassFailSetters,
  ]
}

export function usePassFail(intialState: PassFail = {}): TusePassFail {
  const [response, setValue] = React.useState<PassFail>(intialState)

  return {
    response,
    isPass: response.state === PASS,
    isFail: response.state === FAIL,
    setFail: (message) => setValue({ state: FAIL, message }),
    setMessage: (message) => setValue(({ state }) => ({ state, message })),
    setPass: (message) => setValue({ state: PASS, message }),
    clear: () => setValue({}),
  }
}

interface TFeedbackProvider {
  children: React.ReactNode
}

export function FeedbackProvider({ children }: TFeedbackProvider) {
  const { response, isPass, isFail, setFail, setMessage, setPass, clear } =
    usePassFail()

  return (
    <PassFailState.Provider value={{ response, isPass, isFail }}>
      <PassFailDispatch.Provider
        value={{ setFail, setMessage, setPass, clear }}
      >
        {children}
      </PassFailDispatch.Provider>
    </PassFailState.Provider>
  )
}
