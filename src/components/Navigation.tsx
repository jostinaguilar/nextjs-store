import {
  CloseIcon,
  CompassIcon,
  ComputerIcon,
  GamepadIcon,
  HomeIcon,
  LaptopIcon,
  MouseIcon,
  TagIcon,
} from '@/components/ui/Icons';
import { useMenuStore } from '@/store/useMenuStore';
import clsx from 'clsx';

export function Navigation() {
  const menu = useMenuStore((state) => state.menu);
  const closeMenu = useMenuStore((state) => state.closeMenu);
  return (
    <>
      {menu && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] lg:hidden"></div>
      )}
      <nav
        className={clsx(
          'bg-white fixed top-0 left-0 w-72 bottom-0 z-10 lg:static lg:w-full transition-all transform duration-500 lg:translate-x-0',
          {
            '-translate-x-full': !menu,
          }
        )}
      >
        <ul className="w-full lg:p-5 flex flex-col gap-4 max-w-screen-lg mx-auto lg:gap-10 lg:flex-row lg:justify-between">
          <li className="flex flex-row justify-between items-center bg-primary text-white p-5 lg:hidden">
            <h1 className="text-white text-2xl font-black text-nowrap">
              Tech <span className="font-medium">Store</span>
            </h1>
            <button type="button" onClick={closeMenu}>
              <CloseIcon />
            </button>
          </li>
          <li className="flex gap-2 items-center px-5 lg:hidden">
            <a href="#" className="text-primary font-semibold text-sm">
              Iniciar Sesión
            </a>
            |
            <a href="#" className="text-primary font-semibold text-sm">
              Registrarse
            </a>
          </li>
          <li className="px-5 lg:hidden">
            <hr />
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <HomeIcon />
              <span className="text-primary font-medium text-sm">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <CompassIcon />
              <span className="text-primary font-medium text-sm">Explorar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <ComputerIcon />
              <span className="text-primary font-medium text-sm">
                PCs de Escritorio
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <LaptopIcon />
              <span className="text-primary font-medium text-sm">Laptops</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <GamepadIcon />
              <span className="text-primary font-medium text-sm">
                Móvil/Consola
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <MouseIcon />
              <span className="text-primary font-medium text-sm">
                Accesorios
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary flex items-center gap-1 px-5 lg:px-0"
            >
              <TagIcon />
              <span className="text-primary font-medium text-sm">Outlet</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
