import { create } from "zustand";

const useStore = create((set) => ({
  menuState: false,
  toggleMenu: () => set((state) => ({ ...state, menuState: !state.menuState })),
}));

export const getMenuState = (state) => state.menuState;

export default useStore;
