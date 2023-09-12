import React, { useState } from "react";
import s from "./CreatePhoto.module.sass";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import { FaCameraRetro } from "react-icons/fa";
import { useAddPhotoMutation } from "@/src/store/api/galleryApi";
import { useTranslate } from "@/src/hooks/useTranslate";
import { domainName } from "@/utils/domainName";

const CreatePhoto = () => {
  const { reload } = useRouter();
  const createTI = useTranslate('create')
  const [textAM, setTextAM] = useState("");
  const [textRU, setTextRU] = useState("");
  const [textEN, setTextEN] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [isPhoto, setIsPhoto] = useState();
  const [addGallery, { isLoading, error, data }] = useAddPhotoMutation();

  const changeFile = (e) => {
    const f = e.target.files[0];
    setPreview(URL.createObjectURL(f));
    setFile(f);
  };
  const handleSwitch = (e) => {
    let v = e.target;
    if (v.checked === true) {
      if (v.value === "photo") {
        setIsPhoto(true);
      } else {
        setIsPhoto(false);
      }
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title_am", textAM);
    formData.append("title_ru", textRU);
    formData.append("title_en", textEN);
    formData.append("isVideo", false);
    addGallery(formData);
    // reload()
    // fetch(domainName, {method: "POST", body: formData}).then(r => console.log).catch(e => console.log('error fetching formdata', e))
  };
  return (
    <div className={s.createGallery}>
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

          <FaCameraRetro />
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

export default CreatePhoto;
