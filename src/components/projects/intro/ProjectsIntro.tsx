import styles from './intro.module.css';
import Scroll from "@/components/scroll/Scroll";

export default function ProjectsIntro() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>2023년의 루나</h1>
                <h2>
                    작년 한 해 동안 LUNA에서는 어떤 활동들을 통해 사회적 문제들을 해결했을까요?<br/>
                    <strong>스크롤하여 더 확인해보세요!</strong><br/>
                </h2>
                <Scroll/>
            </div>
        </div>
    );
}