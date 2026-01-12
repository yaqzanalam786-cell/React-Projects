import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import {login as Storelogin } from '../Store/AuthSlice' 
import {Logo, Input, Button} from '../Components' 
import { useDispatch } from 'react-redux' 
import {useForm} from 'react-hook-form'
import authService from '../AppWrite/AuthService'
import { useState } from 'react'




function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {register, handleSubmit} =  useForm()

  const [error, setError] = useState(null)

 
  const login = async (data) => {
    setError("") 
    try {
      const session = await authService.login(data)
      
      if (session){
        const userData = await authService.getCurrentAccount()
        
        if (userData){
          dispatch(Storelogin(userData))
          navigate('/')
        }

      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-black rounded-xl p-6 border border-black/10`}>
      <div className="mb-1 flex justify-center over">
                    <span className="inline-block w-full max-w-100px ">
                        <Logo width="100%" />
                    </span>
                    
        </div>
       
        <h2 className="text-center text-white text-2xl font-bold leading-tight">Sign in to your account</h2>
       
          <p className="mt-2 text-center text-base text-white/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
      
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
       

       
       <form onSubmit={handleSubmit(login)} className='mt-8' >
        <div className='space-y-5'>
        
          <Input 
          label = "Email:"
          placeholder = "Enter your Email"
          type = "email"
          
          {...register("email",{
            required : true,
            validate : {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                        
            } 
          })}
          />
          <Input
          label = "Password:"
          placeholder = "Enter your Password"
          type = "password"
          {...register("password",{
            required : true,
          })}
          />
          
        
          <Button
          type='Button'
          className="w-full bg-white cursor-pointer mt-2 font-medium  "
           
          > Sign in </Button>

        </div>
       </form>
       
       
      </div>
    </div>
  )
}

export default Login