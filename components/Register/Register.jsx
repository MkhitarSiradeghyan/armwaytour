import React, { useState } from "react";
import s from "./Register.module.sass";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import { useRegisterMutation } from "@/src/store/api/tours.api";
import Container from "../Container/Container";
import { useRouter } from "next/router";
import { dbLocales } from "@/utils/getDBLocales";
import { useTranslate } from "@/src/hooks/useTranslate";

const Register = ({ tour }) => {
  const phoneTI = useTranslate("phone");
  const nameTI = useTranslate("name");
  const emailTI = useTranslate("email");
  const registerTI = useTranslate("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { locale } = useRouter();
  const [register, { isLoading, data, error }] = useRegisterMutation();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phone,
      email,
      tour_id: tour.slug,
    };
    register(formData);
  };
  return (
    <Layout IsAdmin={false}>
      <Container>
        <div className={s.inner}>
          <div className={s.form}>
            <div className={s.tourName}>
              <span className={s.tourNameMarked}>
                {tour?.translations[dbLocales[locale]].title}
              </span>
            </div>
            <label htmlFor={s.name} className={s.label}>
              <input
                onChange={(e) => setName(e.target.value)}
                className={s.input}
                type="text"
                id={s.name}
                value={name}
                placeholder={nameTI}
              />
            </label>
            <label htmlFor={s.phone} className={s.label}>
              <input
                className={s.input}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                id={s.phone}
                value={phone}
                placeholder={phoneTI}
                pattern="\+(374)-\d{2}-\d{2}-\d{2}"
              />
            </label>
            <label htmlFor={s.email} className={s.label}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={s.input}
                type="text"
                id={s.email}
                value={email}
                placeholder={emailTI}
              />
            </label>
            <Button title={registerTI} onClick={submitHandler} type={"info"} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Register;
