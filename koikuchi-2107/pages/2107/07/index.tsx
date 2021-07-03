import styles from "./index.module.scss";
import logo from "../../../public/images/licensed/logo/logo_black.png";
import Image from "next/image";

const index = () => (
  <div className={styles.container}>
    <div>
      <Image src={logo} width={800} height={500} objectFit="contain" />
    </div>
    <div className={styles.tfe}>Thank You Everybody!</div>
    <div className={styles.border}></div>
    <div className={styles.tfeJP}>ご視聴ありがとうございました</div>
  </div>
);
export default index;
