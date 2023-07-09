import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';
import LoginImage from '../assets/images/NewLogin.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        backgroundImage: `url(${LoginImage})`,
        backgroundSize: 'cover',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


async function loginUser(credentials) {
    try {
        const response = await axios.post(
            'https://dataplor.onrender.com/processUserInfo/login',
            credentials
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurs during the request
        console.error('Error:', error.message);
        throw error; // Rethrow the error to be handled by the caller
    }
}


export default function LoginPage() {
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/profile";
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }

    return (
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} md={5} component={Paper}>
                <div className={classes.paper}>
                    <div><img src={LoginImage} alt='logo' width='320px' height='100px' style={{ marginBottom: '30%' }} /></div>
                    <p style={{ textAlign: 'left', width: '100%', margin: '0', fontSize: '16px' }}>Sign in</p>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            placeholder="Email Address *"
                            onChange={e => setUserName(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            placeholder="Password *"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            style={{ float: 'left' }}
                        >
                            Login &nbsp;<i className='fa fa-long-arrow-right'></i>
                        </Button>
                        <div style={{ width: '100%', textAlign: 'right', marginTop: '8%' }}><Link to='/forgot-password' style={{ textDecoration: 'none', color: 'black', pointer: 'cursor' }}>Forgot your password?</Link></div>
                    </form>
                    <Link to='/signup' style={{ width: '100%', textDecoration: 'none' }}>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            style={{ backgroundColor: 'black', color: 'white' }}
                        >
                            CREATE NEW ACCOUNT
                        </Button>
                    </Link>
                    <div style={{ color: '#b2b2b2' }}>
                        <p>Terms and conditions &nbsp; <i className='fa fa-circle' style={{ fontSize: '8px' }}></i> &nbsp; Privacy Policy</p>
                    </div>
                </div>
            </Grid>
            <Grid item sm={false} md={7} className={classes.image} >
            </Grid>

        </Grid>
    );
}