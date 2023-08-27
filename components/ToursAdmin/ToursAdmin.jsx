import React, { useEffect, useState } from "react";
import s from "./ToursAdmin.module.sass";
import Container from "../Container/Container";
import ToursAdminItem from "../ToursAdminItem/ToursAdminItem";
import Modal from './../Modal/Modal';
import CreateTour from "../CreateTour/CreateTour";
import AddItem from "../AddItem/AddItem";
import { useGetToursQuery } from '@/src/store/api/tours.api';
import { useTranslate } from "@/src/hooks/useTranslate";

const ToursAdmin = () => {
  const tourTI = useTranslate("tour")
  const noItemsTI = useTranslate("no_items")
    const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  const [isPhoto, setIsPhoto] = useState(true)
  const [tours, setTours] = useState([])
  const switchIsPhoto = (t) => setIsPhoto(t)
  const {isLoading, data, error} = useGetToursQuery()
  useEffect(() => {
      isLoading ? [] : setTours(data?.body)
    }, [isLoading])
  return (
    <div className={s.toursAdmin}>
      <Container>
        <div className={s.inner}>
        {
            isLoading ? 
            "Loading..." :
            tours.length !== 0 ?
            tours.map(e => {
              return <ToursAdminItem item={e}/>
            }) : noItemsTI
          }
          <AddItem addItem={toggleModal} typeSwitch={tourTI} switchIsPhoto={switchIsPhoto}/>
          {modal ? (
            <Modal toggleModal={toggleModal}>
              <CreateTour />
            </Modal>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default ToursAdmin;
