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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import { Visibility, VisibilityOff } from "@mui/icons-material";



//   ********************************** Styled ***************************************************
const paperStyle = {
  padding: 20,
  width: 300,
  margin: "20px auto",
};
const btnstyle = { margin: "8px 0", background: "#1976d2", color: "#FFFFFF" };
const linkstyle = { color: "#1976d2" };

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};




//   ********************************** Main Function***************************************************
const Signupform = () => {



  //   ********************************** Show Hide Password**********************************************
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true)
    } else {
      setShowPassword(false)
    }
  }
  const handleConfirmPassword = () => {
    if (confirmPassword === true) {
      setConfirmPassword(false)
    } else {
      setConfirmPassword(true)
    }

  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //   ********************************** Form Validations Using Formik ***************************************************
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  console.log(values)


  //   ********************************** Return HTML Page ***************************************************
  return (

    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                type="text"
                autoComplete="off"
                name="firstName"
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
                fullWidth
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
                fullWidth
                name="password"
                type={showPassword ? 'text' : 'password'}
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
                fullWidth
                name="confirmPassword"
                type={confirmPassword ? 'text' : 'password'}
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
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Button className="input-button" type="submit" variant="contained" style={btnstyle} fullWidth>
            Sign Up
          </Button>
          <Typography style={{ paddingBottom: '30px' }}>
            Do you have an account ?
            <Link href="/loginform" style={linkstyle}>
              Sigin Page
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signupform;
