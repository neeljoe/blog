import React from 'react'
import {Navbar, TextInput} from 'flowbite-react';
import { Link } from 'react-router';
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    
    <div>
      <Navbar className='border-b-2'>
        <Link to="/" className='self-center text-sm sm:text-xl md:text-2xl
        font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-rose-600 via-rose-400 to-rose-300 text-white rounded-lg my-logo'>Savannah</span>
        </Link>
        <form>
            <TextInput 
            type='text'
            placeholder='Search'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
      </Navbar>

    </div>
  )
}

export default Header