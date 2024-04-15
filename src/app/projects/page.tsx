import Image from "next/image";
import styles from "./page.module.css";
import Scroll from "@/components/scroll/Scroll";
import {usePathname} from "next/navigation";
import ProjectsIntro from "@/components/projects/intro/ProjectsIntro";

export default function Projects() {

    return (
        <div className={styles.container}>
            <ProjectsIntro/>
        </div>
    );
}
