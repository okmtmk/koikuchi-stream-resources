import styles from "./index.module.scss";
import Image from "next/image";
import gswh from "../../../public/images/licensed/gs/gswh.png";

const index = () => (
  <div className={styles.container}>
    <div className={styles.leftPane}>
      <div className={styles.heading}>Players</div>
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          <div>1st Player</div>
          <div>まっしゅ</div>
        </div>
        <div className={styles.player}>
          <div>2nd Player</div>
          <div>じっつ</div>
        </div>
        <div className={styles.player}>
          <div>3rd Player</div>
          <div>おかもと</div>
        </div>
        <div className={styles.player}>
          <div>4th Player</div>
          <div>WiredLain</div>
        </div>
        <div className={styles.player}>
          <div>Last Player</div>
          <div>xai</div>
        </div>
      </div>
    </div>
    <div className={styles.rightPane}>
      <div className={styles.heading}>Staff</div>
      <div className={styles.playerContainer}>
        <div className={styles.player}>
          <div>Logo Creation</div>
          <div>塩パセリ</div>
        </div>
        <div className={styles.player}>
          <div>Filming Collaboration</div>
          <div>焦</div>
        </div>
        <div className={styles.player}>
          <div>Produce &amp; Broadcasting</div>
          <div>
            <Image
              src={gswh}
              width={600}
              height={150}
              objectFit="contain"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default index;
