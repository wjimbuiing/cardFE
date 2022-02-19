import { ICard } from "../App/App";
import styles from "./centerPanel.module.scss";
function CenterPanel({
  name,
  handleDraw,
  drawnCards,
  activeIndex,
  stackSize,
}: {
  name: string;
  handleDraw: () => void;
  drawnCards: ICard[];
  activeIndex: number | undefined;
  stackSize: number;
}) {
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.greetingC}`}>
        <div>
          Hi <span>{name}</span>,
        </div>
        <div>Let’s Play! 👋</div>
      </article>
      <article className={`${styles.cardC}`}>
        <div className={`${styles.cardBack} `}>
          {activeIndex !== undefined && (
            <img src={drawnCards[activeIndex].image} alt="" />
          )}
        </div>
        <div
          className={`${styles.stack} ${stackSize >= 39 && styles.stack52} ${
            stackSize < 39 && styles.stack39
          } ${stackSize < 26 && styles.stack26} ${
            stackSize < 13 && styles.stack13
          } ${stackSize < 1 && styles.stack0}`}
        ></div>
        <div className={`${styles.stackShadow}`}></div>
      </article>
      <article className={`${styles.controllersC} `}>
        <div onClick={() => handleDraw()}>Choose a card!</div>
      </article>
    </section>
  );
}

export default CenterPanel;
