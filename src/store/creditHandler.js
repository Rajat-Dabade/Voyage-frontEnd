import {creditActions} from './creditSlice';

export const creditHandler = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/credit',
        {
            headers: {
                'x-access-token': localStorage.getItem('accessToken')
            }
        }).then(res => res.json())
        .then(data => {
            if(data.status === 0) {
                alert(data.message);
                return;
            }
            dispatch(creditActions.setCredit(data.credit));
        })
    }
}

export const updateCredit = (data) => {
    return dispatch => {
        fetch('http://localhost:3000/api/credit', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('accessToken')
            }
        }).then(res => res.json())
        .then(data => {
            if(data.status === 0) {
                alert(data.message);
                return;
            }
            dispatch(creditActions.setCredit(data.credits));
        })
    }
}