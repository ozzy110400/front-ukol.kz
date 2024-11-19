import Navbar from "./Navbar"
import styles from './../css/Main.module.css';  // Import CSS module
import Button from "./Button"
import mainImg from "./../assets/main-img.png"
import MobileNav from "./MobileNav"

export default function Main() {
  function scrollSection(name: string): void {
    document.getElementById(name)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (

    <section>
      <div className="main-navigation">
        <Navbar />
        <div className="container">
          <main>
              <div className="main-text">
                <h1 className="main-heading">Ukol.kz <br/> это медицина <br/> на дом!</h1>
                <p className="main-subtext">
                  Мы предоставляем квалифицированные <br/> медицинские услуги с выездом на дом! <br/>
                  Стаж наших специалистов свыше 7 лет. <br/>  
                  Доверьте свое здоровье настоящим <br/> профессионалам, вам не нужно никуда <br/> ехать!
                </p>
                <Button text = "нажмите для заказа" />
              </div>

              <img className="main-img" src={mainImg} alt="main-image" />

          </main>
        </div>
      </div>

      <MobileNav />

    </section>
  )
}
