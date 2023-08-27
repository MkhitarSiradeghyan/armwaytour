import React from 'react'
import s from './ToursItem.module.sass';
import { transformURL } from '@/utils/transformURL';
import {useRouter} from 'next/router'
import { dbLocales } from '@/utils/getDBLocales';

const ToursItem = ({item}) => {
    const {locale} = useRouter()
    return(
        <a href={`/tours/${item.slug}`} className={s.toursItem}>
            <div className={s.title}>{item.translations[dbLocales[locale]].title}</div>
            <div className={s.info}>
                <div className={s.date}>{item.date}</div>
                <div className={s.price}>{item.price}֏</div>
            </div>
            <img className={s.bgImage} src={transformURL(item.urls[0])} alt="" />
        </a>
    )
}


export default ToursItem;