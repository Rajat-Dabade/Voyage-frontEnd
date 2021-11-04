import {userManageActions} from './userManageSlice';

export const userManageHandler = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:3000/api/auth/admin/getUnactivatedUser",
        {
          headers: {
            "x-access-token": localStorage.getItem("accessToken"),
          },
        }
      );

      const responseData = await response.json();
        if(responseData.status === 0) {
            alert(responseData.message);
            return;
        }

        return responseData;
    };

    const responseData = await sendRequest();

    console.log(responseData.users);
    if(responseData !== undefined) {
        dispatch(userManageActions.setUnActiveUser(responseData.users));
    }
    
  };
};


export const activateUserHandler = (data, history) => {
  return async (dispatch) => {
    const sendRequest = async (id) => {
      const response = await fetch(`http://localhost:3000/api/auth/admin/activateUser/${id}`, {
        method: 'PUT',
        headers: {
          'x-access-token': localStorage.getItem('accessToken')
        }
      });

      const responseData = await response.json();

      if(responseData.status === 0) {
        alert(responseData.message);
        return;
      }
      return responseData;
    }

    const responseData = await sendRequest(data.id);
    if(responseData !== undefined) {
      alert("User activated successfully");
      dispatch(userManageActions.setUnActiveUser([]));
      history.replace('/adminpanel');
    } else {
      history.replace("/");
    }
  }
}


export const getAllUser = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://localhost:3000/api/admin/getAllActiveUser', {
        headers: {
          'x-access-token' : localStorage.getItem('accessToken')
        }
      });

      if(!response.ok) {
        alert("Error from database side, please try after some time");
        return;
      }

      const responseData = await response.json();

      if(responseData.status === 0) {
        alert(responseData.message);
        return;
      }

      return responseData;
    }

    const responseData = await sendRequest();
    if(responseData !== undefined) {
      dispatch(userManageActions.setAllUser(responseData));
    }
  }
}

export const getUserById = (id, setBtnClicked) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response  = await fetch(`http://localhost:3000/api/admin/getUserById/${id}`,
      {
        headers: {
          'x-access-token' : localStorage.getItem('accessToken')
        }
      });
      if(!response.ok) {
        alert("Enable to fetch the record, Error from the database side");
        return;
      }
      const responseData = await response.json();
      if(responseData.status === 0) {
        alert(responseData.message);
        return;
      }
      return responseData;
    }

    const responseData = await sendRequest();

    if(responseData !== undefined) {
      console.log("User is here" + JSON.stringify(responseData.user));
      dispatch(userManageActions.setUser(responseData.user));
    }
    setBtnClicked(false);
  }
}

export const updateCredit = (data, setIsUpdateCredit) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('http://localhost:3000/api/admin/updateCredit', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type' : 'application/json',
          'x-access-token': localStorage.getItem('accessToken')
        }
      });

      if(!response.ok) {
        alert("Error from server side, please check after some time");
        setIsUpdateCredit(false);
        return;
      }

      const responseData = await response.json();
      return responseData;
    }

    const responseData = await sendRequest();

    if(responseData !== undefined) {
      alert(responseData.message);
      setIsUpdateCredit(false);
      return;
    }
  }
}