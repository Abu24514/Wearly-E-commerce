import React, { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import authImg from "../assets/auth-login.png";
import { PiCrown } from "react-icons/pi";
import { AuthContext } from "../context/AuthContext";
import userAxios from "../configs/api";
import toast from "react-hot-toast"
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userAxios.post('/api/user/login', formData);
      login(data.user);
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
    }
  };

const forgotPass = () => {
    const lines = [
        { text: "Password bhul gaya? 😒", duration: 1800, delay: 1500 },
        { text: "Haan... password...", duration: 1800, delay: 1500 },
        { text: "Bhul gaya 💀", duration: 1500, delay: 1200 },
        { text: "Per use toh nahi bhula na? 😁", duration: 2100, delay: 1800 },
        { text: "Forget password ka option nahi hai...", duration: 2000, delay: 1800 },
        { text: "Jaise tu nahi tha uski life mein 🪦", duration: 3500, delay: 0 },
    ]

    let i = 0;
    const showNext = () => {
        if (i < lines.length) {
            const { text, duration, delay } = lines[i]
            toast(text, { duration })
            i++
            if (delay) setTimeout(showNext, delay)
        }
    }
    showNext()
}

  return (
    <section className="max-w-6xl mx-auto px-4 md:py-6 py-2 min-h-screen flex items-start pt-24">
    <div className="grid lg:grid-cols-2 border border-neutral-200 rounded-3xl overflow-hidden lg:min-h-0 lg:h-[92vh] bg-white w-full">

        {/* Left Side */}
        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10 overflow-y-auto">
          <div className="w-full max-w-md">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-1.5">
              <PiCrown size={14} />
              <span className="text-xs font-medium">Wearly Account</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl mt-4">Welcome Back</h1>
            <p className="text-neutral-500 mt-2 text-sm leading-relaxed hidden md:block">
              Sign in to manage your orders, wishlist, and continue shopping with Wearly.
            </p>

            {/* Form */}
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
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
                    placeholder="Enter your password"
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

              <div className="flex justify-end">
                <button 
                onClick={forgotPass}
                type="button" className="text-xs text-neutral-500 hover:text-black">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-neutral-800 transition-colors text-sm"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-5">
              <div className="border-t border-neutral-200"></div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-xs text-neutral-400">OR</span>
            </div>

            <p className="text-center text-neutral-500 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-black hover:underline">
                Create Account
              </Link>
            </p>

          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block">
          <img src={authImg} alt="Login" className="w-full h-full object-cover object-top" />
        </div>

      </div>
    </section>
  );
};

export default Login;