
import Hero from "../components/Hero";
import About from "./About";

const Home = () => {

  return (
    <>
      <Hero />
      <div className='lg:mx-[5%] lg:mt-[3%] sm:mb-5'>
      {/* <HomeCards/> */}
      <About/>
      </div>
    </>
  );
};

export default Home;
