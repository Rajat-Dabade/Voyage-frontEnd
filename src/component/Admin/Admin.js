import { Grid } from '@mui/material';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userManageHandler} from '../../store/admin/userManageHandler';
import ShowUnactivatedUser from './ShowUnactivatedUser';
import ShowAllUser from './ShowAllUser';
import {getAllUser} from '../../store/admin/userManageHandler';
import IncreaseCredit from './IncreaseCredit';

const Admin = () => {

    const dispatch = useDispatch();
    const unActiveUser = useSelector((state) => state.userManage.unActiveUser);

    useEffect(() => {
        dispatch(userManageHandler());
        dispatch(getAllUser());
    }, []);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <ShowUnactivatedUser />
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <ShowAllUser />
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <IncreaseCredit />
                </Grid>
            </Grid>    
        </>
        );
}

export default Admin;