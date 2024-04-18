import styles from "./page.module.css";
import HomeIntro from "@/components/home/intro/HomeIntro";
import HomeProjectsPage from "@/components/home/projects/HomeProjectsPage";
import HomeFuture from "@/components/home/future/HomeFuture";
import HomeAwardsPage from "@/components/home/awards/HomeAwardsPage";

export default function Home() {
    return (
        <div className={styles.container}>
            <HomeIntro />
            <HomeProjectsPage />
            <HomeAwardsPage />
            <HomeFuture />
        </div>
    );
}
