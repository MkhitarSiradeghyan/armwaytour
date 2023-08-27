import React from "react";
import Layout from "@/components/Layout/Layout";
import SliderAdmin from "@/components/SliderAdmin/SliderAdmin";
import IsAdmin from "@/components/IsAdmin/IsAdmin";

const AdminSlidersPage = () => {
  return (
    <IsAdmin>
      <Layout isAdmin={true}>
        <SliderAdmin />
      </Layout>
    </IsAdmin>
  );
};

export default AdminSlidersPage;
