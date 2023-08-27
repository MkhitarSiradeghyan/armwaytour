import React from 'react'
import s from './ToursAdminItem.module.sass';
import Button from '../Button/Button';
import {transformURL} from '@/utils/transformURL'
import { useDeleteTourMutation } from '@/src/store/api/tours.api';
import { useRouter } from 'next/router';

const ToursAdminItem = ({item}) => {
    const {reload} = useRouter()
    const [deleteTour, {isLoading, data, error}] = useDeleteTourMutation()
    const submitHandler = e => {
        try{
            deleteTour(item.id)
            reload()
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className={s.toursAdminItem}>
            <div className={s.inner}>
                <div className={s.images}>
                    {
                        item?.urls.map(e => {
                            return <div className={s.img}><img src={transformURL(e)} alt="" /></div>
                        })
                    }
                </div>
                <div className={s.descriptions}>
                    <div className={s.desc}>{item.translations[0].description}</div>
                    <div className={s.desc}>{item.translations[1].description}</div>
                    <div className={s.desc}>{item.translations[2].description}</div>
                </div>
                <div className={s.info}>
                    <div className={s.titles}>
                        <div className={s.title}>{item.translations[0].description}</div>
                        <div className={s.title}>{item.translations[1].description}</div>
                        <div className={s.title}>{item.translations[2].description}</div>
                    </div>
                    <div className={s.rest}>
                        <div className={s.price}>{item.price}</div>
                        <div className={s.date}>{item.date}</div>
                        <Button onClick={submitHandler} title={'Delete'} type={'danger'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ToursAdminItem;