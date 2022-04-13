import React from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword)
    }

    return (
        <div className='container border rounded p-4 shadow-lg mt-5'>
            <div className='register-form '>
                <h2 className='text-center text-primary'>Please register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="name" placeholder='Your Name' required />

                    <input type="email" name="email" id="email" placeholder='Your email' required />

                    <input type="password" name="password" id="password" placeholder='Password' required />

                    <input type="password" name="confirmPassword" id="confirm-password" placeholder='confirm your password' required />

                    <input type="submit" value="Register" />
                </form>
                <p>ALready have an account? <Link to='/login' onClick={navigateLogin} className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;