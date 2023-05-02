import styles from "./styles.module.css";

const Door = () => {
  return (
    <div className={styles.area}>
      <div className={styles.structure}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
