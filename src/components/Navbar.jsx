import { Link } from 'react-router-dom'
import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="border-b-2 shadow-md">
        <div className="w-9/12 flex justify-between mx-auto my-2">
          <img className='w-16' src={LOGO_URL} alt="swiggy-logo"/>
          <div className='my-auto font-semibold text-md text-gray-700 flex'>
            <div className='border pr-2'>
              <input className='p-2' type="text" placeholder='Search'/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='ml-16 mt-2'>
              <Link className='mx-5' to="/">Home</Link>
              <Link className='mx-5' to="/signin">Sign In</Link>
              <Link className='mx-5' to="/signup">Sign Up</Link>
              <Link className='mx-5' to="/cart">Cart</Link>
            </div>
          </div>
        </div> 
    </div>
    
  )
}

export default Navbar