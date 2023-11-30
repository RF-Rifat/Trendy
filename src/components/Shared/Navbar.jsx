import React, { useContext, useEffect, useState } from "react";
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
  Badge,
} from "@material-tailwind/react";
import {
  TableCellsIcon,
  UserCircleIcon,
  ChevronDownIcon,
  InboxArrowDownIcon,
  Bars3Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../Authentication/Provider";

// profile menu component




function ProfileMenu() {
  const { user, logOut } = useContext(AuthProvider);
  const { displayName, photoURL, email } = user || {};

  const profileMenuItems = [
    {
      label: `${displayName}`,
      link: "/",
      icon: UserCircleIcon,
    },
    {
      label: `${email}`,
      link: "/",
      icon: InboxArrowDownIcon,
    },
  ];
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
          <Badge color="green" className="m-1">
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile img"
              className="border border-gray-900 p-0.5 w-10 h-10"
              src={
                photoURL
                  ? photoURL
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              }
            />
          </Badge>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }) => {
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className="flex items-center gap-2 rounded"
            >
              {React.createElement(icon, {
                className: `h-4 w-4`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal">
                {label}
              </Typography>
            </MenuItem>
          );
        })}
        <button
          onClick={logOut}
          role="menuitem"
          className="w-full pt-[9px] pb-2 px-3 text-start leading-tight cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4 text-red-500"
            strokeWidth="2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="block antialiased font-sans text-sm leading-normal text-red-500 font-normal">
            Sign Out
          </span>
        </button>
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
    label: "Services",
    link: "Service",
    icon: TableCellsIcon,
  },
  {
    label: "ServicesCart",
    link: "ServiceCart",
    icon: ShoppingCartIcon,
  },
  {
    label: "Women",
    link: "Women",
    icon: ShoppingBagIcon,
  },
  {
    label: "Kid",
    link: "Kid",
    icon: ShoppingBagIcon,
  },
  {
    label: "My Cart",
    link: "Cart",
    icon: ShoppingCartIcon,
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
            isPending
              ? "pending"
              : isActive
              ? "active bg-blue-gray-200 rounded-3xl"
              : ""
          }
        >
          <Typography
            as="div"
            variant="small"
            color="gray"
            className={`font-medium text-lg text-blue-gray-500 text-center ${navbarColor}`}
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
  const { user } = useContext(AuthProvider);
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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
  const drawerBgColor = isScrolled
    ? "bg-primary text-background"
    : "bg-background text-primary";

  return (
    <>
      <nav
        className={`z-50 w-full p-2 lg:pl-6 sticky h-20 top-0 rounded-b-md ${navbarBgColor}`}
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
              // color="black-gray"
              variant="text"
              onClick={openDrawer}
              className="ml-auto mr-2 lg:hidden"
            >
              <Bars3Icon className={open ? "h-6 w-6 rotate-90" : "h-6 w-6"} />
            </IconButton>

            <div className="flex gap-3 items-center">
              <Link to={"/login"}>
                {!user && (
                  <Button className="bg-secondary">
                    <span>Log In</span>
                  </Button>
                )}
              </Link>
              {user && <ProfileMenu />}
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
            <img className="h-20 " src="/Logo.png" alt="logo" />
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
        {!user && (
          <div className="flex gap-2">
            <Button variant="outlined">SIGN UP</Button>
            <Button className="bg-secondary">LOG IN</Button>
          </div>
        )}
      </Drawer>
    </>
  );
}
