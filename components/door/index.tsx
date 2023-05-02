import { useState } from "react";
import styles from "./styles.module.css";

type Door = {
  selected?: Boolean;
  number: number;
}

const Door = (props: Door) => {
  const [opened, setOpened] = useState(false)

  return (
    <div className={styles.area} onClick={() => setOpened(!opened)}>
      <div className={`${styles.structure} ${props.selected && styles.selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{props.number}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
