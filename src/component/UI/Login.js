import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/auth-slice";
import { Button, TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import { authDataHandler } from "../../store/authHandler";

import "./Login.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  // isAuthenticated: false,
  // modalBox: false,
  // mobileNumber: "",
  // password: "",
  // isLogin: false,
  // isError: false,

  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.isError);
  const mobileNumber = useSelector((state) => state.auth.mobileNumber);
  const password = useSelector((state) => state.auth.password);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const handleClose = () => {
    dispatch(authActions.setMobileNumber(""));
    dispatch(authActions.setPassword(""));
    dispatch(
      authActions.setError({
        error: false,
        message: "",
      })
    );
    dispatch(authActions.setOpenDailogBox(false));
  };

  const mobileNumberHandler = (event) => {
    dispatch(authActions.setMobileNumber(event.target.value));
  };

  const passwordChangeHandler = (event) => {
    dispatch(authActions.setPassword(event.target.value));
  };

  const loginHandler = () => {
    dispatch(authActions.setIsLogin(true));
    if (mobileNumber === "" && password === "") {
      alert("Please enter the details before submission");
      return;
    }
    const data = {
      mobileNumber,
      password,
    };
    dispatch(authDataHandler(data));
  };

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          {isError && (
            <Typography
              id="modal-modal-title"
              variant="p"
              component="div"
              sx={{ color: "red", marginTop: "10px", marginBottom: "10px" }}
            >
              {errorMessage}
            </Typography>
          )}
          <TextField
            id="mobileNumber"
            label="Mobile Number"
            variant="standard"
            sx={{ width: "300px" }}
            value={mobileNumber}
            onChange={mobileNumberHandler}
          />
          <br></br>
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="standard"
            sx={{ width: "300px" }}
            value={password}
            onChange={passwordChangeHandler}
          />
          <br></br>
          <div className="login-form-btn">
            {isLogin ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
              >
                logging..
              </LoadingButton>
            ) : (
              <Button variant="contained" onClick={loginHandler}>
                Login
              </Button>
            )}
            <Button variant="contained" color="error" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
