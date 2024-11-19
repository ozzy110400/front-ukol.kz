// Import the scoped styles from Main.module.css
import styles from './../MainOld/css/Main.module.css';
import Main from "./components/Main";
import Condition from "./components/Condition";
import Help from "./components/Help";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

export default function MainOld() {
  return (
    <div className={styles['scrollContainer']}>  {/* Apply the scoped class name */}
      <Main />
      <Help />
      <Condition />
      <FAQ />
      <Contact />
    </div>
  );
}
