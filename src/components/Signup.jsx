import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  //use firebase
  const mobileNumberRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const validateFormInputs = () => {
    // if (mobileNumberRef.current.value.length === 10 && 
    //     nameRef.current.value.trim() !== "" && 
    //     emailRef.current.value.includes('@') && 
    //     checked) {
    //   return true;
    // } 
    // else {
    //   return false;
    // }
    return true;
  }

  function handleSignup() {
    console.log(mobileNumberRef.current.value);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    navigate("/signin");
  }

  return (
    <div className="border border-pink w-4/12 mt-5 m-auto rounded-md bg-pink-100">
      <h2 className="text-4xl m-4">Sign up</h2>
      <form className="m-4" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={mobileNumberRef}
          className="border border-gray-400 p-3 my-2 rounded-sm w-full"
          type="text"
          placeholder="Mobile Number"
        />
        <input
          ref={nameRef}
          className="border border-gray-400 p-3 my-2 rounded-sm w-full"
          type="text"
          placeholder="Name"
          required
        />
        <input
          ref={emailRef}
          className="border border-gray-400 p-3 my-2 rounded-sm w-full"
          type="email"
          placeholder="Email"
        />   
        <input
          className="border border-black p-1 my-1"
          onChange={(e) => setChecked(e.target.checked)}
          id="checkbox"
          type="checkbox"
        />
        <label className="form-check-label" >
          I agree to Burgeria's Terms of Service and Privacy Policy.
        </label>
        <button
          disabled={!validateFormInputs()}
          className="bg-green-500 p-3 my-2 rounded-md w-full text-white"
          onClick={handleSignup}
        >
          Create account
        </button>
        <hr className="border border-black"/>
        <p className="mt-1">
          Already have an account?
          <Link className="font-bold underline ml-1" to="/signin">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
