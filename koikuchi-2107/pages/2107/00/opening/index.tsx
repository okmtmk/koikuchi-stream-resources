import Image from "next/image";
import styles from "./index.module.scss";

import logopng from "../../../../public/images/licensed/logo/logo_white.png";
import mushPic from "../../../../public/images/licensed/artists/2107/mush_clip.png"
import jitPic from "../../../../public/images/licensed/artists/2107/ji__t_clip.png"
import mimoPicCliped from "../../../../public/images/licensed/artists/2107/okmt_clip.png"
import mimoPic from "../../../../public/images/licensed/artists/2107/okmt.png"
import wiredlainPic from "../../../../public/images/licensed/artists/2107/wiredlain.jpg"
import xaiPicCliped from "../../../../public/images/licensed/artists/2107/xai_clip.png"
import xaiPic from "../../../../public/images/licensed/artists/2107/xai_noedit.jpg"

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

        <div className={styles.mimoContainer}>
          <div className={styles.mimoImgContainer}>
            <div className={styles.mimoImg}>
              <div>
                <Image src={mimoPic} width={1440} height={1080} objectFit="cover" />
              </div>
              <div>
                <Image src={mimoPicCliped} width={800} height={927} objectFit="contain" />
              </div>
            </div>
          </div>

          <div className={styles.mimoNameContainer}>
            <div className={styles.mimoName}>
              <div>3rd</div>
              <div>おかもと</div>
            </div>
          </div>
        </div>

        <div className={styles.wiredlainContainer}>
          <div className={styles.wiredlainMainArea}>
            <div className={styles.wiredlainIcon}>
              <Image src={wiredlainPic} width={400} height={400} objectFit="cover" />
            </div>
            <div className={styles.wiredlainName}>
              <div>4th</div>
              <div>WiredLain</div>
            </div>
          </div>

          <div className={styles.wiredlainBackgroundContainer}>
            <div className={styles.wiredlainBackground}>
              <Image src={wiredlainPic} width={1440} height={1080} objectFit="cover" />
            </div>
          </div>
        </div>

        <div className={styles.xaiContainer}>
          <div className={styles.xaiName}>
            <div>Last</div>
            <div>xai</div>
          </div>
          <div className={styles.xaiImageContainer}>
            <div>
              <Image src={xaiPicCliped} width={1440} height={1080} objectFit="contain" />
            </div>
            <div>
              <Image src={xaiPic} width={1440} height={1080} objectFit="cover" />
            </div>
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
        <div>
          <div>START</div>
          <div>21:00</div>
        </div>
      </div>
    </div>
  </div>
);
export default index;
