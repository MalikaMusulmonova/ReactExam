import React, { useState,useEffect } from 'react';
import styles from '../home/Home.module.scss'
import foodImage from '../../../src/Mask_group.svg'
import { homeData } from './homeData';
import { customersData } from './customersData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


const Home = ({ slides }) => {

    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)
    const [items, setItems] = useState(homeData,customersData)
    const length = slides.length
    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
   const NavigationPart = () => {
        navigate('/news')
   }

    const filterItem = (categItem) => {
        const updatedItems = homeData.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems)
    }

    return (
        <>
            <div className={styles.intro}>
                <div className={styles.intro__dataSide}>
                    <h3 className={styles.intro__dataSide__slogan}>Chase the new Flavour</h3>
                    <h1 className={styles.intro__dataSide__title}>The key to Fine dining</h1>
                    <p className={styles.intro__dataSide__description}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <button className={styles.intro__dataSide__button} onClick={NavigationPart}>Explore Menu</button>
                </div>
                <img src={foodImage} alt="intro-image" />
            </div>

            <section className={styles.popularDishes}>

                <h1 className={styles.popularDishes__title}>Popular Dishes</h1>

                <FaArrowAltCircleLeft className={styles.popularDishes__leftBtn} onClick={prevSlide} />
                <FaArrowAltCircleRight className={styles.popularDishes__rightBtn} onClick={nextSlide} />


                {homeData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <><img className={styles.popularDishes__images} src={slide.image} alt='hamburger' /><p src={slide.data} /> {slide.data} </>
                            )}
                        </div>
                    )

                })}
            </section>

            <section className={styles.menuPack}>

                <h3 className={styles.menuPack__title}>Our Regular Menu Pack</h3>
                <div className={styles.menuPack__container}>
                    <div className={styles.menuPack__part}>
                        <button className={styles.menuPack__partBtn1} onClick={() => setItems(homeData)}>all</button> 
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('hamburger')}>hamburger</button>
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('kebab')}>kebab</button>
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('turk kebab')}>turk kebab</button>
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('pitsa')}>pitsa</button>
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('dessert')}>dessert</button>
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('grill')}>grill</button>
                        <button className={styles.menuPack__partBtn1} onClick={() => filterItem('meat')}>meat</button>
                    </div>
                </div>

                <div className={styles.information}>
                    {

                        items.map((elements) => {
                            const { id, name, category, price, image, data } = elements

                            return (
                                <>
                                    <div className={styles.fullData}>
                                        <ul className={styles.fullData__list}>
                                            <li className={styles.fullData__item}><img className={styles.fullData__photos} src={elements.image} alt="images" /></li>
                                            <li className={styles.fullData__item}><b>{elements.data}</b></li>
                                            <li className={styles.fullData__item}><i>{elements.name}</i> </li>
                                            <li className={styles.fullData__item}><b>{elements.price}</b></li>
                                            <li className={styles.fullData__item}><i>{elements.category}</i></li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })

                    }
                </div>
            </section>


            {/* <section className={styles.HappyCustomers}>

                <p className={styles.HappyCustomers__paragraph}>Testimony</p>
                <h2 className={styles.HappyCustomers__title}>Happy customers</h2>


                <FaArrowAltCircleLeft className={styles.HappyCustomers__leftBtn} onClick={prevSlide} />
                <FaArrowAltCircleRight className={styles.HappyCustomers__rightBtn} onClick={nextSlide} />

                {customersData.map((slidess, indexes) => {
                    return (
                        <div className={indexes === current ? 'slidess active' : 'slidess'} key={indexes}>
                            {indexes === current && (
                                <>
                                {slidess.data}
                                </>
                            )}
                        </div>
                    )

                })}
                
            </section> */}
        </>
    );
}

export default Home;
