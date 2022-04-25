import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from './../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return (
            <Loading></Loading>
        );
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your email is not varified</h3>
            <h5 className='text-success'>Please verify your email address.</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send varification email
            </button>
            <ToastContainer></ToastContainer>
        </div>;
    }
    return children;
};

export default RequireAuth;