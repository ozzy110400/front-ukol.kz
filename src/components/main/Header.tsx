import { useState } from 'preact/hooks';
import logoImg from "/img/logo.svg";
import { navigate } from 'wouter-preact/use-browser-location';

const options = [
  { label: 'Наши услуги', target: 'services' },
  { label: 'Отзывы', target: 'reviews' },
  { label: 'О нас', target: 'about' },
  //{ label: 'Контакты', target: 'contacts' },
  { label: 'Медикам', target: 'spec' },
];
export default function Header() {

  const [openNav, setOpenNav] = useState(false);

  const handleOpenNavMenu = () => {
    setOpenNav(true);
  };

  const handleCloseNavMenu = () => {
    setOpenNav(false);
  };

  const handleMenuItemClick = (target: string, label: string) => {
    if (label === 'Медикам') {
      window.location.href = 'https://spec.ukol.kz';
    } else if (label === 'Наши услуги'){
      navigate('/services')
    } else {
      document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    handleCloseNavMenu();
  };

  return (
    <div className="navbar bg-transparent mt-2">
      <div className="navbar-start">
        <img src={logoImg} alt="Logo" className="h-8 ml-2" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {options.map((option) => (
            <li key={option.target}>
              <a onClick={() => handleMenuItemClick(option.target, option.label)}
                 className="font-bold text-black text-xl">
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex justify-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={handleOpenNavMenu}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current text-black hover:text-black">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <ul
          tabIndex={0}
          className={`menu menu-sm dropdown-content bg-my-white rounded-box z-[1] mt-3 w-max p-2 shadow absolute right-0 ${openNav ? "block" : "hidden"}`}>
          {options.map((option) => (
            <li key={option.target}>
              <a onClick={() => handleMenuItemClick(option.target, option.label)} 
                 className="font-bold text-black text-xl"
                 >
                {option.label}
              </a>
            </li>
          ))}
        </ul>

        </div>
      </div>
    </div>
  );
}

