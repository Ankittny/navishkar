import React from 'react';
import styles from '../styles/css/login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Login: React.FC = () => {
    return (
        <div className="container-fluid">
           <div className='row'> 
                <div className={`${styles.image_design} ${styles.login_section} col-md-6`}>
                    <img src="/img/login.png" alt="no image"/>
                </div> 
                <div className={`${styles.login_section}  col-md-6 p-5`}>
                    <section className={styles.login_section}>
                        <div className={`${styles.login_google} mb-3`}>
                            <div className={styles.image_google}>
                                <img src="img/google.png" alt="google" />
                            </div> 
                            <div>
                                <span>Login With Google</span>
                            </div>
                        </div>
                        <div className={styles.login_facebook}>
                            <div className={`${styles.image_facebook} mb-3`}>
                                <img src="img/facebook.png" alt="facebook" />
                            </div> 
                            <div>
                                <span>Login With Facebook</span>
                            </div>
                        </div>


                       <div className={styles.or_section}>
                            <span>OR</span>
                        </div>
                        <div className='mb-3 form-group'>
                            <input type="email" className='form-control' placeholder='Enter Email' />
                        </div>
                        <div className='mb-3 form-group'>
                            <input type="password" className='form-control' placeholder='Password...' />
                        </div>
                        <input type="submit" className='btn btn-primary' />

                    </section>
                </div>
            </div>
        </div>
    );
};
export default Login;