import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import dataObject from "../data.js";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src={dataObject.navImage}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>

          <Navbar.Link active href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="/cart"> 
              Cart <span className="bg-pink-500 px-2.5 py-1 rounded-full text-white">4</span>
          </Navbar.Link>

          {/* <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Pricing</Link>
          <Link>
            Cart <span className="bg-pink-500 px-2.5 py-1 rounded-full text-white">4</span>
          </Link> */}

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
