import Joblisting from "../components/Joblisting";
import Navbar from "../components/Navbar";


function JobsPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid  mt-5 ml-40 mr-40  text-center gap-4 w-100 h-20">
        <div className="bg-gray-200  rounded-md ml-15 shadow-lg">
            <h1 className="font-bold text-2xl text-sky-500 m-5">Browse Jobs</h1>
        </div>
      </div>
      <Joblisting isHome={false}></Joblisting>
    </>
  );
}

export default JobsPage;
