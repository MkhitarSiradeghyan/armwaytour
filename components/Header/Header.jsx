import React, { useEffect, useState } from "react";
import s from "./Header.module.sass";
import logoImg from "../../assets/img/logo.svg";
import { getCookie, setCookie } from "cookies-next";
import setLanguage from "next-translate/setLanguage";
import Container from "../Container/Container";
import Link from "next/link";
import Image from "next/image";
import { AM, RU, US } from "country-flag-icons/react/3x2";
import { useTranslate } from "@/src/hooks/useTranslate";
import { useRouter } from "next/router";
import { useLogoutMutation } from "@/src/store/api/auth.api";
import { FaTimes } from "react-icons/fa";
import Burger from "../Burger/Burger";

const Header = ({ isAdmin }) => {
  const galleryTI = useTranslate("gallery");
  const toursTI = useTranslate("tours");
  const aboutTI = useTranslate("about");
  const contactsTI = useTranslate("contacts");
  const sliderTI = useTranslate("slider");
  const currentUserTI = useTranslate("current_user");
  const logoutTI = useTranslate("logout");
  const loginTI = useTranslate("login");

  const { pathname, push } = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [logout, { isLoading, error }] = useLogoutMutation();
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logout();
      setCookie("authToken", null);
      setIsAuth(false);
      push('/')
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const authToken = getCookie("authToken");
    setIsAuth(!!authToken);
  }, [isAuth]);

  return (
    <div className={s.outer}>
      <Container>
        <div className={s.inner}>
          <div className={s.logo}>
            <Link href={"/"}>
              <Image src={logoImg} loading="lazy" alt="Logo here" />
            </Link>
          </div>
          <Burger>
            <nav className={s.linksWrap}>
              <ul className={s.linksList}>
                {isAdmin ? (
                  <>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/admin/gallery" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/admin/gallery"}>{galleryTI}</Link>
                    </li>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/admin/tours" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/admin/tours"}>{toursTI}</Link>
                    </li>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/admin/sliders" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/admin/sliders"}>{sliderTI}</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/gallery" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/gallery"}>{galleryTI}</Link>
                    </li>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/tours" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/tours"}>{toursTI}</Link>
                    </li>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/about" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/about"}>{aboutTI}</Link>
                    </li>
                    <li
                      className={`${s.listItem} ${
                        pathname == "/contacts" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/contacts"}>{contactsTI}</Link>
                    </li>
                  </>
                )}
                <li
                  className={s.langItem}
                  onClick={async () => await setLanguage("am")}
                >
                  <AM title="Հայերեն" />
                </li>
                <li
                  className={s.langItem}
                  onClick={async () => await setLanguage("ru")}
                >
                  <RU title="Русский" />
                </li>
                <li
                  className={s.langItem}
                  onClick={async () => await setLanguage("en")}
                >
                  <US title="English" />
                </li>
                {isAuth ? (
                  <>
                    <li
                      className={`${s.admin} ${s.listItem} ${
                        pathname == "/profile" ? s.activeLink : ""
                      }`}
                    >
                      <Link href={"/profile"}>{currentUserTI}</Link>
                    </li>
                    <li
                      onClick={logoutHandler}
                      className={`${s.logout} ${s.listItem}`}
                    >
                      {logoutTI}
                    </li>
                  </>
                ) : (
                  <li
                    className={`${s.login} ${s.listItem} ${
                      pathname == "/login" ? s.activeLink : ""
                    }`}
                  >
                    <Link href={"/login"}>{loginTI}</Link>
                  </li>
                )}
              </ul>
            </nav>
          </Burger>
        </div>
      </Container>
    </div>
  );
};

export default Header;
