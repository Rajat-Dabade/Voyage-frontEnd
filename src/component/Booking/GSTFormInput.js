import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const GSTFormInput = (props) => {

    const gstNumberHandler = (event) => {
        props.getNumberHandler(event.target.value);
    }

    return (<>
        <Grid container ml={2} mr={2} spacing={5}>
            <Grid xs={12} md={6} mt={5}>
                <Typography sx={{ fontSize: '11px' }}>Travelling for business purpose? Please enter Company GST details below.</Typography>

            </Grid>
            <Grid xs={12} md={6} mt={5}>
                <Typography sx={{ fontSize: '11px' }}><b>Note: </b> You will receive your ticket with below GST details</Typography>
            </Grid>
        </Grid>
        <Grid container ml={2} mr={2} spacing={5}>
            <Grid xs={12} md={4} mt={5}>
                <TextField sx={{ width: 200 }} id="GSTNumber" label="GST Number" variant="standard" value={props.gstNumber} onChange={gstNumberHandler}/>
            </Grid>
            <Grid xs={12} md={4} mt={5}>
                <TextField sx={{ width: 200 }} id="companyGSTEmail" label="Company GST Email" variant="standard" value={props.companyGstEmail} onChange={(event) => {props.getCompanyGstEmailHandler(event.target.value)}} />
            </Grid>
            <Grid xs={12} md={4} mt={5}>
                <TextField sx={{ width: 170 }} id="companyName" label="Company Name" variant="standard" value={props.companyName} onChange={(event) => {props.getCompanyNameHandler(event.target.value)}} />
            </Grid>
        </Grid>
    </>);
}

export default GSTFormInput;