import React, { useEffect, useState } from "react";
import s from "./Tours.module.sass";
import Grid from "../Grid/Grid";
import ToursItem from "../ToursItem/ToursItem";
import Container from "../Container/Container";
import Title from "../Title/Title";
import { useGetToursQuery } from "@/src/store/api/tours.api";
import { useTranslate } from "@/src/hooks/useTranslate";

const Tours = () => {
  const upcomingToursTI = useTranslate("upcoming_tours")
  const noItemsTI = useTranslate("no_items")
  const [tours, setTours] = useState();
  const { isLoading, data } = useGetToursQuery();
  useEffect(() => {
    isLoading ? [] : setTours(data?.body);
  }, [isLoading]);
  console.log(tours);
  return (
    <div className={s.tours}>
      <Container>
        <Title title={upcomingToursTI} priority={2} />
        <Grid>
          {!isLoading ? (
            tours?.map((e) => {
              return <ToursItem item={e} />;
            })
          ) : (
            <h3>{noItemsTI}</h3>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Tours;
