import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Checkbox,
  FormHelperText,
  FormControlLabel,
  CircularProgress
} from '@mui/material';
import useRefMounted from './hooks/useRefMounted';
import { useTranslation } from 'react-i18next';



  //   ********************************** Styled ***************************************************
const paperStyle = {
  padding: 20,
  width: 300,
  margin: "20px auto",
};
// const btnstyle = { margin: "8px 0", background: "#1976d2", color: "#FFFFFF" };
const linkstyle = { color: "#1976d2" };








  //   ********************************** Main Function***************************************************

const Registrationform = () => {
  
  const isMountedRef = useRefMounted();
  const { t } = useTranslation();
  
  //   ********************************** Show Hide Password***************************************************
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    if(showPassword === false){
      setShowPassword(true)
    }else{
      setShowPassword(false)
    }
  }
 const handleConfirmPassword = () => {
  if(confirmPassword === true){
    setConfirmPassword(false)
  }else{
    setConfirmPassword(true)
  }

 }
 const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

  //   ********************************** Return HTML Page ***************************************************
  return (

    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
          <h2>Sign Up</h2>
        </Grid>   
         <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          terms: false,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(t('The email provided should be a valid email address'))
            .max(255)
            .required(t('The email field is required')),
          name: Yup.string().max(255).required(t('The name field is required')),
          password: Yup.string()
            .min(8)
            .max(255)
            .required(t('The password field is required')),
          terms: Yup.boolean().oneOf(
            [true],
            t('You must agree to our terms and conditions')
          )
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await register(values.email, values.name, values.password);
  
            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
              label="First Name"
              placeholder="Enter First Name"
              type="text"
              autoComplete="off"
              name="name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? (
              
              <Typography color="error" variant="caption">{errors.firstName}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
              label="Last Name"
              placeholder="Enter Last Name"
              type="text"
              autoComplete="off"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName ? (
              <Typography color="error" variant="caption">{errors.lastName}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
              label="Email"
              placeholder="Enter Email"
              type="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <Typography color="error" variant="caption">{errors.email}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Input 
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
            name="password" 
            type={showPassword ? 'text': 'password' }
            placeholder="Enter Password"
            autoComplete="on"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur} 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            />
            {errors.password && touched.password ? (
              <Typography color="error" variant="caption">{errors.password}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Input 
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
            name="confirmPassword" 
            type={confirmPassword ? 'text': 'password' }
            placeholder="Confirm Password"
            autoComplete="on"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur} 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleConfirmPassword}
                >
                  {confirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Typography color="error" variant="caption">{errors.confirmPassword}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
          <FormControlLabel
          control={
            <Checkbox
              checked={values.terms}
              name="terms"
              color="primary"
              onChange={handleChange}
            />
          }
          label={
            <>
              <Typography variant="body2">
                {t('I accept the')}{' '}
                <Link component="a" href="#">
                  {t('terms and conditions')}
                </Link>
                .
              </Typography>
            </>
          }
        />
        {Boolean(touched.terms && errors.terms) && (
          <FormHelperText error>{errors.terms}</FormHelperText>
        )}
          </Grid>
        </Grid>
        <Button color="primary"
        startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
        disabled={isSubmitting}
        type="submit"
        fullWidth
        size="large"
        variant="contained">
          Sign Up
        </Button>
        <Typography style={{paddingBottom:'30px'}}>
          Do you have an account ?
          <Link href="/loginform" style={linkstyle}>
          {t('Create your account')}
          </Link>
        </Typography>
        
        </form>
      )}
    </Formik>
      </Paper>
    </Grid>
  );
};

export default Registrationform
