import React, { useEffect, useState } from 'react'
import s from './Login.module.sass';
import Layout from '../Layout/Layout';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import { useLoginMutation } from '@/src/store/api/auth.api';
import { setCookie } from 'cookies-next';
import { useTranslate } from '@/src/hooks/useTranslate';


const Login = () => {
  const router = useRouter()
  const usernameTI = useTranslate('username')
  const passwordTI = useTranslate('password')
  const failTextTI = useTranslate('failText')
  const loginTI = useTranslate('login')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, {data, error, isLoading}] = useLoginMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   const result = await login({login: username, password})
    setCookie("authToken", result.data.body.token)
    router.push('/')
  }
  catch(e){
console.log("error", e)
  }
  };
  
  return (
    <Layout isAdmin={false}>
    <div className={s.login}>
      <Container>
        <div className={s.wrap}>
          <form onSubmit={handleSubmit}>
            <div className={s.name}>
              <input
                onChange={(e) => setUsername(e.target.value)}
                name="name"
                value={username}
                className={`${s.input} ${s.fail}`}
                placeholder={usernameTI}
                type="text"
              />
            </div>
            <div className={s.pass}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className={`${s.input} ${s.fail}`}
                value={password}
                placeholder={passwordTI}
                type="password"
              />
            </div>
            <div className={s.failText}>{failTextTI}</div>
            <Button title={loginTI} type={'info'}/>
            
          </form>
        </div>
      </Container>
    </div>
    </Layout>
  );
}


export default Login;