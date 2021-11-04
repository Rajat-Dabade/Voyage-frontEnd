import {authActions} from './auth-slice';

export const authDataHandler = (data) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response  = await fetch('http://localhost:3000/api/auth/signin', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            })

            if(!response.ok) {
                throw new Error("Failed to login");
            }
            const responseData = await response.json();
            return responseData;
        }

        try {
            const responseData = await sendRequest();
            console.log("User data : " + JSON.stringify(responseData));
            if(responseData.status === 0) {
                const errorData =  {
                    error: true,
                    message: responseData.message
                }
                dispatch(authActions.setError(errorData));
            } else {
                console.log(responseData);
                localStorage.setItem('accessToken', responseData.accessToken);
                localStorage.setItem('id', responseData.id);
                localStorage.setItem('mobileNumber', responseData.mobileNumber);
                localStorage.setItem('username', responseData.username);
                if(responseData.isAdmin) {
                    console.log("This is Admin panel");
                    sessionStorage.setItem('isAdmin', true);
                }
                dispatch(authActions.setOpenDailogBox(false));
                dispatch(authActions.setIsAuthenticated(true));
                dispatch(authActions.setMobileNumber(''));
                dispatch(authActions.setPassword(''));
            }
            dispatch(authActions.setIsLogin(false));
        } catch(error) {
            alert("Error occur while loggin in");
            dispatch(authActions.setIsLogin(false));
        }
    }
}