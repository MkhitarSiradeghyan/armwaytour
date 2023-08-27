import React from 'react'
import s from './GalleryAdminItem.module.sass';
import Button from '../Button/Button';
import { transformURL } from '@/utils/transformURL';
import {useDeleteGalleryMutation} from '@/src/store/api/galleryApi'
import {useRouter} from 'next/router'
import { useTranslate } from '@/src/hooks/useTranslate';

const GalleryAdminItem = ({item}) => {
    const {reload} = useRouter()
    const deleteTI = useTranslate('delete')
    const [deleteGallery, {data, isLoading}] = useDeleteGalleryMutation()
    const deleteHandler = async (e) => {
        e.preventDefault()
        try{
            await deleteGallery(item.id)
            reload()
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className={s.galleryAdminItem}>
                <div className={s.img}>
                    {
                        item.isVideo ?
                        <iframe className={s.ytFrame} src={`https://www.youtube.com/embed/${item.url}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> :

                    <img src={`${transformURL(item.url)}`} alt={item.title} />
                    }
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
                    <Button onClick={deleteHandler} title={deleteTI} type={'danger'}/>
                </div>
        </div>
    )
}


export default GalleryAdminItem;