import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineBackspace } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const Resume = () => {
  return (
    <div className="w-full h-screen bg-main-dark">
      {/* Navbar */}
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-main-dark text-main-light">
        <div>
          <LinkRouter to="/">
            <HiOutlineBackspace size={40} />
          </LinkRouter>
        </div>
        {/* social */}
        <div className="hidden lg:flex fixed flex-col top-1/3 left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.linkedin.com/in/zakarya-boudraf-55006b240/"
                target="_blank"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white "
                href="https://github.com/ZakaryaBoudraf"
                target="_blank"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <a
                className="flex justify-between items-center w-full text-white "
                href="mailto: zakaryaboudraf@gmail.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-main-light">
              <LinkRouter
                className="flex justify-between items-center w-full text-white "
                to="/resume"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </LinkRouter>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
