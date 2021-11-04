import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import UnActiveUser from './UnActiveUser';


const ShowUnactivatedUser = (props) => {
  const unActiveUser = useSelector((state) => state.userManage.unActiveUser);

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          margin: "50px 10px",
          bgcolor: '#F6F6F6'
        }}
      >
        <h1 style={{ textAlign: "center" }}>Unactivated Users</h1>
        <hr style={{maxWidth: '450px'}}></hr>
        {unActiveUser.length === 0 ? <><h2 style={{textAlign: 'center'}}>No new user</h2></> :  unActiveUser.map((user) => {
            return <UnActiveUser key={user.id} user={user} active={true}/>
        })}
      </Paper>
    </>
  );
};

export default ShowUnactivatedUser;
