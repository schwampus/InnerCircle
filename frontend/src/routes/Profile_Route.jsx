import { Link } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Button } from "@mui/joy";
import Avatar from '../components/Avatar';

export default function Profile() {
  return (<>

<div id="wrapper">
  <div id="profile-hero" className="flex flex-col self-start items-center justify-around text-2xl font-black w-full bg-(--purple-main) text-(--orange-lighter)  text-center">
     <h2> Welcome Back 'username'!</h2>
      <div className="flex items-end"> 
        <img className="h-40 w-40" src="https://avatar.iran.liara.run/public/ 45" />
        <svg className="ml-[-22px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
      </div>
  </div>  
  
  <div className="flex justify-center items-center bg-(--purple-lighter) w-full p-8 "> 
    <AccordionGroup className="bg-(--orange-lighter) max-w-75 ">
      <Accordion>
        <AccordionSummary>Change Personal Details</AccordionSummary>
        <AccordionDetails>
          <input class="profile-input" placeholder="change username"></input>
        </AccordionDetails>
        <AccordionDetails>
          <input class="profile-input" placeholder="change email"></input>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Change Payment Method</AccordionSummary>
        <AccordionDetails>
          <select class="profile-input">
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            <option value="klarna">Klarna</option></select>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  </div>

  <div className="flex flex-col justify-center items-center bg-(--purple-dark) w-full text-(--orange-main) px-8 py-10">
    <h1 className="text-4xl text-(--orange-main) font-bold font-kanit pt-2 mb-8"> YOUR CIRCLES</h1>
    <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-20 ">
      <Avatar tierColor="gold"/><Avatar tierColor="silver"/><Avatar tierColor="bronze"/><Avatar /><Avatar /><Avatar /><Avatar tierColor="gold" /><Avatar />
    </div>
    <h2 className=" my-10 font-bold">More about the circles:</h2>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magni obcaecati. Adipisci repudiandae voluptates, tempore nam quidem voluptate quis consequatur repellat. Quisquam eligendi, suscipit qui consequuntur doloribus deserunt atque incidunt.
   </p>
  </div>

</div>
</>);
}


