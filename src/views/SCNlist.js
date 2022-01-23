import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import AppContext from '../components/AppContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

const SCNlist = ({
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

      myContext.setLoginpressed(true);
      // eslint-disable-next-line no-console
      console.log({
      publicaddress: data.get('public'),
      password: data.get('password'),
      });

      console.log({
        publicaddress: myContext.loginpublicaddress,
        password: myContext.loginpassword,
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
              <span className="text-color-primary">Create Company</span> for your
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
                  alignItems: 'center'
              }}
              >
              <Typography component="h1" variant="h5" style={{color: 'cornflowerblue'}}>
                  Create Company
              </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="company name"
                      label="Company Name"
                      name="company name"
                      autoComplete="company name"
                      autoFocus
                      flex
                      className={classes.root}
                      sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                      />
                      <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="Founding Date"
                      label="Founding Date"
                      type="Founding Date"
                      id="Founding Date"
                      autoComplete="Founding Date"
                      className={classes.root}
                      sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                      />
                      <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="votes"
                      label="Min of Votes for Proposal"
                      type="votes"
                      id="votes"
                      autoComplete="votes"
                      className={classes.root}
                      sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                      />
                      <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="member1"
                      label="Member 1 Public Address"
                      type="member1"
                      id="member1"
                      autoComplete="member1"
                      className={classes.root}
                      sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                      />
                      <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="member2"
                      label="Member 2 Public Address"
                      type="member2"
                      id="member2"
                      autoComplete="member2"
                      className={classes.root}
                      sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                      />
                      <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="member3"
                      label="Member 3 Public Address"
                      type="member3"
                      id="member3"
                      autoComplete="member3"
                      className={classes.root}
                      sx={{ label: { color: '#ffffffdb' }, input: { color: '#ffffffdb' }}}
                      />
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mx: 'auto', fontWeight: 590, alignItems: 'center'}}
                      >
                      Add More Members
                      </Button>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mx: 'auto', fontWeight: 590, alignItems: 'center'}}
                      href="/operationboard"
                      >
                      Create Company
                      </Button>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      <Grid container>
                          <Grid item>
                              <Link href="/sign-up" variant="body2" style={{ color: 'darkgrey' }}>
                                  <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
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

SCNlist.propTypes = propTypes;
SCNlist.defaultProps = defaultProps;

export default SCNlist;
