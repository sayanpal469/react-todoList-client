import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const location = useLocation()
      const from = location.state?.from?.pathname || '/' ;

      if(user || gUser) {
        navigate(from, {replace: true})
      }
      const handelSubmit= (e) => {
          e.preventDefault()
          const name = e.target.name.value
          const email = e.target.name.value
          const password = e.target.password.value
          createUserWithEmailAndPassword(email, password)
      }

    return (
        <div className='flex items-center h-screen justify-center py-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <form onSubmit={handelSubmit} class="card-body">
                <h2 class="text-center font-bold text-4xl mb-5">Sign Up</h2>
                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                <div className='flex justify-between'>
                <p className='text-sm text-primary font-bold'>Already have an account? </p>
                <Link to='/login' className='text-sm text-primary font-bold'>Login</Link>
                </div>
                <div class="card-actions justify-center">
                <button class="btn btn-primary text-white w-full">Sign Up</button>
                <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent w-full mt-5">Continue with Google</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default SignUp;