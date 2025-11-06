import { Link } from 'react-router-dom'
import { Button } from "@mui/joy";
import Post from '../components/Post.jsx';

export default function Feed() {
  return (<>
    <div id="wrapper">
      <div className="flex text-4xl font-black font-kanit justify-center items-center text- py-8">
      WHO'S UP TO WHAT?
    </div>
    
    <div className="flex flex-col bg-(--purple-dark) w-full  text-(--orange-main) px-8 py-10">
    <Post author="Greg" tier="Gold" imgsrc="https://vshrt.in/SYKA" />
    <Post author="Candide" tier="gold" imgsrc="https://vshrt.in/Txly" />
    <Post author="Olha" tier="silver" imgsrc="https://vshrt.in/CfqD" />
      
      
    </div>
    </div></>
  )
}


