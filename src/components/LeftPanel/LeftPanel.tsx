import styles from "./leftPanel.module.scss";
function LeftPanel({ username }: { username: string }) {
  return (
    <section className={`${styles.contentC}`}>
      <article className={`${styles.topC}`}>
        <div>
          <img src="/icons/logo.png" alt="" />
        </div>
        <div className={`${styles.adminC}`}>
          <div className={`${styles.adminTools}`}>Admin tools</div>
          <ul className={`${styles.toolsC}`}>
            <li>
              <img src="/icons/restart.svg" alt="" />
              <span>Restart Game</span>
            </li>
          </ul>
        </div>
      </article>
      <article className={`${styles.botC}`}>
        <div className={`${styles.userImage}`}></div>
        <div className={`${styles.userInfoC}`}>
          <div className={`${styles.username}`}>{username}</div>
          <div className={`${styles.accountType}`}>Free account</div>
        </div>
      </article>
    </section>
  );
}

export default LeftPanel;
