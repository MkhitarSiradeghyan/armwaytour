import React from 'react'
import s from './Layout.module.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = ({children, isAdmin}) => {
    return(
        <div className={s.layout}>
            <Header isAdmin={isAdmin}/>
            <div className={s.inner}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}


export default Layout;