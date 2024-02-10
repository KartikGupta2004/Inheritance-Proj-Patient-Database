import { NavLink } from "react-router-dom";
import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { MdLocalPharmacy } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLogin } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { useState, useEffect } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />
  },
  {
    path: "/medicalrecords",
    name: "Features",
    icon: <MdOutlineFeaturedPlayList />
  },
  {
    path: "/medicalnews",
    name: "Medical News",
    icon: <MdMessage />,
  },
  {
    path: "/nearbypharmacy",
    name: "Pharmacy Finder",
    icon: <MdLocalPharmacy />,
  },
  {
    path: "/doctor",
    name: "Appointment",
    icon: <FaUserDoctor />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    // exact: true,
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
      // {
      //   path: "/settings/2fa",
      //   name: "2FA",
      //   icon: <FaLock />,
      // },
      // {
      //   path: "/settings/billing",
      //   name: "Billing",
      //   icon: <FaMoneyBill />,
      // },
    // ],
  },
  {
    path: "/login",
    name: "Login",
    icon: <CiLogin className='text-2xl justify-center'/>,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeSidebar = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    // Add event listener to close sidebar on click outside
    if (isOpen) {
      document.addEventListener("click", closeSidebar);
    } else {
      document.removeEventListener("click", closeSidebar);
    }

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isOpen]);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo mb-0"
                >
                  MedVault
                </motion.h1>
              )}
            </AnimatePresence>

            <div className={`text-3xl ml-1 ${isOpen ? 'pr-3' : ''}`}>
  <GiHamburgerMenu onClick={toggle} />
</div>
          </div>
          <section className="routes ">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className='link no-underline text-3xl'
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text text-xl"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;