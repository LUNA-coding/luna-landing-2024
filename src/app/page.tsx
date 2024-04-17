import styles from "./page.module.css";
import HomeIntro from "@/components/home/intro/HomeIntro";
import HomeProjectsPage from "@/components/home/projects/HomeProjectsPage";

export default function Home() {
    return (
        <div className={styles.container}>
            <HomeIntro />
            <HomeProjectsPage />
        </div>
    );
}
