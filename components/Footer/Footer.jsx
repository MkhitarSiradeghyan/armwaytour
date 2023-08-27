import s from './Footer.module.sass'
import rotateLogo from '../../assets/img/rotate.svg'
import Container from '../Container/Container'
import SocialLinks from '../SocialLinks/SocialLinks'
import { useTranslate } from '@/src/hooks/useTranslate'
const Footer = () => {
const currentDate = new Date().getFullYear()
const designedByTI = useTranslate('designed_by')
    return (
        <div className={s.footer}>
            <Container>
                <div className={s.inner}>
                    <div className={s.copy}>©2022-{currentDate} Armenian Way Tour</div>
                    <div className={s.social}>
                        <SocialLinks/>
                    </div>
                    <div className={s.media}>
                        <div>{designedByTI}</div>
                        <a href="https://www.instagram.com/media.labstudio/" target="_blanc">
                            <img src={rotateLogo.src} width={60} alt="" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Footer