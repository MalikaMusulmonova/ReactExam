import React from 'react';
import { homeData } from '../home/homeData';
import styles from './News.module.scss'
import { NewsData } from './NewsData';
import { useState } from 'react';

const News = () => {
    const [items, setItems] = useState(NewsData)
    return (
        <div className={styles.News}>
            {
                 NewsData.map((elements) => {
                    const { id, name, category, price, image, data } = elements

                    return (
                        <>
                            <div className={styles.news}>
                                <ul className={styles.news__list}>
                                    <li className={styles.news__item}><img className={styles.news__photos} src={elements.image} alt="images" /></li>
                                    <li className={styles.news__item}><b>{elements.data}</b></li>
                                    <li className={styles.news__item}><i>{elements.description}</i></li>  
                                </ul>
                            </div>
                        </>
                    )
                })

            }
         </div>   
    );
}

export default News;
