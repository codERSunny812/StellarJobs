import { Link, useSearchParams } from "react-router-dom"
import { Button } from "./ui/button"
import {SignedIn,SignedOut, SignIn, UserButton} from '@clerk/clerk-react'
import { BriefcaseBusinessIcon, Heart, PenBox } from "lucide-react"
import { useEffect, useState } from "react"


const HeaderComponent = () => {
  const[showSignIn,setSignIn] = useState(false);

  const [search , setSearch] = useSearchParams(); //just like use state
  console.log(search)

  useEffect(()=>{
   if(search.get('sign-in')){
    setSearch(true)
   }
  },[search])

  const handleSigInOverlay = (e)=>{
   if(e.target === e.currentTarget) {
    setSignIn(false);
    setSearch({});
   }
  }
  return (
    <>
    <nav className="py-4 flex justify-between items-center">
        <Link>
        <img src="/logooo.png" alt="" className="h-32"/>
        </Link>
        <div className="flex items-center gap-4">
          <SignedOut>
            <Button variant="outline" className="text-white"
            onClick={()=> setSignIn(true)}
            >login</Button>

          </SignedOut>
         

          <SignedIn>

           {/* show this button only if its recruiter */}
            <Link to='/post-job'>
              <Button variant='destructive' className='rounded-full'>
                <PenBox size={23} className="mr-2" />
                post a job
              </Button>
            </Link>

            <UserButton 
            appearance={{
              elements:{
                avatarBox:"w-10 h-10"
              }
            }}
            >
              {/* adding more element in clerk element
               */}
               <UserButton.MenuItems>
                <UserButton.Link
                label="my jobs"
                labelIcon={<BriefcaseBusinessIcon size={15}/>}
                href="/my-jobs"
                />

                <UserButton.Link
                  label="saved jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />

               </UserButton.MenuItems>

            </UserButton>

          </SignedIn>

        
        </div>
        
    </nav>

    {
showSignIn && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  onClick={handleSigInOverlay}>
    <SignIn 
    signUpForceRedirectUrl="/onboarding"
    fallbackRedirectUrl="/onboarding"
    
    />
  </div>
)

    }
   
    </>
  )
}

export default HeaderComponent