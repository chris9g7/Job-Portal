function Hero() {
  return (
    <>
      <div className="bg-sky-600 text-white  text-center  p-5">
        <h1 className="text-5xl font-bold">Become a React Dev</h1>
        <p>Find the React job that your skills and needs</p>
      </div>

      <div className="grid sm:grid-cols-2 mt-5 ml-40 mr-40  text-start gap-4  h-28 shadow-lg">
        <div className="bg-gray-200  rounded-md ml-15 p-5">
          <h1 className="font-bold">For Developers</h1>
          <p>Browse your react job and start your career today</p>
          <button className="rounded-md bg-black text-white p-1">
            Browse Jobs
          </button>
        </div>

        <div className="bg-gray-200  rounded-md ml-15 p-5 ">
          <h1 className="font-bold">For Employers</h1>
          <p>List your react job to find the perfect developer for this role</p>
          <button className="rounded-md bg-black text-white p-1">
            Add Jobs
          </button>
        </div>
      </div>

      <div className="grid  mt-5 ml-40 mr-40  text-center gap-4 w-100 h-20">
        <div className="bg-gray-200  rounded-md ml-15 shadow-lg">
            <h1 className="font-bold text-2xl text-sky-500 m-5">Recent Jobs</h1>
        </div>
      </div>
     
    </>
  );
}

export default Hero;
