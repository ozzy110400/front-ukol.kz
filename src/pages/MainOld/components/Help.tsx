import styles from './../css/Help.module.css';  // Import CSS module
import Button from "./Button";
import SliderBox from "./SliderBox";

export default function Help() {
    return (
        <section className={styles.help} id="service-help"> {/* Use the CSS module class */}
            <h1 className={styles.helpHeading}> {/* Use the CSS module class */}
                Вот с чем мы <br/>можем помочь
            </h1>

            <SliderBox />

            <Button text="бесплатная консультация" />
        </section>
    );
}
