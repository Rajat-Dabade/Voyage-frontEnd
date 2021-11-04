import { autocompleteClasses, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import UnActiveUser from './UnActiveUser';

const ShowAllUser = () => {
  const allUser = useSelector((state) => state.userManage.allUser);

  return (
    <Paper
      variant="outlined"
      sx={{
        margin: "50px 10px",
        bgcolor: "#F6F6F6",
      }}
    >
      <h1 style={{ textAlign: "center" }}>All User Users</h1>
      <hr style={{ maxWidth: "450px" }}></hr>
      <div style={{overflow: 'auto', maxHeight: '400px'}}>
        {allUser.length === 0 ? <><h2 style={{textAlign: 'center'}}>No new user</h2></> :  allUser.map((user) => {
                return <UnActiveUser key={user.id} user={user} active={false} color="#E5E5E5"/>
            })}
    </div>
    </Paper>
  );
};

export default ShowAllUser;
