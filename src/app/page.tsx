import styles from "./page.module.css";
import HomeIntro from "@/components/home/intro/HomeIntro";
import HomeProjectsPage from "@/components/home/projects/HomeProjectsPage";
import HomeAwards from "@/components/home/awards/HomeAwards";
import HomeFuture from "@/components/home/future/HomeFuture";

export default function Home() {
    return (
        <div className={styles.container}>
            <HomeIntro />
            <HomeProjectsPage />
            <HomeAwards />
            <HomeFuture />
        </div>
    );
}
