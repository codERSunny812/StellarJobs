import { Link } from "react-router-dom"
import { Button } from "./ui/button"


const HeaderComponent = () => {
  return (
    <>
    <nav className="py-4 flex justify-between items-center">
        <Link>
        <img src="/logooo.png" alt="" className="h-32"/>
        </Link>
        <Button variant="outline" className="text-white">login</Button>
    </nav>
   
    </>
  )
}

export default HeaderComponent