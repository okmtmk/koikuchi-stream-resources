import Image from "next/image";
import styles from "./index.module.scss";

import wiredlainPic from "../../../public/images/licensed/artists/2107/wiredlain.jpg";

const index = () => (
  <div className={styles.container}>
    <div className={styles.mainareaContainer}>
      <div className={styles.wiredlainContainer}>
        <div className={styles.wiredlainMainArea}>
          <div className={styles.wiredlainIcon}>
            <Image
              src={wiredlainPic}
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className={styles.wiredlainName}>
            <div>4th</div>
            <div>WiredLain</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default index;
