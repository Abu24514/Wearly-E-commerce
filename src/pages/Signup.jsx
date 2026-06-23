import React, { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { PiCrown } from "react-icons/pi";
import authImg from "../assets/auth-signup.png";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast"
import userAxios from "../configs/api";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userAxios.post('/api/user/register', formData);
      console.log(data);
      login(data.user);
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed')
    }
  };

  return (
   <section className="max-w-6xl mx-auto px-4 md:py-6 py-2 min-h-screen flex items-start pt-24">
     <div className="grid lg:grid-cols-2 border border-neutral-200 rounded-3xl overflow-hidden lg:min-h-0 lg:h-[92vh] bg-white w-full">

        {/* Left Image */}
        <div className="hidden lg:block">
          <img src={authImg} alt="Signup" className="w-full h-full object-cover object-top" />
        </div>

        {/* Right Side */}
     <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md">

            {/* Badge */}
            <div className="inline-flex  items-center gap-2 border border-neutral-200 rounded-full px-3 py-1.5">
              <PiCrown size={14} />
              <span className="text-xs font-medium">Wearly Account</span>
            </div>

            {/* Heading */}
           
             <h1 className="font-display text-3xl sm:text-4xl mt-4">Create Account</h1>
            <p className="text-neutral-500 mt-2 text-sm leading-relaxed hidden md:block">
              Join Wearly today and discover timeless fashion, exclusive collections, and a seamless shopping experience.
            </p>
          

            {/* Form */}
            <form onSubmit={handleSignup} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 rounded-xl px-4 py-2.5 outline-none focus:border-black text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 rounded-xl px-4 py-2.5 outline-none focus:border-black text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 rounded-xl px-4 py-2.5 pr-12 outline-none focus:border-black text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
                  >
                    {showPassword ? <IoEyeOutline size={18} /> : <LuEyeClosed size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-neutral-800 transition-colors text-sm"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-5">
              <div className="border-t border-neutral-200"></div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-xs text-neutral-400">OR</span>
            </div>

            <p className="text-center text-neutral-500 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-black hover:underline">
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Signup;