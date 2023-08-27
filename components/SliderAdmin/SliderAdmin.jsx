import React, { useEffect, useState } from "react";
import s from "./SliderAdmin.module.sass";
import SliderAdminItem from "../SliderAdminItem/SliderAdminItem";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import AddItem from "../AddItem/AddItem";
import CreateSlider from "../CreateSlider/CreateSlider";
import { useGetSlidersQuery } from "@/src/store/api/sliders.api";
import { useTranslate } from "@/src/hooks/useTranslate";

const SliderAdmin = () => {
  const photoTI = useTranslate('photo')
  const noItemsTI = useTranslate('no_items')
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  const [slides, setSlides] = useState([])
  const [isPhoto, setIsPhoto] = useState(true)
  const switchIsPhoto = (t) => setIsPhoto(t)
  const {isLoading, data, error} = useGetSlidersQuery()
  useEffect(() => {
    console.log(data)
      isLoading ? [] : setSlides(data?.body)
    }, [isLoading])
  return (
    <div className={s.sliderAdmin}>
      <Container>
        <div className={s.inner}>
        {
            isLoading ? 
            "Loading..." :
            slides.length !== 0 ?
            slides.map(e => {
              return <SliderAdminItem item={e}/>
            }) : noItemsTI
          }
          <AddItem addItem={toggleModal} typeSwitch={photoTI} switchIsPhoto={switchIsPhoto}/>
          {
          modal ?
          <Modal toggleModal={toggleModal}>
            <CreateSlider/>
          </Modal> :
          null
          }
        </div>
      </Container>
    </div>
  );
};

export default SliderAdmin;
