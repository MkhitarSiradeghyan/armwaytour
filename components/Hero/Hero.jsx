import React, { useEffect, useState } from "react";
import s from "./Hero.module.sass";
import Container from "../Container/Container";
import Slider from "react-slick";
import { useGetSlidersQuery } from "@/src/store/api/sliders.api";
import { transformURL } from './../../utils/transformURL';
import { useRouter } from "next/router";
import { dbLocales } from "@/utils/getDBLocales";
import { useTranslate } from "@/src/hooks/useTranslate";

const Hero = () => {
  const noItemsTI = useTranslate('no_items')
  const [slides, setSlides] = useState([])
  const {isLoading, data} = useGetSlidersQuery()
  const {locale} = useRouter()
  useEffect(() => {
    isLoading ? [] : setSlides(data?.body)
  }, [isLoading])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className={s.hero}>
      <Container>
        <div className={s.inner}>

        <Slider {...settings}>
          {!isLoading ? (
            slides?.map((el, i) => {
              return (
                <div key={`k${Math.random()}`} className={s.slide}>
                  <div className={s.title}>{el.translations[dbLocales[locale]].title}</div>
                  <img src={transformURL(el.url)} alt={`Slide ${i}`} />
                </div>
              );
            })
          ) : (
            <h3>{noItemsTI}</h3>
          )}
        </Slider>
        </div>
        
      </Container>
    </div>
  );
};

export default Hero;
