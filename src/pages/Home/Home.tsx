import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </>
  );
}

export default Home;