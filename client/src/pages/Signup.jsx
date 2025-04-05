import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {Link} from 'react-router';

const Signup = () => {
  return (
    <div className='min-h-screen mt-15 sm:mt-20 md:mt-30'>
      <div className='flex flex-col md:flex-row p-5 md:px-15 lg:px-25 gap-10 md:gap-20'>
        {/* left side */}
        <div className='flex-1 '>
          <p className='text-5xl my-logo text-rose-600 font-bold md:text-6xl lg:text-7xl mb-8'>Your Life, <span>Your Style</span></p>
          <p className='text-lg'>Discover your unique personal style, find inspiration for a vibrant lifestyle, well-being, and start charting your path towards your goals. Let's make these years your most confident and authentic yet!</p>

        </div>
        {/* right side */}
        <div className='flex-1'>
        <form className="flex max-w-md flex-col gap-4">
        <div>
        <div className="mb-2 block">
          <Label htmlFor="username">Your name</Label>
        </div>
        <TextInput id="username" type="text" placeholder="username" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Your email</Label>
        </div>
        <TextInput id="email" type="email" placeholder=" eg: name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput id="password" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button  type="submit">Sign Up</Button>
    </form>
      <div className='flex gap-2 mt-6 text-sm'>
        <span>Have and account ?</span>
        <Link to='/sign-in' className='text-blue-500'> Sign In</Link>
      </div>
        </div>
      </div>
      
    </div>
  )
}

export default Signup