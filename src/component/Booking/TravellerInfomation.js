import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import {useSelector, useDispatch} from 'react-redux';
import {passengerActions} from '../../store/passengerSlice';
import {reversingSeat} from '../../store/passengerHandler';

import TravellerInputForm from './TravellerInputForm';
import GSTFormInput from './GSTFormInput';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const TravellerInfomation = (props) => {


    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(true);

    const travellers = useSelector(state => state.passenger.travellers);
    const gstNumber = useSelector(state => state.passenger.gstNumber);
    const companyGstEmail = useSelector(state => state.passenger.companyGstEmail);
    const companyName = useSelector(state => state.passenger.companyName);
    const passengerType = useSelector(state => state.passenger.passengerType);
    const isProceedToBook = useSelector(state => state.passenger.isProceedToBook);
    const phoneNumber = useSelector(state => state.passenger.phoneNumber);
    const email = useSelector(state => state.passenger.email);
    const address = useSelector(state => state.passenger.address);
    const fareQuoteOneWay = useSelector(state => state.fareQuote.fareQuoteOneWay);
    const fareQuoteSecondWay = useSelector(state => state.fareQuote.fareQuoteSecondWay);
    const isRoundTrip = useSelector(state => state.flight.isRoundTrip);
    const isGSTCheckedFromHandler = useSelector(state => state.passenger.isGSTChecked);
    const publishFare = useSelector(state => state.fare.publishFare);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [isGSTChecked, setIsGSTChecked] = useState(false);

    const isGSTCheckedHandler = () => {
        setIsGSTChecked(!isGSTChecked);
        dispatch(passengerActions.setIsGSTChecked(!isGSTChecked));
    }

    const inputFieldChangeHandler = (index, event) => {
        dispatch(passengerActions.changeTravellerInfo({
            index: index,
            name: event.target.name,
            value: event.target.value
        }));
    }

    const getNumberHandler = (value) => {
        if (isGSTChecked) {
            dispatch(passengerActions.setGstNumber(value));
        }
    }

    const getCompanyGstEmailHandler = (value) => {
        if (isGSTChecked) {
            dispatch(passengerActions.setCompanyGstEmail(value));
        }
    }

    const getCompanyNameHandler = (value) => {
        if (isGSTChecked) {
            dispatch(passengerActions.setCompanyName(value));
        }
    }

    const phoneNumberHandler = (event) => {
        dispatch(passengerActions.setPhoneNumber(event.target.value));
    }

    const emailHandler = (event) => {
        dispatch(passengerActions.setEmail(event.target.value));
    }

    const addressHandler = (event) => {
        dispatch(passengerActions.setAddress(event.target.value));
    }

    const proceedToBook = (event) => {
        dispatch(passengerActions.setIsProceedToBook(true));

        let isOk = 0;
        travellers.map(element => {
            if(element.designation === '' || element.firstName === '' || element.lastName === '' || element.gender === '' || element.dob === '') {
                alert("Please provide the infomation bellow");
                isOk = 1;
            }
        })

        if(phoneNumber === '' || email === '' || address === '') {
            alert("Please provide the infomation bellow");
            isOk = 1;
        }

        if(isOk === 1) {
            dispatch(passengerActions.setIsProceedToBook(false));
            return;
        }

        const data = {
            travellers,
            gstNumber,
            companyGstEmail,
            companyName,
            passengerType,
            isProceedToBook,
            phoneNumber,
            email,
            address,
            fareQuoteOneWay,
            fareQuoteSecondWay,
            isRoundTrip,
            isGSTChecked: isGSTCheckedFromHandler,
            publishFare
        }
        dispatch(reversingSeat(data));
    }

    return (
        <>

            <Paper variant="elevation" elevation={2} sx={{borderRadius: '70px', margin: '50px 100px'}}>
                <Card sx={{ borderRadius: '20px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
                                03
                            </Avatar>
                        }
                        action={
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more">
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title="Traveller Information"
                        titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {travellers.map((traveller, index) => <TravellerInputForm passengerType={passengerType[index]} key={index} traveller={traveller} index={index} inputFieldChangeHandler={inputFieldChangeHandler} />)}
                            <br></br>
                            <Typography variant="body1" sx={{ marginLeft: '15px', marginTop: '25px', fontWeight: 'bold' }} component="div">Contact Details:</Typography>
                            <Typography sx={{ marginLeft: '15px', fontSize: '14px', marginTop: '10px', color: '#898989' }} component="div">*Ticket will be send to below mobile number and Email Address</Typography>
                            <Grid container ml={2} mr={2} mt={1} spacing={4}>
                                <Grid xs={12} md={4} lg={4} xl={4}>
                                    <TextField id="phone" label="Phone" value={phoneNumber} variant="standard" sx={{ width: 260 }} onChange={phoneNumberHandler}/>
                                </Grid>
                                <Grid xs={12} md={4} lg={4} xl={4}>
                                    <TextField id="email" value={email} onChange={emailHandler} label="E-mail" variant="standard" sx={{ width: 260 }} />
                                </Grid>
                                <Grid xs={12} md={4} lg={4} xl={4}>
                                    <TextField id="Address" value={address} onChange={addressHandler} label="Address" variant="standard" sx={{ width: 260 }} />
                                </Grid>
                            </Grid>
                            <FormControlLabel sx={{ marginLeft: '7px', marginTop: '15px' }}
                                label="Add GST details"
                                control={
                                    <Checkbox onChange={isGSTCheckedHandler} />
                                }
                            />
                            {isGSTChecked ?
                                <GSTFormInput
                                    gstNumber={gstNumber}
                                    companyGstEmail={companyGstEmail}
                                    companyName={companyName}
                                    getNumberHandler={getNumberHandler}
                                    getCompanyGstEmailHandler={getCompanyGstEmailHandler}
                                    getCompanyNameHandler={getCompanyNameHandler} />
                                : null}
                            {isProceedToBook ? <LoadingButton
                                                    loading
                                                    loadingPosition="start"
                                                    startIcon={<SaveIcon />}
                                                    variant="outlined"
                                                    sx={{ backgroundColor: '#4798FF', marginTop: '15px', marginBottom: '20px', marginRight: '40px', padding: '10px 50px', float: 'right' }}
                                                    >
                                                    Reserving your seat
                                                    </LoadingButton> :
                                <Button variant="contained" size="large" sx={{ backgroundColor: '#4798FF', marginTop: '15px', marginBottom: '20px', marginRight: '40px', padding: '10px 50px', float: 'right' }} onClick={proceedToBook}>Proceed to Book</Button>
                            }
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default TravellerInfomation;