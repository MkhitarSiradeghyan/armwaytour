import React, { useEffect, useState } from "react";
import Register from "@/components/Register/Register";
import { useRouter } from "next/router";
import { useGetSingleTourQuery } from "@/src/store/api/tours.api";

const RegisterPage = () => {
  const { asPath } = useRouter();
  const [tour, setTour] = useState();
  const slug = asPath.split("/").reverse()[0];
  const { isLoading, data } = useGetSingleTourQuery(slug);
  useEffect(() => {
    isLoading ? null : setTour(data?.body);
    console.log(isLoading, data);
  }, [isLoading]);
  return <Register tour={tour} />;
};

export default RegisterPage;
