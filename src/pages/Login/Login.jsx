import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';
import loginImg from '../../../src/assets/img/login.svg';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <section className='login  mx-auto'>
            <Helmet>
                <title>Sparkle Sports Academy | Login</title>
            </Helmet>
            <div>
                <div className="hero flex flex-col sm:flex sm:flex-row sm:justify-center sm:items-center h-full mt-28 sm:mt-32 mb-10">
                    <div>
                        <div>
                            <img src={loginImg} className='w-80 mx-auto mb-8' srcset="" />
                        </div>
                        <div className="mx-auto mt-4 mb-6 text-center">
                            <h1 className="mx-atuo mb-2 sm:mb-6  text-center text-3xl sm:text-5xl font-bold ">Login now</h1>
                            <p className="py-6 sm:py-2 w-8/12 sm:w-100 mx-auto text-center sm:text-xl ">Unlimited learning opportunities for any Students. See what's new, log in for a course, and start earning skill now!</p>
                        </div>
                    </div>
                    <div className="card mx-auto w-11/12  md:w-1/2 shadow-2xl bg-base-100 border-2 border-blue-100 pb-4 sm:mr-[130px]">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label mt-2 mb-0">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn bg-[#1692F7] font-bold" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-3'><small>New Here? <Link to="/signup"><span className='text-red-400'>Create a Account now....</span></Link> </small></p>
                        <div className='mx-auto'><GoogleLogin></GoogleLogin></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;