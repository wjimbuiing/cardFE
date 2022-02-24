import { useEffect, useState } from "react";
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
  // local state of animation playing
  const [isPlaying, setIsPlaying] = useState(false);

  // everytime a new card is drawn or selected an drawn card, animation restarts
  useEffect(() => {
    setIsPlaying(false);
    if (drawnCards.length > 0) {
      var timer = setTimeout(() => {
        setIsPlaying(true);
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [drawnCards]);

  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.greetingC}`}>
        <div>
          Hi <span>{name}</span>,
        </div>
        <div>Let’s Play! 👋</div>
      </article>
      <article className={`${styles.cardC}`}>
        <div
          className={`${styles.cardBG} ${stackSize > 0 && styles.cardBGbgc} `}
        ></div>
        <div
          className={`${styles.cardDummy1} ${
            isPlaying && styles.cardDummy1Trans
          }`}
        >
          {activeIndex !== undefined && (
            <img
              src={drawnCards[activeIndex].image}
              alt=""
              className={`${isPlaying && styles.cardImg}`}
            />
          )}
        </div>

        <div
          className={`${stackSize > 0 && styles.stack} ${
            stackSize >= 39 && styles.stack52
          } ${stackSize < 39 && stackSize >= 26 && styles.stack39} ${
            stackSize < 26 && stackSize >= 13 && styles.stack26
          } ${stackSize < 13 && stackSize >= 1 && styles.stack13} `}
        ></div>
        <div className={`${stackSize > 0 && styles.stackShadow} `}></div>
      </article>
      <article className={`${styles.controllersC} `}>
        {stackSize !== 0 && (
          <button type="button" onClick={() => handleDraw()}>
            Choose a card!
          </button>
        )}
      </article>
    </section>
  );
}

export default CenterPanel;
