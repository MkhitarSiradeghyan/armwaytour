import React from 'react'
import s from './Profile.module.sass';
import Link from 'next/link';
import { useTranslate } from '@/src/hooks/useTranslate';


const Profile = () => {
  const changePasswordTI = useTranslate('change_password')

    return(
        <div className={s.profile}>
            <h1>Profile Page</h1>
            <div className={s.changePass}>
              <Link href={'/change-password'}>{changePasswordTI}</Link>
            </div>
        </div>
    )
}


export default Profile;