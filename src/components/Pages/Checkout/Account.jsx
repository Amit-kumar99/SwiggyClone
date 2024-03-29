import { useState } from "react";
import Authentication from "../../common/Authentication";

const Account = () => {
    const [displayLoginForm, setDisplayLoginForm] = useState(false);
    const [displaySignupForm, setDisplaySignupForm] = useState(false);

    return (
        <div className="bg-white pl-5 py-5 mb-5">
            <div className="ml-5">
                <h1 className="font-bold text-lg">Account</h1>
                <p>To place your order now, log in to your existing account or sign up.</p>
                
                {(!displayLoginForm && !displaySignupForm) && 
                    (<div className="text-lime-600">
                        <button className="border border-lime-600 px-5 py-1 mt-5 mb-3 mr-3 w-3/12"
                        onClick={() => setDisplayLoginForm(true)}>
                            <p className="text-xs">Have an account?</p>
                            <p className="font-semibold">LOG IN</p>
                        </button>
                        <button className="border bg-lime-600 px-5 py-1 my-3 mt-5 mb-3 text-white w-3/12"
                        onClick={() => setDisplaySignupForm(true)}>
                            <p className="text-xs">New to foodie?</p>
                            <p className="font-semibold">SIGN UP</p>
                        </button>
                    </div>)
                }
                {displayLoginForm && <Authentication/>}

                {/* set the setIsSignForm to false for below*/}
                {/* {displaySignupForm && <Signin/>} */}
                
            </div>
        </div>)
}

export default Account;
