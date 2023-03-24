import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSingIng, startLoginWithEmailPassword } from "../../store/auth/thunks";


const formData = {
  email: "",
  password: "",
}

export const LoginPage = () => {
  
  const {status, errorMessage} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm(formData);

  const isAuth = useMemo(()=> status === 'checking', [status])

  const onSubmit = (event) =>{
    event.preventDefault()
    dispatch( startLoginWithEmailPassword({email, password}))
    // console.log({email, password})
  }
  
  const onGoogleSignIn = () =>{
    // console.log('onGoogleSignIn')
    dispatch( checkingAuthentication() )
    dispatch( startGoogleSingIng() )
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn _fadeIn anime__faster"
'>
        <Grid container sx={{ gap: 3 }}>
          <Grid item xs={12}>
            <TextField
              label="email"
              type="email"
              placeholder="google@gmail.com"
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="password"
              type="password"
              placeholder="12345"
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type='submit' variant="contained" fullWidth disabled={isAuth}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth disabled={isAuth}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              color="primary.main"
              to="/auth/register"
            >
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
