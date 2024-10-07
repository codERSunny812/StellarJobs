import { useUser } from "@clerk/clerk-react"
import { Navigate, useLocation } from "react-router-dom";


const ProctectedRoute = ({children}) => {
    const {isSignedIn , user , isLoaded} = useUser();
    const {pathName} = useLocation();
    if(isLoaded && !isSignedIn && isSignedIn !== undefined){
  return <Navigate to='/?sign-in=true' />
    }

    // check the status of the onboadring screen
  if (user !== undefined && !user.unsafeMetadata.role && pathName !== '/onboarding'){
    return <Navigate to='/onboarding'/>
    }

    return children;
}

export default ProctectedRoute