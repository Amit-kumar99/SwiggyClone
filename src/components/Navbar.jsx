import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="border-b-2 shadow-md">
        <div className="w-9/12 flex justify-between mx-auto my-7">
          <img src="" alt="swiggy-logo"/>
          <div>
            <Link className='m-2' to="/">Home</Link>
            <Link className='m-2' to="/signin">Sign In</Link>
            <Link className='m-2' to="/signup">Sign Up</Link>
            <Link className='m-2' to="/cart">Cart</Link>
          </div>
        </div> 
    </div>
    
  )
}

export default Navbar