import React, { useState } from "react";
import s from "./CreateSlider.module.sass";
import Button from "../Button/Button";
import { FaCameraRetro } from "react-icons/fa";
import { useAddSliderMutation } from "@/src/store/api/sliders.api";
import { useRouter } from "next/router";
import { useTranslate } from "@/src/hooks/useTranslate";

const CreateSlider = () => {
  const { reload } = useRouter();
  const createTI = useTranslate('create')
  const [textAM, setTextAM] = useState("");
  const [textRU, setTextRU] = useState("");
  const [textEN, setTextEN] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [addSlider, { data, isLoading, error }] = useAddSliderMutation();
  const changeFile = (e) => {
    const f = e.target.files[0];
    setPreview(URL.createObjectURL(f));
    setFile(f);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title_am", textAM);
    formData.append("title_ru", textRU);
    formData.append("title_en", textEN);
    formData.append("isVideo", false);
    addSlider(formData);
    reload();
  };
  return (
    <div className={s.createSlider}>
      <div className={s.image}>
        <label className={s.label} htmlFor={s.file}>
          <img src={preview} alt="" />
          <input
            required
            onChange={changeFile}
            id={s.file}
            type="file"
            accept="image/*"
          />
          {file?.length ? (
            <>
              <div className={s.labelPrime}>
                {file.length} {file.length > 1 ? "photos" : "photo"}
              </div>
              <div className={s.labelSec}>
                {file.length > 1 ? "are" : "is"} selected
              </div>
            </>
          ) : (
            <FaCameraRetro />
          )}
        </label>
      </div>
      <div className={s.titlesWrap}>
        <div className={s.titleItem}>
          <input
            className={s.title}
            value={textAM}
            onChange={(e) => setTextAM(e.target.value)}
            placeholder='Վերնագիր'
          />
        </div>
        <div className={s.titleItem}>
          <input
            className={s.title}
            value={textRU}
            onChange={(e) => setTextRU(e.target.value)}
            placeholder='Заголовок'
          />
        </div>
        <div className={s.titleItem}>
          <input
            className={s.title}
            value={textEN}
            onChange={(e) => setTextEN(e.target.value)}
            placeholder='Title'
          />
        </div>
        <Button onClick={submitHandler} title={createTI} type={"success"} />
      </div>
    </div>
  );
};

export default CreateSlider;
