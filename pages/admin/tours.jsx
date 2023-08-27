import React from "react";
import Layout from "@/components/Layout/Layout";
import ToursAdmin from "@/components/ToursAdmin/ToursAdmin";
import IsAdmin from "@/components/IsAdmin/IsAdmin";

const AdminToursPage = () => {
  return (
    <IsAdmin>
      <Layout isAdmin={true}>
        <ToursAdmin />
      </Layout>
    </IsAdmin>
  );
};

export default AdminToursPage;
