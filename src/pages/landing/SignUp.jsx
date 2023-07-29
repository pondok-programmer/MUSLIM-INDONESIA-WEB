import { NavLink } from "react-router-dom";
import logo from "../../assets/9468810_4191982-removebg-preview 2.png";
import icon from "../../assets/Group 60.png";

import InputLanding from "../../components/modal/InputLanding";
import Icon from "@mdi/react";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import { useState } from "react";

const SignUp = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false)
  const handleShowPassword = (field) => {
    if (field === "password1") {
      setShow1(!show1);
    } else if (field === "password2") {
      setShow2(!show2);
    }
  };

  return (
    <>
      <main className="w-full h-screen lg:flex justify-evenly bg-[#34A853] box-border px-[25p] py-5">
        <div className="w-full lg:w-[400px] flex justify-center items-center">
          <img src={logo} alt="Logo" className="md:w-[200px]"/>
          <h2 className="text-white text-[24px] md:text-[36px] font-semibold">
            <span className="text-[#E2DA13]">Muslim</span>
            <br /> Indonesia
          </h2>
        </div>
        <div className="lg:w-[400px] lg:h-[600px lg:relative lg:border rounded-md">
          <div className="w-full text-[#e2da13] flex flex-col justify-center items-center">
            <h1 className="text-center text-[36px] md:text-[40px] font-semibold p-5 md:p-8">
              <span className="text-white">Create</span> Account
            </h1>
            <form className="w-full flex flex-col justify-center items-center">
              <InputLanding type="text" placeholder="Full Name" />
              <InputLanding type="text" placeholder="User Name" />
              <InputLanding type="number" placeholder="Phone" />
              <InputLanding type="text" placeholder="Email" />
              <div className="w-[300px] md:w-[400px] lg:w-[300px] relative text-white">
                <InputLanding
                  type={show1 ? "text" : "password"}
                  placeholder="Password"
                />
                <label
                  onClick={() =>handleShowPassword("password1")}
                  className="absolute bottom-0 right-0"
                >
                  {show1 ? (
                    <Icon path={mdiEyeOff} size={1} />
                  ) : (
                    <Icon path={mdiEye} size={1} />
                  )}
                </label>
              </div>
              <div className="w-[300px] md:w-[400px] lg:w-[300px] relative text-white">
                <InputLanding
                  type={show2 ? "text" : "password"}
                  placeholder="Password"
                />
                <label
                  onClick={() =>handleShowPassword("password2")}
                  className="absolute bottom-0 right-0"
                >
                  {show2 ? (
                    <Icon path={mdiEyeOff} size={1} />
                  ) : (
                    <Icon path={mdiEye} size={1} />
                  )}
                </label>
              </div>
              <button
                type="submit"
                className="w-[200px] h-[50px] md:text-[20px] lg:text-[16px] bg-gradient-to-br from-[#40ec15] to-[#688f16] rounded-full text-white mt-4"
              >
                Register
              </button>
            </form>
            <p className="text-center text-white">or</p>
            <p className="md:text-[20px] lg:text-[16px] flex gap-2">
              Register with
              <a href="">
                <img src={icon} alt="" className="w-8" />
              </a>
            </p>
            <div className="w-full fixed lg:absolute bottom-3 px-3">
              <p className="text-white md:text-[20px] lg:text-[16px]">
                Have an account?
                <NavLink to="/" className="text-[#e2da13]">
                  {" "}
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
