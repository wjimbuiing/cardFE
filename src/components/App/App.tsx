import axios from "axios";
import { useEffect, useState } from "react";
import formatDate from "../../lib/formatDate";
import CenterPanel from "../CenterPanel/CenterPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import styles from "./app.module.scss";

export interface ICard {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
  time: string;
}

function App() {
  // modify {fname} here
  const data = {
    name: "fname",
  };

  // loading state when first load app
  const [loading, setLoading] = useState(true);
  // fetching state everytime making request to API
  const [fetching, setFetching] = useState(false);

  // local state for deckID
  const [deckID, setDeckID] = useState<string>("");

  // local state for previously drawn cards
  const [drawnCards, setDrawnCards] = useState<ICard[]>([]);

  // index of active/selected card in the drawnCards
  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  // update function: push new card to (the start of) local drawn cards (max 5)
  const pushDrawnCards = (item: ICard) => {
    setDrawnCards([{ ...item, time: formatDate() }, ...drawnCards.slice(0, 4)]);
  };

  // restart game function
  const handleRestart = async () => {
    try {
      setActiveIndex(undefined);
      setStackSize(52);
      setLoading(true);
      setDrawnCards([]);
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      if (res.data.success === true) {
        setDeckID(res.data.deck_id);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // draw new card function
  const handleDraw = async () => {
    try {
      setFetching(true);
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
      );
      if (res.data.success === true) {
        pushDrawnCards(res.data.cards[0]);
        setActiveIndex(0);
        setStackSize(res.data.remaining);
      }
      setFetching(false);
    } catch (error) {
      console.log({ error });
      setFetching(false);
    }
  };

  // shuffle and generate new deck when the app load up or restart (once)
  useEffect(() => {
    handleRestart();
  }, []);

  // * Extra features:
  // * number of cards left in stack (adjust stack size accordingly)
  const [stackSize, setStackSize] = useState(52);

  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.leftC}`}>
        <LeftPanel name={data.name} handleRestart={handleRestart}></LeftPanel>
      </article>
      <article className={`${styles.centerC}`}>
        <CenterPanel
          name={data.name}
          handleDraw={handleDraw}
          drawnCards={drawnCards}
          activeIndex={activeIndex}
          stackSize={stackSize}
          // isNewCard={isNewCard}
        ></CenterPanel>
      </article>
      <article className={`${styles.rightC}`}>
        <RightPanel
          drawnCards={[...drawnCards]}
          setActiveIndex={setActiveIndex}
        ></RightPanel>
      </article>
    </section>
  );
}

export default App;
