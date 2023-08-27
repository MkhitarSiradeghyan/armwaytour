import React, { useState } from "react";
import s from "./CreateTour.module.sass";
import Button from "../Button/Button";
import { FaCameraRetro } from "react-icons/fa";
import { useAddTourMutation } from "@/src/store/api/tours.api";
import { useRouter } from "next/router";
import { useTranslate } from "@/src/hooks/useTranslate";

const CreateTour = () => {
  const { reload } = useRouter();
  const [files, setFiles] = useState(null);
  const createTI = useTranslate('create')
  const priceTI = useTranslate('price')
  const dateTI = useTranslate('date')
  const maxFilesTI = useTranslate('max_files')
  const [titleAM, setTitleAM] = useState("");
  const [titleRU, setTitleRU] = useState("");
  const [titleEN, setTitleEN] = useState("");
  const [descAM, setDescAM] = useState("");
  const [descRU, setDescRU] = useState("");
  const [descEN, setDescEN] = useState("");
  const [price, setPrice] = useState();
  const [date, setDate] = useState("");
  const [addTour, { data, isLoading, error }] = useAddTourMutation();
  const changeFiles = (e) => {
    const f = e.target.files;
    if (f.length > 50) {
      alert(maxFilesTI);
    } else {
      setFiles(f);
    }
  };
  const formData = new FormData();
  const submitHandler = async (e) => {
    e.preventDefault();
    const filesArray = Array.from(files).forEach((e, i) => {
      formData.append(`images`, e);
    });
    formData.append("description_am", descAM);
    formData.append("title_am", titleAM);
    formData.append("description_ru", descRU);
    formData.append("title_ru", titleRU);
    formData.append("description_en", descEN);
    formData.append("title_en", titleEN);
    formData.append("date", date);
    formData.append("price", price);
    await addTour(formData);
    console.log(isLoading);
    reload();
  };
  return (
    <div className={s.createTour}>
      <div className={s.inner}>
        <div className={s.descriptions}>
          <textarea
            required
            value={descAM}
            onChange={(e) => setDescAM(e.target.value)}
            placeholder="Նկարագիր"
            className={s.desc}
          ></textarea>
          <textarea
            required
            value={descRU}
            onChange={(e) => setDescRU(e.target.value)}
            placeholder="Описание"
            className={s.desc}
          ></textarea>
          <textarea
            required
            value={descEN}
            onChange={(e) => setDescEN(e.target.value)}
            placeholder="Description"
            className={s.desc}
          ></textarea>
        </div>
        <div className={s.info}>
          <div className={s.images}>
            <label className={s.label} htmlFor={s.file}>
              <input
                required
                onChange={changeFiles}
                id={s.file}
                type="file"
                accept="image/*"
                multiple
              />
              {files?.length ? (
                <>
                  <div className={s.labelPrime}>
                    {files.length} {files.length > 1 ? "photos" : "photo"}
                  </div>
                  <div className={s.labelSec}>
                    {files.length > 1 ? "are" : "is"} selected
                  </div>
                </>
              ) : (
                <FaCameraRetro />
              )}
            </label>
          </div>
          <div className={s.titles}>
            <input
              required
              className={s.title}
              value={titleAM}
              onChange={(e) => setTitleAM(e.target.value)}
              placeholder='Վերնագիր'
            />
            <input
              required
              className={s.title}
              value={titleRU}
              onChange={(e) => setTitleRU(e.target.value)}
              placeholder='Заголовок'
            />
            <input
              required
              className={s.title}
              value={titleEN}
              onChange={(e) => setTitleEN(e.target.value)}
              placeholder='Title'
            />
          </div>
          <div className={s.rest}>
            <input
              required
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={s.price}
              step={100}
              placeholder={priceTI}
            />
            <input
              required
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={s.date}
              placeholder={dateTI}
            />
            <Button onClick={submitHandler} title={createTI} type={"success"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTour;
