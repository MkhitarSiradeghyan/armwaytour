import React from "react";
import s from "./SocialLinks.module.sass";
import {
    FaFacebook,
    FaInstagram,
    FaTelegram,
    FaViber,
    FaWhatsapp,
    FaYoutube,
  } from "react-icons/fa";
  
const SocialLinks = () => {
  return (
    <>
      <FaInstagram className={`${s.instagram} ${s.icon}`} />
      <FaYoutube className={`${s.youtube} ${s.icon}`} />
      <FaWhatsapp className={`${s.whatsapp} ${s.icon}`} />
      <FaViber className={`${s.viber} ${s.icon}`} />
      <FaFacebook className={`${s.facebook} ${s.icon}`} />
      <FaTelegram className={`${s.telegram} ${s.icon}`} />
    </>
  );
};

export default SocialLinks;
