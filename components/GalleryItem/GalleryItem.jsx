import React from 'react'
import s from './GalleryItem.module.sass';
import { transformURL } from '@/utils/transformURL';
import { useRouter } from 'next/router';
import { dbLocales } from '@/utils/getDBLocales';


const GalleryItem = ({item}) => {
    const {locale} = useRouter()
    return(
        <div className={s.galleryItem}>
            { item.isVideo ?
                        <iframe className={s.ytFrame} src={`https://www.youtube.com/embed/${item.url}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> :

<>
                <div className={s.title}>{item.translations[dbLocales[locale]].title}</div>
            <img className={s.bgImage} src={transformURL(item.url)} alt="" />
</>
            }
        </div>
    )
}


export default GalleryItem;