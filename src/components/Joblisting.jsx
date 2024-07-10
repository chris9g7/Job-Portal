import JoblistingSingle from "./JoblistingSingle";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Joblisting({ isHome }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome
        ? "http://localhost:5000/jobs?_limit=3"
        : "http://localhost:5000/jobs";

      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log("Error in fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 ml-40 mr-40  text-start gap-4 ">
          {jobs.map((job) => (
            <JoblistingSingle key={job.id} job={job} />
          ))}
        </div>
      )}
    </>
  );
}

export default Joblisting;
