import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';



const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        const data =  {email,role:"user"};
        createUser(email, password).then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
               

                axios.post('http://localhost:5000/user',
                    data
                )
                .then(res =>{

                       console.log(res.data);
                })
                  
                    


            })
            .catch(error => {
                console.log(error);
            })



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
                        <form className="card-body" onSubmit={handleRegister} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered" required name='name' />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name='confirm-password' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" required name='image' />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;