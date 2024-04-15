'use client';

import { useState } from 'react';
import styles from './list.module.css';

const menuItems = ['LUNA 7기', 'LUNA 6기', 'LUNA 5기', 'LUNA 4기', 'LUNA 3기', 'LUNA 2기', 'LUNA 1기', '명예 멤버'];

export default function MembersList({ data }: { data: any }) {
    const [activeMenu, setActiveMenu] = useState('LUNA 7기');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    const filteredData = data?.results?.filter((member: any) => member.properties.lunaGeneration?.select?.name === activeMenu);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <h1>{activeMenu}</h1>
                    <div className={styles.menu}>
                        {menuItems.map((menu) => (
                            <div
                                key={menu}
                                className={`${styles.item} ${activeMenu === menu ? styles.active : ''}`}
                                onClick={() => handleMenuClick(menu)}
                            >
                                <p>{menu}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.list}>
                    {filteredData?.map((member: any) => (
                        <div key={member.id} className={styles.member}>
                            <h2>{member.properties.position?.select?.name || 'null'}</h2>
                            <img
                                src={member.properties.image?.files[0]?.file?.url || '/images/members/default.svg'}
                                alt={member.properties.name?.title[0]?.plain_text || 'null'}
                                width={140}
                                height={140}
                            />
                            <div className={styles.info}>
                                <h1>{member.properties.name?.title[0]?.plain_text || 'null'}</h1>
                                <h2>
                                    {member.properties.generation?.select?.name || 'null'}{' '}
                                    {member.properties.class?.select?.name || 'null'}
                                </h2>
                            </div>
                            <div className={styles.comment}>
                                <p>{member.properties.description?.rich_text[0]?.plain_text || 'null'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}