import React from 'react'
import {Button, Navbar, TextInput, NavbarCollapse,
  NavbarLink, NavbarToggle} from 'flowbite-react';
import { Link, useLocation } from 'react-router';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  const path = useLocation().pathname;
  return (
    
    <div>
      <Navbar className='border-b-2'>
        <Link to="/" className=' dark:text-white'>
        <span className='px-2 py-1 text-rose-600  my-logo font-bold text-3xl lg:text-4xl'>Savannah</span>
        </Link>
        <form>
            <TextInput 
            type='text'
            placeholder='Search'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden cursor-pointer' pill>
            <AiOutlineSearch />
        </Button>
          <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline  cursor-pointer' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
            <Button className='cursor-pointer' >Sign in</Button>
            </Link>   
            <NavbarToggle /> 
          </div>
          <NavbarCollapse>
            <NavbarLink active={path === "/"} as={Link} to="/" className='text-lg'>
              Home
            </NavbarLink>
            <NavbarLink active={path === "/blogs"} as={Link} to="/blogs" className='text-lg'>
              Blogs
            </NavbarLink>
            <NavbarLink active={path === "/about"} as={Link} to="/about" className='text-lg'>
            About
            </NavbarLink>
          </NavbarCollapse>
      </Navbar>

    </div>
  )
}

export default Header