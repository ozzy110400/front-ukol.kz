import { useLocation } from "wouter-preact";  // If using wouter-preact for navigation
import styles from './../css/Button.module.css';  // Import CSS module
import whatsappIcon from './../assets/icon-whatsapp.png'; // Import your WhatsApp icon

export default function Button({ text }) {
  const [, setLocation] = useLocation(); // Using wouter-preact for routing

  // Handle click to redirect to WhatsApp
  function handleClick() {
    window.open("https://api.whatsapp.com/send?phone=77027776776&text=Здравствуйте!%20Хочу%20вызвать%20медсестру%20на%20дом.", "_blank");
  }

  return (
    <button onClick={handleClick} className={styles.mainButton}>
        <img className={styles.buttonIcon} src={whatsappIcon} alt="whatsapp-icon" />
        <h1 className={styles.buttonText}>{text}</h1>
    </button>
  );
}
