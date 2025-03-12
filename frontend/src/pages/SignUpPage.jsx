import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Lock, LucideMessageSquareHeart, User } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  // Sample video URLs (replace with your own)
  const videosDown = [
    "https://videos.pexels.com/video-files/7279035/7279035-sd_360_640_25fps.mp4",
    "https://videos.pexels.com/video-files/13456112/13456112-sd_360_640_24fps.mp4",
    "https://videos.pexels.com/video-files/8629052/8629052-sd_360_640_25fps.mp4",
    "https://videos.pexels.com/video-files/4038501/4038501-sd_506_960_25fps.mp4",
    "https://videos.pexels.com/video-files/13929574/13929574-sd_360_640_24fps.mp4",
  ];

  const videosUp = [
   "https://videos.pexels.com/video-files/7114569/7114569-hd_1066_1920_25fps.mp4",
   "https://videos.pexels.com/video-files/4605195/4605195-uhd_1440_2732_25fps.mp4",
   "https://videos.pexels.com/video-files/7563826/7563826-hd_1080_1920_30fps.mp4",
   "https://videos.pexels.com/video-files/4962722/4962722-uhd_1440_2560_25fps.mp4",
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side with Two Columns of Scrolling Videos */}
    
       {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              {/* <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FaQuoteLeft className="size-6 text-primary" />
              </div> */}
<h1 className="text-2xl font-bold mt-2 text-base-content/60">
  Wink. <span className="text-primary">Type</span>. Vibe.
</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-base-content/60">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/60">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 z-40 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className="input input-bordered focus:outline-0 w-full pl-10 text-base-content/60"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/60">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 z-50 pl-3 flex items-center pointer-events-none">
                  <AiOutlineMail className="" />
                </div>
                <input
                  type="email"
                  className="input  focus:outline-0 input-bordered w-full pl-10"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/60">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 z-40 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered focus:outline-0 w-full pl-10"
                  placeholder="Enter You Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="size-5 text-base-content/40" /> : <Eye className="size-5 text-base-content/40" />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
      <span className="loading loading-ring loadings-xl"></span>
      Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account? <Link to="/login" className="link link-primary">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Sign-Up Form) */}
      <div className="hidden lg:flex relative items-center justify-between overflow-hidden px-10">
  {/* Column 1: Videos Scroll Upwards */}
  <div className="w-1/2 h-screen overflow-hidden">
    <div className="video-scroll-up p-8">
      {videosDown.map((video, index) => (
        <div key={index} className="w-11/12 h-1/2 mb-4">
          <video autoPlay loop muted className="w-full h-full object-cover rounded-full">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      {/* Duplicate the videos to create a seamless loop */}
      {videosDown.map((video, index) => (
        <div key={`dup-${index}`} className="w-11/12 h-1/2 mb-4">
          <video autoPlay loop muted className="w-full h-full object-cover rounded-xl">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  </div>

  {/* Column 2: Videos Scroll Downwards */}
  <div className="w-1/2 h-screen overflow-hidden">
    <div className="video-scroll-down p-8">
      {videosUp.map((video, index) => (
        <div key={index} className="w-11/12 h-1/2 mb-4">
          <video autoPlay loop muted className="w-full h-full object-cover rounded-xl border">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      {/* Duplicate the videos to create a seamless loop */}
      {videosUp.map((video, index) => (
        <div key={`dup-${index}`} className="w-11/12 h-1/2 mb-4">
          <video autoPlay loop muted className="w-full h-full object-cover rounded-full border">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  </div>
</div>
    
    </div>
  );
};

export default SignUpPage;