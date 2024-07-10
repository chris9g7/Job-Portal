import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import ErrorPage from "./components/ErrorPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

function App() {
  {
    /*Adds a New Job*/
  }

  const addJob = async (newJob) => {
    const response = await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    });
    return;
  };

  {
    /*Delete Job*/
  }

  const deleteJob = async (id) => {
    const response = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  {
    /*Update Job*/
  }

  const editJob = async (updateJob) => {
    const response = await fetch(`http://localhost:5000/jobs/${updateJob.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateJob),
    });
    return;
  };

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage></HomePage>,
    },
    {
      path: "/Jobs",
      element: <JobsPage></JobsPage>,
    },
    {
      path: "/:someValue/Job/:id", //:Jobs & :id both are dynamic route variable
      element: <JobPage deleteJob={deleteJob}></JobPage>,
    },
    {
      path: "/add-job",
      element: <AddJobPage addJobSubmit={addJob}></AddJobPage>,
    },
    {
      path: "/edit-job/:id",
      element: <EditJobPage editJob={editJob}></EditJobPage>,
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
