import React from 'react'
import s from './Grid.module.sass';


const Grid = ({children}) => {
    return(
        <div className={s.grid}>
            {children}
        </div>
    )
}


export default Grid;