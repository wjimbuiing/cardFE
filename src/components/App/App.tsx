import axios from "axios";
import { useEffect, useState } from "react";
import CenterPanel from "../CenterPanel/CenterPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import styles from "./app.module.scss";

interface ICard {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
  time: Date;
}

function App() {
  // modify {fname} here
  const data = {
    username: "fname",
  };

  // loading state when first load app
  const [loading, setLoading] = useState(true);

  // local state for deckID
  const [deckID, setDeckID] = useState<string>("");

  // local state for previously drawn cards
  const [drawnCards, setDrawnCards] = useState<ICard[]>([]);

  const pushDrawnCards = (item: ICard) => {
    setDrawnCards([item]);
  };

  // restart game function
  const handleRestart = async () => {
    try {
      setLoading(true);
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

  useEffect(() => {
    // handleRestart()
  }, []);

  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.leftC}`}>
        <LeftPanel username={data.username}></LeftPanel>
      </article>
      <article className={`${styles.centerC}`}>
        <CenterPanel username={data.username}></CenterPanel>
      </article>
      <article className={`${styles.rightC}`}>
        <RightPanel></RightPanel>
      </article>
    </section>
  );
}

export default App;
