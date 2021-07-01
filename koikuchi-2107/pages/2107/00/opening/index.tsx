import Image from "next/image";
import styles from "./index.module.scss";

import logopng from "../../../../public/images/licensed/logo/logo_white.png";
import mushPic from "../../../../public/images/licensed/artists/2107/mush_clip.png"
import jitPic from "../../../../public/images/licensed/artists/2107/ji__t_clip.png"

const index = () => (
  <div className={styles.container}>
    <div className={styles.mainarea}>
      <div className={styles.mainareaContainer}>

        <div className={styles.mushContainer}>
          <div className={styles.mushName}>
            <div>
              1st
            </div>
            <div>まっしゅ</div>
          </div>
          <div className={styles.mushImg}>
            <Image src={mushPic} width={600} height={1500} objectFit="contain" />
          </div>
        </div>

        <div className={styles.jitContainer}>
          <div className={styles.jitNameContainer}>
            <div className={styles.jitName}>
              <div>2nd</div>
              <div>じっつ</div>
            </div>

            <div className={styles.jitImg}>
              <Image src={jitPic} width={600} height={800} objectFit="contain" />
            </div>
          </div>

          <div className={styles.jitBackground}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>
    </div>
    <div className={styles.logoarea}>
      <div className={styles.logocontainer}>
        <div>
          <Image
            src={logopng}
            width={470}
            height={400}
            objectFit="contain"
            alt="こいくちストリーム"
          />
        </div>
        <div>Start 21:00</div>
      </div>
    </div>
  </div>
);
export default index;
