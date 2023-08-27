import React, { useState } from "react";
import s from "./CreateVideo.module.sass";
import Button from "../Button/Button";
import { FaCameraRetro, FaVideo } from "react-icons/fa";
import { useAddVideoMutation } from "@/src/store/api/galleryApi";
import { useRouter } from "next/router";
import { useTranslate } from "@/src/hooks/useTranslate";

const CreateVideo = () => {
  const { reload } = useRouter();
  const createTI = useTranslate('create')
  const [textAM, setTextAM] = useState("");
  const [textRU, setTextRU] = useState("");
  const [textEN, setTextEN] = useState("");
  const [videoId, setVideoId] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [isPhoto, setIsPhoto] = useState();
  const [addVideo, { isLoading, data, error }] = useAddVideoMutation();
  const changeFile = (e) => {
    const f = e.target.files[0];
    setPreview(URL.createObjectURL(f));
    setFile();
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
  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const formData = {
        title_am: textAM,
        title_ru: textRU,
        title_en: textEN,
        url: videoId,
        isVideo: true,
      };
      addVideo(formData);
      reload()
    }catch(e){
      console.log(e)
    }
  };
  return (
    <div className={s.createGallery}>
      <div className={s.image}>
        {videoId ? (
          <iframe
            className={s.ytFrame}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <FaVideo />
        )}
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
        <div className={s.titleItem}>
          <input
            className={s.title}
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            placeholder="#videoId"
          />
        </div>
        <Button onClick={submitHandler} title={createTI} type={"success"} />
      </div>
    </div>
  );
};

export default CreateVideo;
