import "./../css/MobileNav.module.css";
import closeImg from "./../assets/xmark-solid.svg";
import { useLocation } from "wouter-preact";

export default function MobileNav() {
  const [location, setLocation] = useLocation();

  function handleNavigation() {
    document.querySelector('.main-navigation')?.classList.add('hidden');
    document.querySelector('.mobile-navigation')?.classList.remove('hidden');
    document.querySelector('body')?.style.setProperty('background-color', "#F7F7F1");
    document.querySelector('.scroll-container')?.style.setProperty('overflow-y', 'scroll');
  }

  function handleNavigate(route: string) {
    setLocation(route);
  }

  return (
    <nav className="mobile-navigation">
      <img onClick={handleNavigation} src={closeImg} alt="close menu" />
      <ul className="mobile-links">
        <li><a onClick={handleNavigation} className="link" href="#service-help">наши услуги</a></li>
        <li><a onClick={handleNavigation} className="link" href="#condition">о нас</a></li>
        <li><a onClick={handleNavigation} className="link" href="#reviews">отзывы</a></li>
        <li><a onClick={(e) => { e.preventDefault(); alert("Данного сервиса не существует"); }} className="link" href="#">медсестрам</a></li>
        <li><a onClick={() => handleNavigate("/certificate")} className="link" href="#">сертификаты</a></li>
      </ul>
    </nav>
  );
}
