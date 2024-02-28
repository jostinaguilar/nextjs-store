import { create } from 'zustand';

interface Menu {
  menu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useMenuStore = create<Menu>((set) => ({
  menu: false,
  openMenu: () => set(() => ({ menu: true })),
  closeMenu: () => set(() => ({ menu: false })),
}));
