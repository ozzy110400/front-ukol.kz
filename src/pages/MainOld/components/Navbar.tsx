import logo from "./../assets/logo.png";
import styles from "./../css/Navbar.module.css";  // Import CSS module
import menu from "./../assets/bars-solid.svg";
import { useLocation } from "wouter-preact";

export default function Navbar() {
  const [location, setLocation] = useLocation();

  function handleNavigation() {
    document.querySelector(`.${styles.mainNavigation}`)?.classList.add(styles.hidden);
    document.querySelector(`.${styles.mobileNavigation}`)?.classList.remove(styles.hidden);
    document.querySelector('body')?.style.setProperty('background-color', "#FFFAF0");
    document.querySelector(`.${styles.scrollContainer}`)?.style.setProperty('overflow-y', 'hidden');
  }

  function handleNavigate(route: string) {
    setLocation(route);
  }

  return(
    <div className="navBar">
      <div className="container">
  
          <nav className="nav">
            <div className="logo-wrapper">
              <img src = {logo} alt="logo of company" className="logo"/>
              <h1 onClick={() => location.reload()} className="logo-text">ukol.kz</h1>
            </div>
  
            <ul className="links">
              <li><a className="link" href="#service-help">наши услуги</a></li>
              <li><a className="link" href="#condition">о нас</a></li>
              <li><a className="link" href="#reviews">отзывы</a></li>
              <li><a onClick = {(e) => {e.preventDefault(); window.alert("Данного сервиса не существует")}} className="link" href="#">медсестрам</a></li>
            </ul>
            <img className="menu-icon" src={menu} alt="" onClick={handleNavigation} />
  
          </nav>

      </div>
    </div>
  )
}
