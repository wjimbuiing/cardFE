import styles from "./leftPanel.module.scss";
function LeftPanel({
  name,
  handleRestart,
}: {
  name: string;
  handleRestart: () => void;
}) {
  return (
    <section className={`${styles.contentC} `}>
      <article className={`${styles.topC}`}>
        <div className={`${styles.logoC} `}>
          <img src="/icons/logo.png" alt="" />
        </div>
        <div className={`${styles.adminC} `}>
          <div className={`${styles.adminTools} `}>Admin tools</div>
          <ul className={`${styles.toolsC}`}>
            <li>
              <button type="button" onClick={() => handleRestart()}>
                <img src="/icons/restart.svg" alt="" />
                <span>Restart Game</span>
              </button>
            </li>
          </ul>
        </div>
      </article>
      <article className={`${styles.botC}`}>
        <div className={`${styles.userImage}`}></div>
        <div className={`${styles.userInfoC}`}>
          <div className={`${styles.name}`}>{name}</div>
          <div className={`${styles.accountType}`}>Free account</div>
        </div>
      </article>
    </section>
  );
}

export default LeftPanel;
