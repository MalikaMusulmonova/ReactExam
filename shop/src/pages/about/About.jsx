import React from 'react';
import styles from './About.module.scss'
import photo from '../../../src/AboutPagePhoto.svg'

const About = () => {
    return ( 
        <div className={styles.About}>
            <h2 className={styles.About__title}>About Us</h2>
            <p className={styles.About__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra <br /> adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet <br /> eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. 
             Quis pharetra adipiscing ultrices vulputate posuere <br />  tristique. In sed odio nec aliquet eu proin mauris et.</p>

            <img src={photo} />

            <p className={styles.About__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra <br /> adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet <br /> eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Quis pharetra adipiscing <br /> ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. <br /> It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. </p>

        </div>
        
    );
}

export default About;
