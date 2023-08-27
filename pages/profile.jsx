import React from 'react'
import Layout from '@/components/Layout/Layout';
import Profile from '@/components/Profile/Profile';


const ProfilPage = () => {
    return(
        <Layout isAdmin={true}>
            <Profile/>
        </Layout>

    )
}


export default ProfilPage;