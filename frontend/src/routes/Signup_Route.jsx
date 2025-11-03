import { Link } from 'react-router-dom'

export default function Signup() {
  return (<>
    <div id="wrapper">
    <main>
      <p> welcome to</p>
      <h1>INNER CIRCLE </h1>
      


      <div>

       <h2> THIS is Sign Up</h2> 
       <button > <Link to="/login" >LOG IN</Link></button>
       <button > <Link to="/signup" >SIGN UP</Link>
       </button>
      </div>
    </main>
    </div></>
  )
}

