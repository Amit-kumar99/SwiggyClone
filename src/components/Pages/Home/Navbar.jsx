import { Link } from 'react-router-dom';
import { LOGO_URL } from "../../../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { removeActiveUser } from '../../../utils/userSlice';
import { useState } from 'react';

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  // const activeUser = useSelector((store) => store.user.activeUser);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  // console.log(activeUser);
  const dispatch = useDispatch();

  return (
    <div className="border-b-2 shadow-md">
        <div className="w-9/12 flex justify-between mx-auto my-2">
          <img className='w-16' src={LOGO_URL} alt="swiggy-logo"/>
          <div className='my-auto font-semibold text-md text-gray-700 flex'>
            <div className='flex ml-16 mt-2'>
              <Link className='mx-5' to="/">Home</Link>
              <Link className='mx-5' to="/checkout">Cart [{cartItems.length}]</Link>
              {!isLoggedIn ? 
                (<Link className='mx-5' to="/signin">Sign In</Link>) :
                // onhover show a logout btn
                (<div>
                  <Link 
                    className='mx-5' to="/my-account" 
                    onMouseOver={() => setShowLogoutButton(true)}
                    onMouseOut={() => setShowLogoutButton(false)}>
                      <i className="fa-solid fa-user"/>
                  </Link>
                  {showLogoutButton && 
                    (<div className="absolute bg-white w-1/12 pl-5 py-3 border-t shadow-md ml-auto"
                      onMouseOver={() => setShowLogoutButton(true)} 
                      onMouseOut={() => setShowLogoutButton(false)}>
                      {/* below not working */}
                        <Link className="" onClick={() => {
                          dispatch(removeActiveUser);
                          // below gives tru, why?, dispatch doesn't work
                          console.log(isLoggedIn);
                          }
                        }>Logout</Link>
                    </div>)
                  }
                </div>)
              }
            </div>
          </div>
        </div> 
    </div> 
  )
};

export default Navbar;