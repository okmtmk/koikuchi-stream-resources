import Image from "next/image";
import styles from "./index.module.scss";
import logopng from "../../../../public/images/licensed/logo/logo_white.png";

const index = () => (
  <div className={styles.container}>
    <div className={styles.mainarea}>
      <div className={styles.mainareaContainer}></div>
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
