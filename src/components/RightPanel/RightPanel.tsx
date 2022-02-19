import { useEffect, useState } from "react";
import { ICard } from "../App/App";
import styles from "./rightPanel.module.scss";

function RightPanel({
  drawnCards,
  setActiveIndex,
}: {
  drawnCards: ICard[];
  setActiveIndex: (i: number | undefined) => void;
}) {
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.lastCardsC}`}>
        <div className={`${styles.title}`}>Your last cards</div>
        <div className={`${styles.cardsC}`}>
          {drawnCards.map((card, index) => (
            <div
              className={`${styles.cardC}`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`${styles.cardImg}`}>
                <img src={`${card.image}`} alt="" />
              </div>
              <div className={`${styles.cardInfo}`}>
                <div className={`${styles.cardName}`}>
                  {card.value} of {card.suit}
                </div>
                <div className={`${styles.cardTime}`}>{card.time}</div>
              </div>
              <div className={`${styles.cardArrow}`}>
                <img src="/icons/rightBlack.svg" alt="" />
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default RightPanel;
