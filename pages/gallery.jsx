import Gallery from '@/components/Gallery/Gallery';
import Layout from '@/components/Layout/Layout';
import React from 'react'


const GalleryPage = () => {
    return(
        <Layout isAdmin={false}>
            <Gallery/>
        </Layout>
    )
}


export default GalleryPage;