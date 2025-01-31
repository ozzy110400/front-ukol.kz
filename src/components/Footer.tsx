import logoImg from "/img/footer/logoGreen.svg";
import waImg from "/img/footer/wa.svg";
import igImg from "/img/footer/ig.svg";

export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
    <aside>
    <div className="items-center">
          <a href="/" aria-label="Перейти на главную страницу">
            <img 
              src={logoImg} 
              alt="Логотип Ukol.kz - Медицинские услуги на дому" 
              className="h-8 mb-2 mt-3"
              itemProp="image"
            />
          </a>
          <p className="h-8 text-my-green" itemProp="foundingDate">
            С вами с 2023 года
          </p>
        </div>
    </aside>
    <nav>
      <h6 className="footer-title">Услуги</h6>
      <a href={`/services/injections`} className="link link-hover text-lg text-my-green">Уколы</a>
      <a href={`/services/drips`} className="link link-hover text-lg text-my-green">Капельницы</a>
      <a href={`/services/detox`} className="link link-hover text-lg text-my-green">Детоксикации</a>
      <a href={`/services/nurse`} className="link link-hover text-lg text-my-green">Медсестры на дом</a>
      <a href={`/services/bandage/regular`} className="link link-hover text-lg text-my-green">Перевязки</a>
    </nav>
    <nav>
      <h6 className="footer-title">Контакты</h6>
      <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=77027776776"
              aria-label="Написать в WhatsApp"
              itemProp="sameAs"
            >
              <img 
                src={waImg} 
                alt="Иконка WhatsApp" 
                className="h-8 mb-2" 
              />
            </a>
            <a 
              href="https://www.instagram.com/ukol_kz"
              aria-label="Наш Instagram"
              itemProp="sameAs"
            >
              <img 
                src={igImg} 
                alt="Иконка Instagram" 
                className="h-8 mb-2" 
              />
            </a>
          </div>
    </nav>
    <nav>
          <a 
              className="text-md p-2"
              aria-label="Открыть политику конфиденциальности"
              href="/privacy"

            >
              Политика конфиденциальности
            </a>
            <a 
              className="text-md p-2"
              aria-label="Открыть договор публичной оферты"
              href="/offer"
            >
              Договор Оферты
            </a>
            <p className="p-2 mb-5" itemProp="copyrightYear">
            Все права защищены &copy; {new Date().getFullYear()}
          </p>
        </nav>

  </footer>)

}
