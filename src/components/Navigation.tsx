import {
  CompassIcon,
  ComputerIcon,
  GamepadIcon,
  HomeIcon,
  LaptopIcon,
  MouseIcon,
  TagIcon,
} from './Icons';

export function Navigation() {
  return (
    <nav>
      <ul className="w-full p-5 flex flex-row flex-wrap items-center justify-between gap-4 max-w-screen-lg mx-auto lg:flex-nowrap lg:gap-10">
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <HomeIcon />
            <span className="text-primary font-medium text-sm">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <CompassIcon />
            <span className="text-primary font-medium text-sm">Explorar</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <ComputerIcon />
            <span className="text-primary font-medium text-sm">
              PCs de Escritorio
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <LaptopIcon />
            <span className="text-primary font-medium text-sm">Laptops</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <GamepadIcon />
            <span className="text-primary font-medium text-sm">
              Móvil/Consola
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <MouseIcon />
            <span className="text-primary font-medium text-sm">Accesorios</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-secondary flex items-center gap-1">
            <TagIcon />
            <span className="text-primary font-medium text-sm">Outlet</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
