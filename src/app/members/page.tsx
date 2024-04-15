import styles from "./page.module.css";
import MembersIntro from "@/components/members/intro/MembersIntro";
import MembersList from "@/components/members/list/MembersPage";

export default function Members() {
    return (
        <div className={styles.container}>
            <MembersIntro />
            <MembersList />
        </div>
    );
}
