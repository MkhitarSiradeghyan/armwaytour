import React from 'react'
import s from './About.module.sass';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { useTranslate } from '@/src/hooks/useTranslate';


const About = () => {
    const aboutTI = useTranslate('about')
    return(
        <div className={s.about}>
            <Container>
                <Title title={aboutTI} priority={2}/>
                <div className={s.text}>Armway Tour</div>
            </Container>
        </div>
    )
}


export default About;