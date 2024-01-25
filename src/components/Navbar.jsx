import { Link } from 'react-router-dom';
import { LOGO_URL } from "../utils/constants";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const user = useSelector((store) => store.user.usersList);

  return (
    <div className="border-b-2 shadow-md">
        <div className="w-9/12 flex justify-between mx-auto my-2">
          <img className='w-16' src={LOGO_URL} alt="swiggy-logo"/>
          <div className='my-auto font-semibold text-md text-gray-700 flex'>
            <div className='ml-16 mt-2'>
              <Link className='mx-5' to="/">Home</Link>
              {!isLoggedIn ? 
                (<Link className='mx-5' to="/signin">Sign In</Link>) :
                (<Link to="/my-account"><i className="fa-solid fa-user"/></Link>)
              }
              <Link className='mx-5' to="/cart">Cart [{cartItems.length}]</Link>
            </div>
          </div>
        </div> 
    </div> 
  )
};

export default Navbar;