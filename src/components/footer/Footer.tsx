import styles from '@/components/footer/footer.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <Image src={'/icons/logo.svg'} alt={'luna'} width={54} height={54}/>
                    <div className={styles.column}>
                        <h2>세상을 비추는 달,</h2>
                        <h1>LUNA</h1>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.row}>
                        <Link href={'https://www.instagram.com/dimigo_luna/'} target={'_blank'}>
                            <Image src={'/icons/instagram.svg'} alt={'instagram'} width={24} height={24}/></Link>
                        <Link href={'https://github.com/LUNA-coding'} target={'_blank'}>
                            <Image src={'/icons/github.svg'} alt={'github'} width={24} height={24}/></Link>
                        <Link href={'https://www.youtube.com/channel/UCWfvTEUzP9b2pPTDBSi9IMg'} target={'_blank'}>
                            <Image src={'/icons/youtube.svg'} alt={'youtube'} width={24} height={24}/></Link>
                        <Link href={'https://www.facebook.com/lunacoding/'} target={'_blank'}>
                            <Image src={'/icons/facebook.svg'} alt={'facebook'} width={24} height={24}/></Link>
                    </div>
                    <h3>Refreshed by <Link href={'https://github.com/sspzoa'} target={'_blank'}>sspzoa</Link> /
                        Copyright © 2024 LUNA All rights reserved.</h3>
                </div>
            </div>
        </div>
    )
}