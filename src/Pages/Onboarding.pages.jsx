import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CircleLoader} from 'react-spinners'


const OnBoarding = () => {

  const {user , isLoaded} = useUser();
  const navigate = useNavigate();
  console.log(isLoaded);

  const handleRoleSelection = async(role)=>{
    await user.update({
      unsafeMetadata:{role}
    })
    .then(()=>{
     navigate(role== "candidate" ? "/jobs" : '/post-job')
    })
    .catch((error)=>{
      console.log("error in updating the role",error.message)
    })
  }

  // if user is onboarded successfully then he will able to get back to the OnBoarding screen 
  useEffect(()=>{
  if(user?.unsafeMetadata?.role){
    navigate(user?.unsafeMetadata?.role == "candidate" ? "/jobs" : '/post-job')
  }
  },[user])

  if(!isLoaded){
    return <CircleLoader className='mb-4' width={"100%"} color='#36d7b7'/>
  }

  return (
    <div className="flex flex-col justify-center items-center mt-30">

      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter capitalize'>i am a...</h2>

      {/* buttons  */}
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">

        <Button variant="destructive" className="h-28 text-2xl" 
        onClick={()=>handleRoleSelection("candidate")}
        >
          candidate
        </Button>


        <Button variant="blue" className="h-28 text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          recruiter
        </Button>
      </div>
    </div>
  )
}

export default OnBoarding