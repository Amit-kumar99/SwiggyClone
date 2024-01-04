import { Link } from 'react-router-dom'
import { LOGO_URL } from "../utils/constants";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="border-b-2 shadow-md">
        <div className="w-9/12 flex justify-between mx-auto my-2">
          <img className='w-16' src={LOGO_URL} alt="swiggy-logo"/>
          <div className='my-auto font-semibold text-md text-gray-700 flex'>
            <SearchBar/>
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