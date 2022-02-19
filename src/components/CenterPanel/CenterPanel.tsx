import styles from "./centerPanel.module.scss";
function CenterPanel({ username }: { username: string }) {
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.greetingC}`}>
        <div>
          Hi <span>{username}</span>,
        </div>
        <div>Let’s Play! 👋</div>
      </article>
      <article className={`${styles.cardC}`}>
        <div className={`${styles.cardBack}`}></div>

      </article>
      <article className={`${styles.controllersC}`}>
          <div>Choose a card!</div>
      </article>
    </section>
  );
}

export default CenterPanel;
