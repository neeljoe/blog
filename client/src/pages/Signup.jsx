import React, { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {Link, useNavigate} from 'react-router';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange =  (e) => {
     setFormData({...formData, [e.target.id]: e.target.value.trim()});  
  }
  const handleSubmit = async (e) => {
          e.preventDefault();
          if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields');
          }
          try {
            setLoading(true);
            setErrorMessage(null);
             const res = await fetch('/api/auth/signup', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(formData),
             }); 
             const data = await res.json();
             if (data.success === false) {
              return setErrorMessage(data.message);
             }
             setLoading(false);
             if(res.ok) {
              navigate('/sign-in');
            }

          } catch (error) {
                setErrorMessage(error.message); 
                setLoading(false);
          }
  };
  
  return (
    <div className='min-h-screen mt-10 sm:mt-20 md:mt-30'>
      <div className='flex flex-col md:flex-row p-5 md:px-15 lg:px-25 gap-6 md:gap-20'>
        {/* left side */}
        <div className='flex-1 '>
          <p className='text-5xl my-logo text-rose-600 dark:text-white font-bold md:text-6xl lg:text-7xl mb-4  md:mb-8'>Your Life, <span>Your Style</span></p>
          <p className='text-lg'>Discover your unique personal style, find inspiration for a vibrant lifestyle, well-being, and start charting your path towards your goals. Let's make these years your most confident and authentic yet!</p>

        </div>
        {/* right side */}
        <div className='flex-1'>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="username">Your name</Label>
        </div>
        <TextInput id="username" type="text" placeholder="username" required onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Your email</Label>
        </div>
        <TextInput id="email" type="email" placeholder=" eg: name@flowbite.com" required onChange={handleChange}/>
      </div>
      <div>
        <div className="mb-2 block ">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput id="password" type="password" required onChange={handleChange}/>
      </div >
      <Button  type="submit" className='md:mt-4' disabled={loading}>
        {
          loading ? (
            <>
            <Spinner size='sm'/>
            <span className='pl-3'>loading..</span>
            </>
          ) : 'Sign Up'
        }
      </Button>
    </form>
      <div className='flex gap-2 mt-6 text-sm'>
        <span>Have an account ?</span>
        <Link to='/sign-in' className='text-blue-500 dark:text-blue-300'> Sign In</Link>
      </div>
      {
        errorMessage && (
          <Alert className='mt-5' color='failure'>
           {errorMessage}
          </Alert>
        )}
        </div>
      </div>
      
    </div>
  );
};

export default Signup