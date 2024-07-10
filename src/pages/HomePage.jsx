import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Joblisting from "../components/Joblisting";
import ViewAllJobs from "../components/ViewAllJobs";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Joblisting isHome={true}></Joblisting>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
}

export default HomePage;
