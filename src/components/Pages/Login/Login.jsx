import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Lottie from "lottie-react";
import login from './../../../../public/login.json'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const { signIn, googleSignIn } = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                if(loggedUser){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                console.log(loggedUser);
                // navigate
                navigate('/');
               
            })
            .catch(error=>{
                if(error){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: "Your Email and Password don't match",
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser=result.user;
                if(loggedUser){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                navigate('/')
                
                const email=loggedUser.email;
                const name=loggedUser.displayName;
                
                const data={email,name,role:"user"}
                // save user information

                axios.post('https://demo-theta-sepia.vercel.app/user',
                data
            )
            .then(res =>{

                   console.log(res.data);
            })
            })
            .catch(error => {
              if(error){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Your Email Password don't match",
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-fuchsia-300">
                <div className="hero-content grid grid-cols-2">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div>
                    <Lottie animationData={login} loop={true} />
                    </div>
                    <div className="card w-[500px] mx-auto shadow-2xl bg-fuchsia-800">
                        <form className="card-body" onSubmit={handleLogin} >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered" required name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name='password' />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center mt-1 text-white'>Or</p>
                            <div onClick={handleGoogleSignIn} className='form-control mt-1'>

                                <button className='btn bg-violet-300'><Icon className='text-3xl' icon="flat-color-icons:google" />Google</button>
                            </div>
                        </form>
                        <p className='mx-5 my-2'>New user ? Please <Link to={"/register"} className='hover:text-black text-md fw-bold'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;