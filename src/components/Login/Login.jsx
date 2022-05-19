import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
      const location = useLocation()
      const from = location.state?.from?.pathname || '/' ;

      if(user) {
        navigate(from, {replace: true})
      }

      const handelSubmit= (e) => {
        e.preventDefault()
        const email = e.target.name.value
        const password = e.target.password.value
        
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='flex items-center h-screen justify-center py-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <form onClick={handelSubmit} class="card-body">
                <h2 class="text-center font-bold text-4xl mb-5">Login</h2>
                <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                <div className='flex justify-between'>
                <p className='text-sm text-primary font-bold'>Create new account </p>
                <Link to='/signup' className='text-sm text-primary font-bold'>Sign Up</Link>
                </div>
                <div class="card-actions justify-center">
                <button class="btn btn-primary text-white w-full">Login</button>
                <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent w-full mt-5">Continue with Google</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login;