import { Link } from 'react-router-dom'
import { Button } from "@mui/joy";

export default function Home() {
  return (<>
    <div id="wrapper">
   
      <div id="herocontent" className="bg-[url('/ic-temp.webp')] 
    sm:bg-[url('/ic-temp-sm.webp')] bg-contain bg-center bg-no-repeat
    h-[30dvh] sm:h-[30dvh]
    w-full
    flex flex-col justify-center items-center text-center
    overflow-hidden">  
      <h1 className="text-6xl  font-climate text-(--orange-main) "> 
        INNER
      </h1>
      <h1 className="text-6xl  font-climate text-(--purple-main) "> 
       CIRCLE
      </h1>
      </div>
      


      <div className="flex bg-(--purple-lighter) w-full justify-center gap-16 px-8 py-8">
         <Button component={Link} to="/login" variant="solid" color="primary">
    LOG IN
  </Button>
  <Button component={Link} to="/signup" variant="solid" color="primary">
    SIGN UP
  </Button>
      </div>
    
    <div className="bg-(--purple-dark) w-full h-64 text-(--orange-main) px-8 py-10">
      <h2 className="font-bold">More about the circles:</h2>
    </div>
    </div></>
  )
}


