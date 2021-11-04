import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid, Paper } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/admin/userManageHandler";
import { userManageActions } from "../../store/admin/userManageSlice";
import {updateCredit} from '../../store/admin/userManageHandler';

const IncreaseCredit = () => {
  const user = useSelector((state) => state.userManage.user);
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [btnClicked, setBtnClicked] = useState(false);
  const [newCredit, setNewCredit] = useState(0);
  const [isUpdateCredit, setIsUpdateCredit] = useState(false);

  const userIdHandler = (event) => {
    setId(event.target.value);
  };

  const fetchUserHandler = () => {
    setNewCredit(0);
    userManageActions.setUser({});
    if (id === 0) {
      alert("ID cant be 0");
      return;
    }
    setBtnClicked(true);
    dispatch(getUserById(id, setBtnClicked));
  };

  const calculateNewCreditHandler = (event) => {
      setNewCredit(+event.target.value + user.credits);
  }

  const updateCreditHandler = (event) => {
    setIsUpdateCredit(true);
    const data = {
        credit: newCredit,
        id: parseInt(event.target.value)
    }
    console.log(data);
    dispatch(updateCredit(data, setIsUpdateCredit));
  }

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          margin: "50px 10px",
          bgcolor: "#F6F6F6",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Update credit section</h1>
        <hr style={{ maxWidth: "50%" }}></hr>
        <Grid container spacing={2} sx={{ margin: "20px" }}>
          <Grid item xs={12} md={12}>
            <TextField
              id="user-id"
              label="User ID"
              variant="outlined"
              type="number"
              inputProps={{ min: 0, max: 10 }}
              InputLabelProps={{ shrink: true }}
              value={id}
              sx={{ width: "200px" }}
              onChange={userIdHandler}
            />
            {btnClicked ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                size="large"
                sx={{ maxWidth: "200px", margin: "5px 12px" }}
              >
                Fetching
              </LoadingButton>
            ) : (
              <Button
                variant="contained"
                size="large"
                sx={{ margin: "5px 12px" }}
                onClick={fetchUserHandler}
              >
                Fetch User
              </Button>
            )}
          </Grid>
          {JSON.stringify(user) !== JSON.stringify({}) && (
              
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: '30px' }}
            >
            <Paper elevation={3} sx={{padding: '20px', borderRadius: '5%'}}>
              <Grid item xs={12} sx={{textAlign: 'center'}}>
                ID: <b>{user.id}</b><br></br><br></br>
                Name: <b>{user.firstName}{" "}{user.surname}</b><br></br><br></br>
                Mobile Number: <b>{user.mobileNumber}</b><br></br><br></br>
                <TextField variant="outlined" label="Credit" value={user.credits} disabled /> <br></br> + <br></br>
                <TextField variant="outlined" label="To be increase" type="number" onChange={calculateNewCreditHandler}/><br></br> = <br></br>
                <TextField variant="outlined" label="New Credit" type="number" disabled value={newCredit}/><br></br><br></br>
                {isUpdateCredit ? 
                <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    size="large"
                >
                    Updating
                </LoadingButton> : 
                    <Button variant="contained" value={user.id} onClick={updateCreditHandler}>Update credit</Button>}
              </Grid>
            </Paper>
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default IncreaseCredit;
