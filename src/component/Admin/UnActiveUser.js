import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {activateUserHandler} from '../../store/admin/userManageHandler';

const UnActiveUser = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const activateUserBtnHandler = (event) => {
        const data = JSON.parse(event.target.value);
        dispatch(activateUserHandler(data, history));
    }


    return (
        <>
            <Paper elevation={3} sx={{margin: '20px 20px', bgcolor: props.color, color: 'black'}}>
                <Grid container spacing={1} sx={{ padding: '10px 15px'}}>
                    <Grid item xs={12} md={8}> 
                        ID: <b>{props.user.id}</b><br></br><br></br>
                        Name : <b>{props.user.firstName}{" "}{props.user.surname}</b><br></br><br></br>
                        Mobile Number : <b>{props.user.mobileNumber}</b><br></br><br></br>
                        Pan CardNumber: <b>{props.user.panCardNumber}</b><br></br><br></br>
                        Adhar CardNumber: <b>{props.user.adharCardNumber}</b><br></br><br></br>
                        Credit: <b>{props.user.credits}</b>
                    </Grid>
                    {props.active === true &&
                    <Grid item xs={12} md={4}>
                        <Button variant="contained" color="success" value={JSON.stringify({id: props.user.id})} onClick={activateUserBtnHandler}>Activate User</Button>
                    </Grid>
                    }
                </Grid>
            </Paper>
      </>
    )
}

export default UnActiveUser;