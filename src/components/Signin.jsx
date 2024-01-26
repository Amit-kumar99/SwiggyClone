import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidSigninData, checkValidSignupData } from "../utils/validations";
import { useDispatch, useSelector } from "react-redux";
import { addUser, otpLogged } from "../utils/userSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.user.usersList);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const phoneNumberRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSignup = () => {
    const msg = checkValidSignupData(phoneNumberRef.current.value, nameRef.current.value, emailRef.current.value);
    setErrorMessage(msg);
    if(msg === null && users.findIndex(item => item.phoneNumber === phoneNumberRef.current.value) === -1) {
      setShowOtpInput(true);
      dispatch(addUser({
        id: 3,
        phoneNumber: phoneNumberRef.current.value,
        name: nameRef.current.value,
        email: emailRef.current.value,
        otp: "1234"}));
    }
    else if(msg === null){
      setErrorMessage("Phone number already registered");
    }
  }
  
  const handleSignin = () => {
    const msg = checkValidSigninData(phoneNumberRef.current.value);
    setErrorMessage(msg);
    if(msg === null && users.findIndex(item => item.phoneNumber === phoneNumberRef.current.value) !== -1) {
      setShowOtpInput(true);
    }
    else if(msg === null){
      setErrorMessage("Phone number not registered");
    }
  }

  const handleOtpVerification = () => {
    dispatch(otpLogged({phoneNumberRef, otpRef}));
    if(isLoggedIn){
      navigate("/");
    }
    otpRef.current.value = "";
  }

  return (
    <div className="border w-4/12 ml-auto h-[613px]">
      <div className="w-9/12">
        <div className="my-8 ml-4">
          <h2 className="text-4xl mb-2">{showOtpInput ? "Enter OTP" : (isSignInForm ? "Login" : "Sign up")}</h2>
          {showOtpInput ? 
            (<p className="mt-1 text-xs">We've sent an OTP to your phone number</p>)
              :
            (<p className="mt-1 text-xs">or
              <button className="font-semibold ml-1 text-orange-500" onClick={toggleSignInForm}>
                {isSignInForm ? "create an account" : "login to your account"}
              </button>
            </p>)}
        </div>
        <form className="m-4" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2">
            <input
              ref={phoneNumberRef}
              className="border border-gray-400 p-4 w-full"
              type="text"
              placeholder="Phone Number"
            />
            {(!isSignInForm && !showOtpInput) && (<input
              ref={nameRef}
              className="border border-gray-400 p-4 w-full"
              type="text"
              placeholder="Name"
            />)}
            {(!isSignInForm && !showOtpInput) && (<input
              ref={emailRef}
              className="border border-gray-400 p-4 w-full"
              type="email"
              placeholder="Email"
            />)}  
            {showOtpInput && (<input
              ref={otpRef}
              className="border border-gray-400 p-4 w-full"
              type="text"
              placeholder="Enter OTP"
            />)}  
            <p className="text-red-500 pb-2">{errorMessage}</p> 
          </div>  
          <button
            className="bg-orange-400 p-3 my-2 w-full text-white font-bold"
            onClick={showOtpInput ? handleOtpVerification : (isSignInForm ? handleSignin : handleSignup)}
          >
            {showOtpInput ? "VERIFY OTP" : (isSignInForm ? "LOGIN" : "CONTINUE")}
          </button>
          <label className="text-xs font-semibold">
            {(isSignInForm ? "By clicking on Login" : "By creating an account") + ", I accept the Terms & Conditions & Privacy Policy"}
          </label>
        </form>
      </div>
    </div>
  );
}

export default Signin;
