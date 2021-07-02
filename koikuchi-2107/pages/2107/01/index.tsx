import Image from "next/image";
import styles from "./index.module.scss";

import mushPic from "../../../public/images/licensed/artists/2107/mush_clip.png";

const index = () => (
  <div className={styles.container}>
    <div className={styles.mainareaContainer}>
      <div className={styles.mushContainer}>
        <div className={styles.mushName}>
          <div>1st</div>
          <div>まっしゅ</div>
        </div>
        <div className={styles.mushImg}>
          <Image src={mushPic} width={600} height={1500} objectFit="contain" />
        </div>
      </div>
    </div>
  </div>
);
export default index;
