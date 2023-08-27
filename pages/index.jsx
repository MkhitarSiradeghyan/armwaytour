import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/Title/Title";
import Tours from "@/components/Tours/Tours";

const Home = () => {
  

  return (
    <div>
      <Layout isAdmin={false}>
        <Hero/>
        {/* <Title title={'Gallery'}/> */}
        <Tours/>
        <Gallery/>
      </Layout>
    </div>
  );
};

export default Home;
