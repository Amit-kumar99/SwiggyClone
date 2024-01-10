import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  //use firebase
  const mobileNumber = useRef(null);
  console.log(mobileNumber);
  const name = useRef(null);
  const email = useRef(null);

  console.log(ref);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  function validateFormInputs() {
    if (mobileNumber.current.value.length === 10 && name.current.value.trim() !== "" && email.current.value.includes('@') && checked) {
      return true;
    } 
    else {
      return false;
    }
  }

  // function handleSignup({mobileNumber, name, email}) {
  //   navigate("/signin");
  // }
  function handleSignup() {
    navigate("/signin");
  }

  return (
    <div className="border border-pink w-4/12 mt-5 m-auto rounded-md bg-pink-100">
      <h2 className="text-4xl m-4">Sign up</h2>
      <form className="m-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            ref={mobileNumber}
            className="border border-gray-400 p-3 rounded-sm w-full"
            type="text"
            placeholder="Mobile Number"
          />
          <div className="mb-2">
            <label>
              {mobileNumber.current.value.length !== 10 && <small className="text-red-500">Mobile number must be 10 digits</small>}
            </label>
          </div>
        </div>
        <div>
          <input
            ref={name}
            className="border border-gray-400 p-3 rounded-sm w-full"
            type="text"
            placeholder="Name"
            required
          />
          <div className="mb-2">
            <label className="text-danger">
              {name.current.value.trim() === "" && <small className="text-red-500">Name must not be empty</small>}
            </label>
          </div>
        </div> 
        <div>
          <input
            ref={email}
            className="border border-gray-400 p-3 rounded-sm w-full"
            type="email"
            placeholder="Email"
          />
          <div className="mb-2">
            <label className="text-danger">
              {!email.current.value.includes("@") && <small className="text-red-500">Invalid email</small>}
            </label>
          </div>     
        </div>
        <div className="form-check mt-2">
          <input
            className="border border-black p-1 my-1"
            onChange={(e) => setChecked(e.target.checked)}
            id="checkbox"
            type="checkbox"
          />
          <label className="form-check-label" for="checkbox">
            I agree to Burgeria's Terms of Service and Privacy Policy.
          </label>
        </div>
        <button
          disabled={!validateFormInputs()}
          className="bg-green-500 p-3 my-2 rounded-md w-full text-white"
          onClick={() => handleSignup({mobileNumber, name, email})}
        >
          Create account
        </button>
        <hr className="border border-black"/>
        <p className="mt-1">
          Already have an account?
          <Link className="font-bold underline" to="/signin">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
