import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

    const mobileNumberRef = useRef(null);
    const navigate = useNavigate();

    const handleLogin = () => {
      //use firebase
      // console.log(mobileNumberRef.current.value);
      navigate("/");
    }

    const validateFormInputs = () => {
        // if (mobileNumberRef.current.value.length === 10 ) {
        //   return true;
        // } 
        // else {
        //   return false;
        // }
        return true;
    }

    return (
    <div className="border border-black w-4/12 mt-5 m-auto rounded-md">
        <h2 className="text-4xl m-4">Sign In</h2>
        <form className="m-4" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
                <input
                  ref={mobileNumberRef}
                  className="border border-gray-400 p-3 rounded-sm w-full"
                  type="text"
                  placeholder="Mobile Number"
                />
            </div>    
            <button
              disabled={!validateFormInputs()}
              className="bg-green-500 p-3 my-2 rounded-md w-full text-white"
              onClick={handleLogin}
            >
              Send OTP
            </button>
            <hr className="border border-black"/>
            <p className="mt-1">
              New to foodie?{" "}
            <Link className="font-bold underline" to="/signup">
              Create account
            </Link>
            </p>
        </form>
    </div>
  );
}

export default Signin;
