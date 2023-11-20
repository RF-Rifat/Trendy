import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { LoginCard } from "../Authentication/LoginCard";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    link: "/",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    link: "/",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    link: "/",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Sign Out",
    link: "/",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon}, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    link: "",
    icon: UserCircleIcon,
  },
  {
    label: "Women",
    link: "Women",
    icon: CubeTransparentIcon,
  },
  {
    label: "Jewelry",
    link: "Jewelry",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarColor = isScrolled ? "text-white" : "text-blue-gray-900";
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, link }) => (
        <NavLink
          to={`/${link}`}
          key={label}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Typography
            as="NavLink"
            variant="small"
            color="gray"
            className={`font-medium text-lg text-blue-gray-500 ${navbarColor}`}
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className=""> {label}</span>
            </MenuItem>
          </Typography>
        </NavLink>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [open, setOpen] = useState(false);
  const [showLoginCard, setShowLoginCard] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const openLoginCard = () => setShowLoginCard(true);
  const closeLoginCard = () => setShowLoginCard(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBgColor = isScrolled ? "bg-primary" : "bg-transparent";
  const drawerBgColor = isScrolled ? "bg-primary text-background" : "bg-background text-primary";

  return (
    <>
      <nav
        className={`z-40 w-full p-2 lg:pl-6 sticky h-20 top-0 rounded-b-md ${navbarBgColor}`}
      >
        <div className="mx-auto">
          <div className="mx-auto flex items-center justify-between text-blue-gray-900 gap-3">
            <Link
              as="a"
              to={"/"}
              className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
            >
              <img className="h-12 " src="/Logo.png" alt="logo" />
            </Link>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              size="sm"
              color="black-gray"
              variant="text"
              onClick={openDrawer}
              className="ml-auto mr-2 lg:hidden"
            >
              <Bars2Icon className={open ? "h-6 w-6 rotate-90" : "h-6 w-6"} />
            </IconButton>

            <div className="flex gap-3">
              <Button size="sm" className="bg-secondary" onClick={openLoginCard}>
                <span>Log In</span>
              </Button>
              <ProfileMenu />
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className={`p-4 lg:hidden ${drawerBgColor}`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Link
            to={"/"}
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <img className="h-20 " src="Logo.png" alt="logo" />
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <NavList></NavList>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            SIGN UP
          </Button>
          <Button size="sm" className="bg-secondary">LOG IN</Button>
        </div>
      </Drawer>

      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        style={{
          transition: "transform .5s ease-out",
          transform: `scale(${showLoginCard ? 1 : 0})`,
        }}
      >
        <div className="w-full max-w-md">
          <div className="bg-white p-6 rounded-md">
            <LoginCard />
            <Button onClick={closeLoginCard} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
