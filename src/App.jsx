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
import ProctectedRoute from "./components/Proctected.route";

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
        element: <ProctectedRoute>
        <OnBoarding />
        </ProctectedRoute>,
      },
      {
        path: "/jobs",
        element:
        <ProctectedRoute>
          <JobListing/>
        </ProctectedRoute>,
      },
      {
        path: "/job/:id",
        element:
        <ProctectedRoute>
            <JobsPages />
        </ProctectedRoute> , //show a particular job
          
      },
      {
        path: "/post-job",
        element:
        <ProctectedRoute>
          <PostJobs />
        </ProctectedRoute>,
      },
      {
        path: "/saved-jobs",
        element: 
        <ProctectedRoute>
            <SavedJobs />
        </ProctectedRoute>, //page to show the saved jobs
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
