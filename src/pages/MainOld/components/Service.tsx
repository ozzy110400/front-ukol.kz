import styles from './../css/Service.module.css';  // Import CSS module

export default function Service({ headingText, subText }: { headingText: string; subText: string }) {
  return (
    <div className={styles['serviceWrapper']}>
        <div className={styles['serviceText']}>
            <h1 className={styles['serviceHeading']}>{headingText}</h1>
            <p className={styles['serviceSubtext']} dangerouslySetInnerHTML={{ __html: subText }} />
        </div>
    </div>
  );
}
