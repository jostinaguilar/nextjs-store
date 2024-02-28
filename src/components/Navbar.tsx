'use client';

import { useMenuStore } from '@/store/useMenuStore';
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from '../ui/Icons';
import { Navigation } from './Navigation';

export function Navbar() {
  const openMenu = useMenuStore((state) => state.openMenu);
  return (
    <header>
      <div className="bg-primary">
        <ul className="w-full px-5 py-6 flex flex-row flex-wrap items-center justify-between gap-4 max-w-screen-lg mx-auto lg:flex-nowrap lg:gap-10">
          <li className="order-1 text-white flex flex-row gap-2">
            <button type="button" onClick={openMenu} className="lg:hidden">
              <span className="sr-only">Menu</span>
              <MenuIcon />
            </button>
            <h1 className="text-white text-2xl font-black text-nowrap">
              Tech <span className="font-medium">Store</span>
            </h1>
          </li>
          <li className="order-4 w-full lg:order-2">
            <div className="flex flex-row w-full bg-primary-medium gap-2.5 px-3 py-2 rounded-md text-white">
              <SearchIcon />
              <input
                type="text"
                placeholder="Buscar Productos"
                className="bg-transparent placeholder:text-gray-e w-full outline-none text-white text-sm"
              />
            </div>
          </li>
          <li className="hidden order-3 text-white lg:flex lg:gap-2 lg:items-center">
            <UserIcon />
            <a href="#" className="text-nowrap text-sm">
              Iniciar Sesión
            </a>
            |
            <a href="#" className="text-sm">
              Registrarse
            </a>
          </li>
          <li className="text-white flex flex-row order-2 items-center text-sm lg:order-4">
            <CartIcon /> <span className="hidden lg:block mr-1">Cart</span>(0)
          </li>
        </ul>
      </div>
      <Navigation />
    </header>
  );
}
