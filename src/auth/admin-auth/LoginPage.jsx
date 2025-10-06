import { useNavigate } from "react-router-dom";






export default function LoginPage() {

  const navigate = useNavigate();


  const handleSubmit = ()=>{
    navigate("/sub-admin-dashboard")
  }


  

  return (
    <div className=" flex items-center justify-center  ">
      <div className="w-full max-w-5xl bg-white rounded-2xl  p-8">
        {/* Header */}
        {/* <div className="flex justify-center mb-8">
          <img
            src="/src/assets/images/logos/logo.svg"
            alt="Logo"
            className="h-12"
          />
        </div> */}


        <div>
          <div className=" flex items-center justify-center  p-4">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <h1 className="text-2xl font-bold text-indigo-600">
                    <img src="/src/assets/images/logos/logo.svg" alt="" srcset="" />
                  </h1>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                  Sub admin login
                </h2>



                {/* Divider */}
                <div className="flex items-center gap-2 mb-6">
                  <hr className="flex-grow border-gray-300" />
                  <span className="text-sm text-gray-500">Login in with email</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-sm text-indigo-500 hover:underline">
                      Forgot Password ?
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Keep me logged in */}
                <div className="flex items-center mb-6">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Keep me logged in
                  </label>
                </div>

                {/* Sign In Button */}
                <button onClick={handleSubmit}  className="w-full bg-btn text-white py-3 rounded-lg  transition">
                  Login in
                </button>
                {/* <div>
            <h1>Don’t have an account yet?Sign Up Now</h1>
        </div> */}
              </div>


            </div>
        </div>

        


        </div>
      </div>

  );
}



