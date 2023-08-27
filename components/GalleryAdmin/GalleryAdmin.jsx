import React, { useEffect, useState } from "react";
import s from "./GalleryAdmin.module.sass";
import Container from "../Container/Container";
import GalleryAdminItem from "../GalleryAdminItem/GalleryAdminItem";
import AddItem from "../AddItem/AddItem";
import CreateVideo from "../CreateVideo/CreateVideo";
import CreatePhoto from "../CreatePhoto/CreatePhoto";
import Modal from "../Modal/Modal";
import { useGetGalleryQuery } from "@/src/store/api/galleryApi";
import { useTranslate } from "@/src/hooks/useTranslate";

const GalleryAdmin = () => {
  const photoTI = useTranslate('photo')
  const videoTI = useTranslate('video')
  const noItemsTI = useTranslate('no_items')
  const [modal, setModal] = useState(false)
  const [isPhoto, setIsPhoto] = useState(true)
  const [gallery, setGallery] = useState([])
  const toggleModal = () => setModal(!modal)
  const switchIsPhoto = (t) => setIsPhoto(t)
  const {isLoading, data, error} = useGetGalleryQuery()
  useEffect(() => {
    console.log(data)
      isLoading ? [] : setGallery(data.body)
    }, [isLoading])
  return (
    <div className={s.galleryAdmin}>
      <Container>
        <div className={s.inner}>
          {
            isLoading ? 
            "Loading..." :
            gallery.length !== 0 ?
            gallery.map(e => {
              return <GalleryAdminItem item={e}/>
            }) : noItemsTI
          }
            <AddItem addItem={toggleModal} type={videoTI} typeSwitch={"video"} switchIsPhoto={switchIsPhoto}/>
            <AddItem addItem={toggleModal} type={photoTI} typeSwitch={"photo"} switchIsPhoto={switchIsPhoto}/>
            {
          modal ?
          <Modal toggleModal={toggleModal}>
            {isPhoto ?
            <CreatePhoto/> :
             <CreateVideo/>}
          </Modal> :
          null
          }
        </div>
      </Container>
    </div>
  );
};

export default GalleryAdmin;
