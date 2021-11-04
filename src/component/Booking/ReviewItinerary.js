import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import Baggage from './Baggage';


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



const ReviewItinerary = (props) => {

    const fareQuoteOneWay = useSelector((state) => state.fareQuote.fareQuoteOneWay);
    const fareQuoteSecondWay = useSelector((state) => state.fareQuote.fareQuoteSecondWay);

    const isRoundTrip = useSelector((state) => state.searchResult.isRoundTrip);

    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>

            <Paper variant="elevation" elevation={0} sx={{borderRadius: '70px', margin: '50px 100px' }}>
                <Card sx={{ borderRadius: '20px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blue[400] }} aria-label="recipe">
                                01
                                            </Avatar>
                        }
                        action={
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        }
                        title="Review Itinerary"
                        titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography variant="h6" sx={{textAlign: 'center'}}>OneWay flight</Typography>
                        <Paper variant="elevation" elevation={6} sx={{marginBottom: '20px', marginTop: '20px', paddingBottom: '20px'}}>
                            <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                                <Grid item={true} xs={12} md={5}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Airline.AirlineName}</Typography>
                                    <Typography sx={{ fontSize: '12px' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Airline.AirlineCode}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CityName}</Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Origin.DepTime.substring(11, 16)}</Typography>
                                    <Typography sx={{ fontSize: '15px' }} component="div">{(new Date(fareQuoteOneWay.Response.Results.Segments[0][0].Origin.DepTime.substring(0, 10))).toString().substring(0, 15)}</Typography>
                                    <Typography sx={{ fontSize: '13px' }} component="div">{`Terminal ` + fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.Terminal + `, ` + fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.AirportName + `, ` +  fareQuoteOneWay.Response.Results.Segments[0][0].Origin.Airport.CityName}</Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={2} mt={2}>
                                    <Typography component="div" sx={{ fontSize: '13px',color: '#6A6A6A' }}>{fareQuoteOneWay.Response.Results.Segments[0][0].Duration + " min"}</Typography>
                                    <ArrowRightAltIcon sx={{ transform: 'scale(6.2, 1.1)', color: '#D6D6D6' }} />
                                    <Typography component="div" sx={{ fontSize: '11px', fontWeight: 'bolder' ,color: '#6A6A6A' }}>{fareQuoteOneWay.Response.Results.IsRefundable ? `Fully Refundable` : `Not Refundable`}</Typography>
                                </Grid>
                                <Grid item={true} xs={12} md={5}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Airline.AirlineName}</Typography>
                                    <Typography sx={{ fontSize: '12px' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Airline.AirlineCode}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Destination.Airport.CityName}</Typography>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteOneWay.Response.Results.Segments[0][0].Destination.ArrTime.substring(11, 16)}</Typography>
                                    <Typography sx={{ fontSize: '15px' }} component="div">{(new Date(fareQuoteOneWay.Response.Results.Segments[0][0].Destination.ArrTime.substring(0, 10))).toString().substring(0, 15)}</Typography>
                                    <Typography sx={{ fontSize: '13px' }} component="div">{`Terminal ` + fareQuoteOneWay.Response.Results.Segments[0][0].Destination.Airport.Terminal + `, ` + fareQuoteOneWay.Response.Results.Segments[0][0].Destination.Airport.AirportName + `, ` +  fareQuoteOneWay.Response.Results.Segments[0][0].Destination.Airport.CityName}</Typography>
                                </Grid>
                            </Grid>
                            <br></br>
                            <hr></hr>
                            <Baggage checkInBaggage={fareQuoteOneWay.Response.Results.Segments[0][0].Baggage} cabinBaggage = {fareQuoteOneWay.Response.Results.Segments[0][0].CabinBaggage} />
                            </Paper>
                            {isRoundTrip &&
                                <>
                                <Typography variant="h6" sx={{textAlign: 'center'}}>Return flight</Typography>
                                <Paper variant="elevation" elevation={3} sx={{marginBottom: '20px', marginTop: '20px', paddingBottom: '20px'}}>
                                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                                    <Grid item={true} xs={12} md={5}>
                                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Airline.AirlineName}</Typography>
                                        <Typography sx={{ fontSize: '12px' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Airline.AirlineCode}</Typography>
                                        <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CityName}</Typography>
                                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.DepTime.substring(11, 16)}</Typography>
                                        <Typography sx={{ fontSize: '15px' }} component="div">{(new Date(fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.DepTime.substring(0, 10))).toString().substring(0, 15)}</Typography>
                                        <Typography sx={{ fontSize: '13px' }} component="div">{`Terminal ` + fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.Terminal + `, ` + fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.AirportName + `, ` +  fareQuoteSecondWay.Response.Results.Segments[0][0].Origin.Airport.CityName}</Typography>
                                    </Grid>
                                    <Grid item={true} xs={12} md={2} mt={2}>
                                        <Typography component="div" sx={{ fontSize: '13px',color: '#6A6A6A' }}>{fareQuoteSecondWay.Response.Results.Segments[0][0].Duration + " min"}</Typography>
                                        <ArrowRightAltIcon sx={{ transform: 'scale(6.2, 1.1)', color: '#D6D6D6' }} />
                                        <Typography component="div" sx={{ fontSize: '11px', fontWeight: 'bolder' ,color: '#6A6A6A' }}>{fareQuoteSecondWay.Response.Results.IsRefundable ? `Fully Refundable` : `Not Refundable`}</Typography>
                                    </Grid>
                                    <Grid item={true} xs={12} md={5}>
                                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Airline.AirlineName}</Typography>
                                        <Typography sx={{ fontSize: '12px' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Airline.AirlineCode}</Typography>
                                        <Typography variant="body1" sx={{ fontSize: '20px' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.Airport.CityName}</Typography>
                                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">{fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.ArrTime.substring(11, 16)}</Typography>
                                        <Typography sx={{ fontSize: '15px' }} component="div">{(new Date(fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.ArrTime.substring(0, 10))).toString().substring(0, 15)}</Typography>
                                        <Typography sx={{ fontSize: '13px' }} component="div">{`Terminal ` + fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.Airport.Terminal + `, ` + fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.Airport.AirportName + `, ` +  fareQuoteSecondWay.Response.Results.Segments[0][0].Destination.Airport.CityName}</Typography>
                                    </Grid>
                                </Grid>
                                <br></br>
                                <hr></hr>
                                <Baggage checkInBaggage={fareQuoteSecondWay.Response.Results.Segments[0][0].Baggage} cabinBaggage = {fareQuoteSecondWay.Response.Results.Segments[0][0].CabinBaggage} />
                                </Paper>
                                </>
                            }
                            
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}

export default ReviewItinerary;