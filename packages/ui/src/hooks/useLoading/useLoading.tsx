import create from 'zustand'

export interface ILoadingStore {
  isLoading: boolean
  queue: string[]
  message?: string | null

  push: (id: string) => void
  pop: (id: string) => void

  setLoading: (v: boolean, message?: string) => void
  off: () => void
  on: () => void
  toggle: () => void

  setMessage: (message: string | null) => void

  reset: () => void
}

export const selector = {
  setLoading: (store: ILoadingStore) => store.setLoading,
  isLoading: (store: ILoadingStore) => store.isLoading,
  push: (store: ILoadingStore) => store.push,
  pop: (store: ILoadingStore) => store.pop,
  reset: (store: ILoadingStore) => store.reset,
}

export const useLoading = create<ILoadingStore>((set) => ({
  isLoading: false,
  queue: [],

  push: (id) =>
    set((state) => ({
      isLoading: true,
      queue: [...new Set(state.queue.concat(id))],
    })),

  pop: (id) =>
    set((state) => {
      const update = state.queue.filter((q) => q !== id)

      return {
        isLoading: !!update.length,
        queue: update,
      }
    }),

  setLoading: (isLoading, message) => set({ isLoading: isLoading, message }),
  off: () => set({ isLoading: false }),
  on: () => set({ isLoading: true }),
  toggle: () => set((state) => ({ isLoading: !state.isLoading })),
  setMessage: (message) => set({ message }),
  reset: () => set({ isLoading: false, queue: [], message: null }),
}))
