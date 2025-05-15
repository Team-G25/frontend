import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: undefined,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
