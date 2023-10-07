import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Icon } from '@iconify/react';
import { saveUser } from '../../../api/auth';

const Login = () => {
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
                console.log(loggedUser);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // save user information

                fetch(`http://localhost:5000/user/${result.user.email}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({email:result.user.email})
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => { })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-fuchsia-300">
                <div className="hero-content grid grid-cols-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;