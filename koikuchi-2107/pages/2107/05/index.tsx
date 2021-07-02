import Image from "next/image";
import styles from "./index.module.scss";

import xaiPicCliped from "../../../public/images/licensed/artists/2107/xai_clip.png";
import xaiPic from "../../../public/images/licensed/artists/2107/xai_noedit.jpg";

const index = () => (
  <div className={styles.container}>
    <div className={styles.mainareaContainer}>
      <div className={styles.xaiContainer}>
        <div className={styles.xaiImageContainer}>
          <div>
            <Image src={xaiPic} width={1920} height={1080} objectFit="cover" />
          </div>
          <div>
            <Image
              src={xaiPicCliped}
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.xaiName}>
          <div>Last</div>
          <div>xai</div>
        </div>
      </div>
    </div>
  </div>
);
export default index;
