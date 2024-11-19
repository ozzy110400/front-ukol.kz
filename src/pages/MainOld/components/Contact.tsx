import { useState } from 'react';
import styles from './../css/Contact.module.css';  // Import CSS module
import contactImg from './../assets/third.png';
import phoneIcon from './../assets/phone-icon.png';
import instaIcon from './../assets/instagram-icon.png';
import quoteImg from './../assets/quote.png';

export default function Contact() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  function openPrivacyModal() {
    setIsPrivacyModalOpen(true);
  }

  function closePrivacyModal() {
    setIsPrivacyModalOpen(false);
  }

  function openOfferModal() {
    setIsOfferModalOpen(true);
  }

  function closeOfferModal() {
    setIsOfferModalOpen(false);
  }

  return (
    <section className={styles['section-4']}>
      <div className={styles.contact}>
        <img className={styles.doctorImg} src={contactImg} alt="image-doctor" />
        <div className={styles['contact-info']}>
          <h1 className={styles['contact-heading']}>НАШИ КОНТАКТЫ</h1>
          <div className={styles.phone}>
            <img src={phoneIcon} alt="phone-icon" />
            <a href="https://api.whatsapp.com/send?phone=77027776776">whatsapp.com/ukolkz</a>
          </div>
          <div className={styles.insta}>
            <img src={instaIcon} alt="instagram-icon" />
            <a href="https://www.instagram.com/ukol_kz">instagram.com/ukolkz</a>
          </div>
          <div className={styles.quote}>
            <img src={quoteImg} alt="quote-image" />
            <p id="reviews">Более 1000 клиентов уже доверились нам и получили квалифицированную <br/>помощь</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles['footer-links']}>
          <h1 onClick={openPrivacyModal} className={styles['f-link']}>Политика конфиденциальности</h1>
          <h1 onClick={openOfferModal} className={styles['f-link']}>Договор Оферты</h1>
          <h1>Все права защищены &copy;</h1>
        </div>
      </footer>

      {isPrivacyModalOpen && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <button onClick={closePrivacyModal} className={styles['close-button']}>X</button>
            <h2>Политика конфиденциальности</h2>
            <p><strong>Дата вступления в силу:</strong> 1.06.2024</p>
            {/* Content of the Privacy Modal */}
          </div>
        </div>
      )}

      {isOfferModalOpen && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <button onClick={closeOfferModal} className={styles['close-button']}>X</button>
            <h2>Договор публичной оферты</h2>
            <p><strong>Дата вступления в силу:</strong> 01.06.2024</p>
            {/* Content of the Offer Modal */}
          </div>
        </div>
      )}
    </section>
  );
}
