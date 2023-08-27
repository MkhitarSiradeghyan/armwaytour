import React from "react";
import GalleryAdmin from "@/components/GalleryAdmin/GalleryAdmin";
import Layout from "@/components/Layout/Layout";
import IsAdmin from "@/components/IsAdmin/IsAdmin";

const AdminGalleryPage = () => {
  return (
    <IsAdmin>
      <Layout isAdmin={true}>
        <GalleryAdmin />
      </Layout>
    </IsAdmin>
  );
};

export default AdminGalleryPage;
