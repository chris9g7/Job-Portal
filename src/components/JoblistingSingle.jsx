import { FaMapMarker } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function JoblistingSingle({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    {
      description = description.substring(0, 90) + "....";
    }
  }

  return (
    <>
      <div key={job.id} className="bg-gray-200  rounded-md p-5">
        <span className="text-gray-500">{job.type}</span>
        <h1 className="font-bold">{job.title}</h1>
        <br />
        <p>{`${description}`}</p>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-sky-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-sky-500 mb-2">{job.salary}</h3>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline " />
            {job.location}
          </div>
          <Link
            to={`job/${job.id}`}
            className="h-[36px] bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
export default JoblistingSingle;
