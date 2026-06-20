import React, { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import authImg from "../assets/auth-login.png";
import { PiCrown } from "react-icons/pi";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login('mock-token-123', {
      name: formData.email.split('@')[0],
      email: formData.email
    });
    navigate('/');
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-2 border border-neutral-200 rounded-3xl overflow-hidden min-h-screen lg:min-h-0 lg:h-[92vh] bg-white">

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
            <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
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
                <button type="button" className="text-xs text-neutral-500 hover:text-black">
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