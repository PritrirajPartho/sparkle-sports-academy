import React, { useContext } from 'react';
import gogle from '../../../assets/img/sign-google.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "student" }
                fetch('https://summer-camp-server-beta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>
                 <img className='rounded-xl bg-none mb-5 w-full sm:w-[375px]  h-[70px]' src={gogle} alt="" />
            </button>
        </div>
    );
};

export default GoogleLogin;