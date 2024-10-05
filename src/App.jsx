import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/App.layout";
import LandingPage from "./Pages/Landing.page";
import OnBoarding from "./Pages/Onboarding.pages";
import JobListing from "./Pages/JobListing.pages";
import JobsPages from "./Pages/Job.pages";
import PostJobs from "./Pages/PostJobs.pages";
import SavedJobs from "./Pages/savedJobs.pages";
import { ThemeProvider } from "./components/theme-provider";
import './App.css'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />, //landing page
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/jobs",
        element: <JobListing/>, //shows all the jobs
      },
      {
        path: "/job/:id",
        element: <JobsPages />, //show a particular job
      },
      {
        path: "/post-job",
        element: <PostJobs />, // page to post a jobs
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />, //page to show the saved jobs
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
}

export default App;
