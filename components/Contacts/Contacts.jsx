import React from "react";
import s from "./Contacts.module.sass";
import Title from "../Title/Title";
import Container from "../Container/Container";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useTranslate } from "@/src/hooks/useTranslate";
import { useRouter } from "next/router";


const Contacts = () => {
  const {locale} = useRouter()
const addressTI = useTranslate("address")
const armeniaTI = useTranslate("armenia")
const yerevanTI = useTranslate("yerevan")
const mainAddressTI = useTranslate("main_address")
const phoneTI = useTranslate("phone")
const socialMediaMessengersTI = useTranslate("social_media_messengers")
const emailTI = useTranslate("email")
  return (
      <Container>
        <div className={s.inner}>
          <div className={s.map}>
            <iframe
              className={s.iframe}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.6206029924526!2d44.51644030688389!3d40.186542483582436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce21bc818db%3A0xa2209573d3c4cc1e!2z0JDRgNC80Y_QvdGB0LrQuNC5INCw0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INGC0LXQsNGC0YAg0L7Qv9C10YDRiyDQuCDQsdCw0LvQtdGC0LAg0LjQvNC10L3QuCDQkC4g0JAuINCh0L_QtdC90LTQuNCw0YDQvtCy0LAsIDQ2IE1lc3JvcCBNYXNodG9jIHBva2hvdGEsIFllcmV2YW4!5e0!3m2!1sru!2sam!4v1690523016844!5m2!1sru!2sam&language=${locale}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={s.contactsWrap}>
            <div className={s.contactItem}>
              <Title title={`${addressTI}: `} priority={2} />
              <div className={s.contactInfo}>
                {`${armeniaTI}, ${yerevanTI}, ${mainAddressTI}`}
              </div>
            </div>
            <div className={s.contactItem}>
              <Title title={`${phoneTI}: `} priority={2} />
              <div className={s.contactInfo}>+(374)-44-18-48-78</div>
            </div>
            <div className={s.contactItem}>
              <Title title={`${socialMediaMessengersTI}`} priority={2} />
              <div className={s.contactInfo}>
                <SocialLinks/>
              </div>
            </div>
            <div className={s.contactItem}>
              <Title title={`${emailTI}`} priority={2} />
              <div className={s.contactInfo}>mkhitar.siradeghyan@yandex.ru</div>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default Contacts;
