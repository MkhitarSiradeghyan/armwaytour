import React from 'react'
import s from './AddItem.module.sass';
import { FaPlus } from 'react-icons/fa';
import { useTranslate } from '@/src/hooks/useTranslate';


const AddItem = ({addItem, switchIsPhoto, type, typeSwitch}) => {
    const addTI = useTranslate('add')
    const handleClick = () => {
        addItem()
        switchIsPhoto(typeSwitch === 'photo')
    }
    return(
        <div onClick={handleClick} className={s.addItem}>
            <div className={s.inner}><FaPlus/></div>
            <div className={s.inner}>{addTI} {type}</div>
        </div>
    )
}


export default AddItem;