import InputLanding from "../../components/modal/InputLanding";
import logo from "../../assets/9468810_4191982-removebg-preview 2.png";
import icon from "../../assets/Group 60.png";
import playstore from "../../assets/channels4_profile-removebg-preview.png"
import { NavLink } from "react-router-dom";
import { mdiEye, mdiEyeOff, mdiGooglePlay } from "@mdi/js";
import { useState } from "react";
import Icon from "@mdi/react";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <main className="w-full h-screen lg:flex justify-evenly items-center bg-[#34A853] box-border py-5 md:py-16">
        <div className="w-full lg:w-[400px] flex justify-center items-center">
          <img src={logo} alt="Logo" className="md:w-[200px]" />
          <h2 className="text-white text-[24px] md:text-[36px] font-semibold">
            <span className="text-[#E2DA13]">Muslim</span>
            <br /> Indonesia
          </h2>
        </div>
        <div className="lg:w-[400px] lg:h-[620px] lg:flex flex-col justify-between items-center">
          <div className="lg:w-full lg:h-[550px] lg:relative lg:border rounded-md">
            <div className="w-full text-[#e2da13] flex flex-col justify-center items-center">
              <h1 className="text-center text-[36px] md:text-[40px] font-semibold p-5 md:p-16 lg:p-7">
                <span className="text-white">Welcome To</span> Login!
              </h1>
              <form className="w-full flex flex-col justify-center items-center gap-5">
                <InputLanding type="text" placeholder="Email" />
                <div className="w-[300px] md:w-[400px] lg:w-[300px] relative text-white">
                  <InputLanding
                    type={show ? "text" : "password"}
                    placeholder="Password"
                  />
                  <label
                    onClick={handleShow}
                    className="absolute bottom-0 right-0"
                  >
                    {show ? (
                      <Icon path={mdiEyeOff} size={1} />
                    ) : (
                      <Icon path={mdiEye} size={1} />
                    )}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-[210px] lg:w-[150px] h-[58px] lg:h-[48px] md:text-[20px] lg:text-[16px] bg-gradient-to-br from-[#40ec15] to-[#688f16] rounded-full text-white mt-5"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-white">or</p>
              <p className="md:text-[20px] lg:text-[16px] flex gap-2">
                Login with
                <a href="">
                  <img src={icon} alt="" className="w-8" />
                </a>
              </p>
            </div>
            <div className="w-full flex justify-between fixed lg:absolute bottom-3 px-3">
              <p className="text-white md:text-[20px] lg:text-[16px]">Forgot the Password?</p>
              <NavLink to="/register">
                <p className="text-[#e2da13] md:text-[20px] lg:text-[16px]">Register</p>
              </NavLink>
            </div>
          </div>
          <button className="hidden lg:flex w-[150px] h-[50px] border-[2px] rounded-md">
            <a href="*" className="flex justify-center items-center text-[10px] text-white"><Icon path={mdiGooglePlay} size={2} /> <span>Download it from <br/><span className="text-[16px] font-medium">Play Store</span></span></a>
            </button>
        </div>
      </main>
    </>
  );
};

export default SignIn;
