import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SignupImage from '../assets/images/signupposter.png'
import Logo from '../assets/images/logo.png'
import { InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
    },
    image: {
        backgroundImage: `url(${SignupImage})`,
        backgroundSize: 'cover',
        width: '100%'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function LoginPage() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} md={8} component={Paper}>
                <div className={classes.paper}>
                    <div><img src={Logo} alt='logo' width='250px' height='40px' style={{ marginBottom: '30%' }} /></div>
                    <p style={{ textAlign: 'center', width: '100%', margin: '0', fontSize: '16px' }}>Sign up to Dataplor</p>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            style={{ marginLeft: '20%', width: '60%' }}
                            required
                            id="firstName"
                            name="firstName"
                            placeholder="First Name *"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            style={{ marginLeft: '20%', width: '60%' }}
                            required
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name *"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            style={{ marginLeft: '20%', width: '60%' }}
                            required
                            id="email"
                            name="email"
                            placeholder="Email Address *"
                        />
                        <InputLabel id="countryLabel" style={{ marginLeft: '20%', width: '60%' }}>Country</InputLabel>
                        <Select
                            labelId="countryLabel"
                            id="country"
                            label="Country"
                            style={{ marginLeft: '20%', width: '60%' }}
                        >
                            <MenuItem value='india'>India</MenuItem>
                            <MenuItem value='US'>US</MenuItem>
                        </Select>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            style={{ marginLeft: '20%', width: '60%' }}
                            id="Phone"
                            name="Phone"
                            placeholder="Phone *"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            style={{ marginLeft: '20%', width: '60%' }}
                            color="primary"
                            className={classes.submit}
                        >
                            SIGN UP
                        </Button>
                    </form>
                    <Link to='/login' style={{ width: '100%', textDecoration: 'none' }}>
                        <Button
                            type="button"
                            style={{ marginLeft: '20%', width: '60%', backgroundColor: 'black', color: 'white' }}
                            variant="contained"
                            className={classes.submit}
                        >
                            BACK TO LOGIN
                        </Button>
                    </Link>
                    <div style={{ color: '#b2b2b2' }}>
                        <p>Terms and conditions &nbsp; <i className='fa fa-circle' style={{ fontSize: '8px' }}></i> &nbsp; Privacy Policy</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={false} md={4} className={classes.image} >
            </Grid>

        </Grid>
    );
}