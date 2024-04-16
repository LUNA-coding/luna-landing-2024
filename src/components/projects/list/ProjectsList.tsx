'use client';

import {useState} from 'react';
import styles from './list.module.css';
import Link from "next/link";

const menuItems = ['2023', '2022', '2021', '2020', '2019', '2018'];

export default function ProjectsList({data}: { data: any }) {
    const [activeMenu, setActiveMenu] = useState('2023');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    const filteredData = data?.results?.filter((project: any) => project.properties.year?.select?.name === activeMenu);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <h1><strong>{activeMenu}</strong>년의 루나 프로젝트</h1>
                    <div className={styles.menu}>
                        {menuItems.map((menu) => (
                            <div
                                key={menu}
                                className={`${styles.item} ${activeMenu === menu ? styles.active : ''}`}
                                onClick={() => handleMenuClick(menu)}
                            >
                                <p>{menu}년</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.list}>
                    {filteredData?.map((project: any) => (
                        <Link target={'_blank'} key={project.id} href={project.public_url}>
                            <div className={styles.project}>
                                <img
                                    src={project.properties.image?.files[0]?.file?.url || '/images/members/default.svg'}
                                    alt={project.properties.name?.title[0]?.plain_text || 'null'}
                                    width={140}
                                    height={140}
                                />
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        <h1>{project.properties.name?.title[0]?.plain_text || 'null'}</h1>
                                        <p>{project.properties.description?.rich_text[0]?.plain_text || 'null'}</p>
                                    </div>
                                    {/*<div className={styles.awards}>*/}
                                    {/*    {project.properties.awards?.multi_select?.map((award: any) => (*/}
                                    {/*        <div key={award.id} className={styles.award}>*/}
                                    {/*        <img src={'/icons/social_leaderboard.svg'} alt={'award'} width={16}*/}
                                    {/*             height={16}/>*/}
                                    {/*            {award.name}*/}
                                    {/*            <br/>*/}
                                    {/*    </div>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}