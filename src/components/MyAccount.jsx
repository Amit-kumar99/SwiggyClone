import { useSearchParams } from "react-router-dom";

const MyAccount = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("v");
  //no. of orders that the user has placed even in the past has to be stored in the backend, check for swiggy, 
  //or it shows only curretn order?
  
  return (
    <div>
        <h1 className="font-bold text-2xl">MyAccount</h1>
        <div>
          <h2 className="font-semibold">Orders</h2>
        </div>
    </div>
  )
}

export default MyAccount;