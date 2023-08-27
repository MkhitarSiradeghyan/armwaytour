import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../Button/Button";
import s from "@/components/SingleTour/SingleTour.module.sass";
import { useGetSingleTourQuery } from "@/src/store/api/tours.api";
import Title from "../Title/Title";
import { dbLocales } from "@/utils/getDBLocales";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import { transformURL } from "@/utils/transformURL";
import { useTranslate } from "@/src/hooks/useTranslate";

const SingleTour = () => {
  const registerTI = useTranslate('register')
  const { asPath, locale } = useRouter();
  const [tour, setTour] = useState();
  const slug = asPath.split("/").reverse()[0];
  const { isLoading, data } = useGetSingleTourQuery(slug);
  useEffect(() => {
    isLoading ? null : setTour(data?.body);
  }, [isLoading]);
  return (
    <div className={s.singleTour}>
      <Container>
      <div className={s.heading}>

      <Title title={tour?.translations[dbLocales[locale]].title} priority={2}/>
      <div className={s.button}>
        <Link href={`/register/${slug}`}>{registerTI}</Link>
      </div>
      </div>
      <div className={s.price}>{tour?.price} <span className={s.rest}>դրամ</span></div>
      <div className={s.date}>{tour?.date}</div>
      <div className={s.description}>{tour?.translations[dbLocales[locale]].description}</div>
      <Grid>
        {
          tour?.urls.map(e => {
            return <div className={s.item}><img src={transformURL(e)} alt="" /></div>
          })
        }
      </Grid>
      
      </Container>
    </div>
  );
};

export default SingleTour;
