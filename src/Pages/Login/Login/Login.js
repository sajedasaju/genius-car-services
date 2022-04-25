import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';
import PageTitle from './../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement =

            <p className='text-danger'>Error: {error?.message}</p>


    }

    const handleSubmit = event => {
        event.preventDefault();
        emailRef.current.focus();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password)
        signInWithEmailAndPassword(email, password);

    }
    const navigateRegister = event => {
        navigate('/register');

    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Email")
        }
        else {
            toast("Please enter your email")
        }

    }
    return (
        <div className='container border rounded p-4 shadow-lg mt-5'>
            <PageTitle title='login'></PageTitle>
            <div className='w-50 mx-auto '>
                <h2 className='text-center text-primary'>Please Login</h2>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to Genius Car? <Link to='/register' className='text-primary pe-auto' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget password? <button className='btn btn-link text-primary pe-auto' onClick={resetPassword}>Reset Password</button></p>

                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;