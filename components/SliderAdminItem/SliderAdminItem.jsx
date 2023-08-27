import React from "react";
import s from "./SliderAdminItem.module.sass";
import Button from "../Button/Button";
import {useRouter} from 'next/router'
import { transformURL } from "@/utils/transformURL";
import { useDeleteSliderMutation } from "@/src/store/api/sliders.api";
import { useTranslate } from "@/src/hooks/useTranslate";
const SliderAdminItem = ({item}) => {
  const deleteTI = useTranslate("delete")
  const {reload} = useRouter()
  const [deleteSlider, {isLoading, data, error}] = useDeleteSliderMutation()
  const deleteHandler = async (e) => {
    e.preventDefault()
    try{
      await deleteSlider(item.id)
      reload()
  }catch(e){
      console.log(e)
  }
  }

  return (
    <div className={s.sliderAdminItem}>
      <div className={s.img}>
        <img
          src={transformURL(item.url)}
          alt=''
        />
      </div>
      <div className={s.titlesWrap}>
        <div className={s.titleItem}>
          <div className={s.title}>{item.translations[0].title}</div>
        </div>
        <div className={s.titleItem}>
          <div className={s.title}>{item.translations[1].title}</div>
        </div>
        <div className={s.titleItem}>
          <div className={s.title}>{item.translations[2].title}</div>
        </div>
        <Button onClick={deleteHandler} title={deleteTI} type={"danger"} />
      </div>
    </div>
  );
};

export default SliderAdminItem;
