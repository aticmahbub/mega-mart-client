import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} =useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleSocialLogin = (socialProvider) =>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from)
            }
        })
    }
    return (
        <div>
            <button onClick={() => handleSocialLogin(googleLogin)} className='btn btn-accent'>Google Login</button>
        </div>
    );
};

export default SocialLogin;