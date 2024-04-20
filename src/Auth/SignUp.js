import React, { useEffect, useState } from 'react'
import { Card, TextField, CardHeader, Typography, CardContent, CardActionArea, Button, CardActions, Paper, LinearProgress, CircularProgress, useMediaQuery } from '@mui/material'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



const SignUp = () => {
    const [username, updateUserName] = useState('');
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState(null);
    const [CNFpassword, updateCNFPassword] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (e) {
            toast.error(e.message);

        }
    }





    const handelUserNameChange = (event) => {

        updateUserName(event.target.value);

    }



    const handelEmailChange = (event) => {

        updateEmail(event.target.value);



    }

    const handelCNFPasswordChange = (event) => {
        updateCNFPassword(event.target.value);

    }
    const handelPasswordChange = (event) => {
        updatePassword(event.target.value);

    }




    const handelSignUp = async () => {
        setLoading(true);

        try {
            if (username === '') {
                throw new Error('Please Enter UserName');

            }
            if (email === '') {
                throw new Error('Please Enter Email');

            }
            if (!email.includes('.com') || !email.includes('@')) {
                throw new Error('Please Enter Valid Email');

            }


            if (password !== CNFpassword) {
                throw new Error('Password and Conform Password Should be Same');

            }



            await createUserWithEmailAndPassword(auth, email, password);
            if (auth.currentUser.providerData[0].providerId === 'password') {
                await updateProfile(auth.currentUser, {
                    displayName: username

                });
                navigate('/');

            }



        } catch (e) {

            toast.error(e.message);

        } finally {
            setLoading(false);
        }

    }


    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'


        }} >





            <Paper elevation={5} className='px-5 w-[370px] py-3 mx-5'  >



                <CardContent >
                    <div className='font-semibold text-xl'>
                        Sign Up

                    </div>

                    <br />
                    <TextField fullWidth={true} onChange={handelUserNameChange} label={'UserName'} inputMode='text' value={username} />
                    <br />
                    <br />
                    <TextField fullWidth={true} onChange={handelEmailChange} label={'Email'} inputMode='email' value={email} />
                    <br />
                    <br />

                    <TextField fullWidth={true} onChange={handelPasswordChange} label={'Password'} type='password' value={password} />
                    <br />
                    <br />
                    <TextField fullWidth={true} onChange={handelCNFPasswordChange} label={'Conform Password'} type='password' value={CNFpassword} />


                </CardContent>


                <CardActions  >
                    <Button variant='outlined' disabled={loading} >
                        Cancel
                    </Button>
                    <Button variant='contained' onClick={handelSignUp} disabled={loading} >
                        {
                            loading ? <CircularProgress size={23} value={true} variant="indeterminate" sx={{
                                color: 'black',

                            }} /> : 'Sign Up'
                        }
                    </Button>
                </CardActions>



                <CardActions  >
                    <Button onClick={handleGoogleSignIn} fullWidth={true} startIcon={<FcGoogle />} variant='outlined' disabled={loading} >
                        Google
                    </Button>

                </CardActions>
                <CardActions>
                    <Button variant='contained' disabled={loading} fullWidth={true} onClick={() => navigate('/')} >
                        Log In
                    </Button>
                </CardActions>



            </Paper>

        </div>
    )
}

export default SignUp