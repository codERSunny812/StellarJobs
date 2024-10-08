import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  // Redirect to sign-in if not authenticated
  if (isLoaded && !isSignedIn) {
    return <Navigate to='/?sign-in=true' />;
  }

  // Check the status of the onboarding screen
  if (user && !user.unsafeMetadata.role && pathname !== '/onboarding') {
    return <Navigate to='/onboarding' />;
  }

  // If authenticated and onboarding is complete, render the child components
  return children;
};

export default ProtectedRoute;
