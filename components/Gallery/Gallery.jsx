import React, { useEffect, useState } from "react";
import s from "./Gallery.module.sass";
import Title from "../Title/Title";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import GalleryItem from "../GalleryItem/GalleryItem";
import { useGetGalleryQuery } from "@/src/store/api/galleryApi";
import { useTranslate } from "@/src/hooks/useTranslate";

const Gallery = () => {
  const galleryTI = useTranslate('gallery')
  const noItemsTI = useTranslate('no_items')
  const [gallery, setGallery] = useState()
  const {isLoading, data, error} = useGetGalleryQuery()
  useEffect(() => {
    isLoading ? [] : setGallery(data?.body)
  }, [isLoading])
  return (
    <div className={s.gallery}>
      <Container>
        <Title title={galleryTI} priority={2}/>
        <Grid>
            {!isLoading ?
            gallery?.map(e => {
                return <GalleryItem item={e}/>
            }): 
            <h3>{noItemsTI}</h3>}
        </Grid>
      </Container>
    </div>
  );
};

export default Gallery;
