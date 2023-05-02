import styles from "./styles.module.css";

type Door = {
  selected?: Boolean;
}

const Door = (props: Door) => {
  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${props.selected && styles.selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
