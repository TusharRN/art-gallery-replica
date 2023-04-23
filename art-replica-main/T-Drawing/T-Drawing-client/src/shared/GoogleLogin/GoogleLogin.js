import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { setAuthToken } from '../../utilities/authToken';

const GoogleLogin = () => {
        const { googleProviderLogin } = useContext(AuthContext);
        const navigate = useNavigate();
        const location = useLocation();
        const from = location?.state?.from?.pathname || "/";

        const handleGoogleLogin = () => {
          googleProviderLogin()
            .then((result) => {
              const user = result.user;
              console.log(user);
              setAuthToken(user);
              navigate(from, { replace: true });
            })
            .catch((err) => console.error(err));
        };
        return (
          <div>
            <p className="text-center font-bold">Or Sign in with</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline hover:bg-green-500 hover:border-none text-green-500"
              >
                Google
              </button>
            </div>
          </div>
        );
};

export default GoogleLogin;