import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import AppContext from '../components/AppContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from "@mui/styles";

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0072BB"
    }
  }
});

const SignUp = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const myContext = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      publicaddress: data.get('public'),
      password: data.get('password'),
    });

    console.log({
      publicaddress: myContext.publicaddress,
      password: myContext.password,
    });
  };

  const classes = useStyles();

  return (
    <section
      {...props}
      className={outerClasses}
    >
    <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ textAlign: 'center' }}>
              <span className="text-color-primary">Sign Up</span> for your
              <ul>Stock Certificate System</ul>
            </h1>
          </div>
        </div>
    </div>
    <div className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="350">
      <Box sx={{
          // border: 1,
          borderColor: 'primary.main',
          borderWidth: 3,
          bgcolor: 'hsl(204,7%,12%)' ,
          // bgcolor: '#151719',
          // opacity: 0.5,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          mx: "auto", width: 600,
          flexDirection: 'column',
      }}>
          <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    className={classes.root}
                    sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    className={classes.root}
                    sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="public"
                    label="Public Address"
                    name="public"
                    autoComplete="public"
                    className={classes.root}
                    onChange={(event) => myContext.setPublicaddress(event.target.value)}
                    sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    className={classes.root}
                    onChange={(event) => myContext.setPassword(event.target.value)}
                    sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/login"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2" style={{ color: 'darkgrey' }}>
                    Already have an account? <span style={{color: 'cornflowerblue'}}>Login</span>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
    </section>
  );
}

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;