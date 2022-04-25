import React from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FormLabel } from 'react-bootstrap';
import { useState } from 'react';
import Loading from './../../Shared/Loading/Loading';


const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true }
    );

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // const agree = event.target.terms.checked;
        // console.log(name, email, password, confirmPassword)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log("updated name")
        navigate('/')

    }

    return (
        <div className='container  border rounded  shadow-lg mt-5 '>
            <div className='register-form '>
                <h2 className='text-center text-primary'>Please register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="name" placeholder='Your Name' required />

                    <input type="email" name="email" id="email" placeholder='Your email' required />

                    <input type="password" name="password" id="password" placeholder='Password' required />

                    <input type="password" name="confirmPassword" id="confirm-password" placeholder='confirm your password' required />

                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept Genius cars terms and condition</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>Accept Genius cars terms and condition</label>

                    <input
                        disabled={!agree}
                        className='w-50 mx-auto btn btn-primary'
                        type="submit"
                        value="Register" />
                </form>
                <p>ALready have an account? <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;