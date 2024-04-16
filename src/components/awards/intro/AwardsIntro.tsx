import styles from './intro.module.css'
import Image from "next/image";
import Scroll from "@/components/scroll/Scroll";

export default function AwardsIntro() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Image src="/images/awards/main.webp" alt="luna" width={397} height={301}/>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>
                        <h2>세상을 비추는 달,</h2>
                        <h1>루나의 업적</h1>
                    </div>
                    <div className={styles.description}>
                        모든 사회 구성원이 평등하길 바라는 LUNA는 <strong>2018년부터 동아리 내에서 팀을<br />
                        이루어 74개의 대회 등, 다양한 외부 활동에 참여</strong>하였습니다. 그 결과 LUNA는<br />
                        능력을 인정받고 <strong>지금까지 총 7500만원 이상의 상금 및 지원금</strong>을 받았습니다.
                    </div>
                </div>
            </div>
            <Scroll />
        </div>
    );
}
