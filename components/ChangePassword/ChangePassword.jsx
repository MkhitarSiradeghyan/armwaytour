import React, { useState } from 'react'
import s from './ChangePassword.module.sass';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../Layout/Layout';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { useChangePassMutation } from '@/src/store/api/auth.api';
import { useTranslate } from '@/src/hooks/useTranslate';

const ChangePassword = () => {
const {push} = useRouter()
const [oldPass, setOldPass] = useState('')
const [newPass, setNewPass] = useState('')
const [repeatPass, setRepeatPass] = useState('')
const [newValid, setNewValid] = useState(false)
const [repeatValid, setRepeatValid] = useState(false)
const [passMatch, setPassMatch] = useState(false)
const [changePass, {isLoading, data, error}] = useChangePassMutation()
const oldPasswordTI = useTranslate("old_password")
const newPasswordTI = useTranslate("new_password")
const repeatNewPasswordTI = useTranslate("repeat_new_password")
const fieldIsEmptyTI = useTranslate("field_is_empty")
const passwordMatchTI = useTranslate("password_match")
const passwordNotMatchTI = useTranslate("password_not_match")
const passwordContainTI = useTranslate("password_must_be_contain")
const correctPasswordTI = useTranslate("correct_password")
const changePasswordTI = useTranslate("change_password")
const handleOld = e => {
    const v = e.target.value
    setOldPass(v)
}
const handleNew = e => {
    const v = e.target.value
    setNewPass(v)
    setNewValid(v.length > 8 && v.length < 18)
    setPassMatch(repeatPass === v)
}
const handleRepeat = e => {
    const v = e.target.value
    setRepeatPass(v)
    setRepeatValid(v.length > 7 && v.length < 19)
    setPassMatch(newPass === v)
}

const handleSubmit = async (e) => {
    e.preventDefault()
    if(newPass === repeatPass){
        try {
            await changePass({
              login:"tigran.javadov",
                oldPassword: oldPass,
                newPassword: newPass,
            })
            push('/login')
        }catch(e){
            console.log(e)
        }
    }
}
    return(
        <Layout isAdmin={false}>
    <div className={s.change}>
      <Container>
        <div className={s.wrap}>
          <form>
            <div className={s.old}>
              <input
                onChange={handleOld}
                value={oldPass}
                className={`${s.input} ${oldPass.length ? s.valid : s.invalid}`}
                placeholder={oldPasswordTI}
                type="text"
              />
              <label className={`${oldPass.length ? s.validLabel : s.invalidLabel}`}>{oldPass.length ? '' : fieldIsEmptyTI}</label>
            </div>
            <div className={s.new}>
              <input
                onChange={handleNew}
                className={`${s.input} ${(newValid || passMatch) ? s.valid : s.invalid}`}
                value={newPass}
                placeholder={newPasswordTI}
                type="text"
              />
              <label className={`${(newValid || passMatch) ? s.validLabel : s.invalidLabel}`}>{newValid ? (passMatch ? passwordMatchTI : correctPasswordTI) : passwordContainTI}</label>
            </div>
            <div className={s.repeat}>
              <input
                onChange={handleRepeat}
                className={`${s.input} ${(repeatValid && passMatch) ? s.valid : s.invalid}`}
                value={repeatPass}
                placeholder={repeatNewPasswordTI}
                type="text"
              />
              <label className={`${(newValid && passMatch) ? s.validLabel : s.invalidLabel}`}>{passMatch ? passwordMatchTI : passwordNotMatchTI}</label>
            </div>
            <div className={s.changePass}>
            <Link href={'/change_password'}></Link>

            </div>
            <Button disabled={!passMatch} onClick={handleSubmit} title={changePasswordTI} type={'info'}/>
          </form>
        </div>
      </Container>
    </div>
    </Layout>
    )
}


export default ChangePassword;