import { useState } from 'preact/hooks';
import logoImg from "/img/logo.svg";

const options = [
  { label: 'Наши услуги', target: 'services' },
  { label: 'Отзывы', target: 'reviews' },
  { label: 'О нас', target: 'about' },
  { label: 'Медикам', target: 'spec' },
];

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNavMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="navbar bg-my-green rounded-bl-xl rounded-br-xl mb-6" role="navigation" aria-label="Главное меню">
      {/* Логотип */}
      <a href="/" className="navbar-start">
        <img src={logoImg} alt="Логотип сайта" className="h-8 ml-2" />
      </a>

      {/* Мобильное меню (гамбургер) */}
      <div className="navbar-end flex justify-end lg:hidden">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={handleOpenNavMenu}
            aria-expanded={openNav}
            aria-label="Открыть меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current text-black hover:text-black"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            role="menu"
            className={`menu menu-sm dropdown-content bg-my-green rounded-box z-[1] mt-3 w-max p-2 shadow absolute right-0 ${
              openNav ? "block" : "hidden"
            }`}
          >
            <li role="menuitem">
              <a href="/services" className="font-bold text-black text-lg">Наши услуги</a>
              <ul className="p-2">
                <li><a href="/services/injections" className="font-semibold text-black text-md">Уколы</a></li>
                <li><a href="/services/drips" className="font-semibold text-black text-md">Капельницы</a></li>
                <li><a href="/services/detox" className="font-semibold text-black text-md">Детоксикации</a></li>
                <li><a href="/services/nurse" className="font-semibold text-black text-md">Медсестры на дом</a></li>
                <li><a href="/services/bandage/regular" className="font-semibold text-black text-md">Перевязки</a></li>
              </ul>
            </li>
            <li role="menuitem">
              <a href="/#reviews" className="font-bold text-black text-lg">Отзывы</a>
            </li>
            <li role="menuitem">
              <a href="https://spec.ukol.kz" className="font-bold text-black text-lg">Медикам</a>
            </li>
            <li role="menuitem">
              <a
                href="https://api.whatsapp.com/send?phone=77027776776&text=Здравствуйте! Нужна помощь с заказом медицинских услуг"
                className="font-bold text-black text-lg"
              >
                Поддержка
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Десктопное меню */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="font-bold text-black text-lg">Наши услуги</summary>
              <ul className="p-2 bg-my-green">
                <li><a href="/services/injections" className="font-semibold text-black text-md">Уколы</a></li>
                <li><a href="/services/drips" className="font-semibold text-black text-md">Капельницы</a></li>
                <li><a href="/services/detox" className="font-semibold text-black text-md">Детоксикации</a></li>
                <li><a href="/services/nurse" className="font-semibold text-black text-md">Медсестры на дом</a></li>
                <li><a href="/services/bandage/regular" className="font-semibold text-black text-md">Перевязки</a></li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/#reviews" className="font-bold text-black text-lg">Отзывы</a>
          </li>
          <li>
            <a href="https://spec.ukol.kz" className="font-bold text-black text-lg">Медикам</a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=77027776776&text=Здравствуйте! Нужна помощь с заказом медицинских услуг"
              className="font-bold text-black text-lg"
            >
              Поддержка
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}