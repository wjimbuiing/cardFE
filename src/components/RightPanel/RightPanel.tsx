import styles from "./rightPanel.module.scss";

function RightPanel() {
  return (
    <section className={`${styles.contentC} tr`}>
      <article className={`${styles.lastC} tr`}>
        <div className={`${styles.last}`}>Your last cards</div>
        <div className={`${styles.cardsC}`}>
          <div className={`${styles.cardC}`}>
            <div className={`${styles.cardImg}`}></div>
            <div className={`${styles.cardInfo}`}>
              <div className={`${styles.cardName}`}></div>
              <div className={`${styles.cardTime}`}></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default RightPanel;
