import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector} from 'react-redux';

const TravellerInputForm = (props) => {

    const [age, setAge] = React.useState('');
    const fareQuoteOneWay = useSelector((state) => state.fareQuote.fareQuoteOneWay);

    const handleChange = (index, event) => {
        setAge(event.target.value);
        props.inputFieldChangeHandler(index, event);
    };


    return (
        <div key={props.index}>
            <Typography variant="body1" component="div" sx={{ marginLeft: '15px', fontWeight: 'bold', marginTop: '14px' }}>{props.passengerType}: </Typography>
            <RadioGroup sx={{ marginLeft: '15px', marginTop: '10px' }} row aria-label="designation" name="designation" onChange={(event) => props.inputFieldChangeHandler(props.index, event)}>
                {props.passengerType === "Adult"? 
                    <><FormControlLabel value="Mr" control={<Radio />} label="Mr" />
                    <FormControlLabel value="Mrs" control={<Radio />} label="Mrs" /></> :  
                    <><FormControlLabel value="Miss" control={<Radio />} label="Miss" />
                    <FormControlLabel value="Mstr" control={<Radio />} label="Mstr" /></> }
            </RadioGroup>


            <FormControl sx={{ width: '100px', marginLeft: '15px', marginTop: '10px' }}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                    labelId="gender"
                    id="gender"
                    value={age}
                    name="gender"
                    label="Gender"
                    onChange={(event) => handleChange(props.index, event)}
                >
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Female</MenuItem>
                </Select>
            </FormControl>


            <Grid container ml={2} mr={2} spacing={5}>
                <Grid xs={12} md={4} mt={5}>
                    <TextField id={`firstName` + props.index} name="firstName" label="First Name" variant="standard" value={props.traveller.firstName} onChange={(event) => props.inputFieldChangeHandler(props.index, event)}/>
                </Grid>
                <Grid xs={12} md={4} mt={5}>
                    <TextField id={`lastName` + props.index} name="lastName" label="Last Name" variant="standard" value={props.traveller.lastName} onChange={(event) => props.inputFieldChangeHandler(props.index, event)}/>
                </Grid>
                <Grid xs={12} md={4} mt={5}>
                    <TextField InputLabelProps={{ shrink: true }} name="dob" type="date" id="DOB" value={props.traveller.dob} label="Date of Birth" variant="standard" onChange={(event) => props.inputFieldChangeHandler(props.index, event)}/>
                </Grid>
                {fareQuoteOneWay.Response.Results.IsPassportRequiredAtTicket && 
                <>
                    <Grid xs={12} md={4} mt={5}>
                        <TextField id={`passportNo` + props.index} name="passportNo" label="Passport Number" variant="standard" value={props.traveller.passportNo} onChange={(event) => props.inputFieldChangeHandler(props.index, event)}/>
                    </Grid>
                    <Grid xs={12} md={4} mt={5}>
                    <TextField InputLabelProps={{ shrink: true }} name="passportExpiry" type="date" id="passportExpiry" value={props.traveller.passportExpiry} label="Passport Expiry" variant="standard" onChange={(event) => props.inputFieldChangeHandler(props.index, event)}/>
                    </Grid>
                </>}
            </Grid>
        </div>
    );
}

export default TravellerInputForm;