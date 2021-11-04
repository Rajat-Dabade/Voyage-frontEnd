import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {useSelector, useDispatch} from 'react-redux';

import {fareActions} from '../../store/fareSlice';

const FareBreakUp = () => {

  const dispatch = useDispatch();
  const fareQuoteOneWay = useSelector((state) => state.fareQuote.fareQuoteOneWay);
  const isRoundTrip = useSelector((state) => state.searchResult.isRoundTrip);
  const fareQuoteSecondWay = useSelector((state) => state.fareQuote.fareQuoteSecondWay);

  if(isRoundTrip) {
    dispatch(fareActions.setPublishFare(parseFloat(fareQuoteOneWay.Response.Results.Fare.PublishedFare) + parseFloat(fareQuoteSecondWay.Response.Results.Fare.PublishedFare)))
  } else {
    dispatch(fareActions.setPublishFare(parseFloat(fareQuoteOneWay.Response.Results.Fare.PublishedFare)));
  }

  return (
    <>

      <Paper
        variant="elevation"
        elevation={12}
        sx={{borderRadius: '70px', margin: '50px 100px' }}
      >
        <Card sx={{ minWidth: 275, borderRadius: '20px' }}>
          <CardContent>

            <Typography variant="h5" component="div" align='left'>
              Fare Breakup
            </Typography>

            {isRoundTrip ? <><hr />
                <Typography style={{display: 'inline', float: 'left'}}>Adults:</Typography>
                <Typography style={{display: 'inline', float: 'left'}}>1</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Base Fare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{(fareQuoteOneWay.Response.Results.Fare.BaseFare + fareQuoteSecondWay.Response.Results.Fare.BaseFare).toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Taxes:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{(fareQuoteOneWay.Response.Results.Fare.Tax + fareQuoteSecondWay.Response.Results.Fare.Tax).toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Airfare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{(fareQuoteOneWay.Response.Results.Fare.OtherCharges + fareQuoteSecondWay.Response.Results.Fare.OtherCharges).toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Convenience Fee:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{`100.00`}</Typography><br></br><br></br>
                <hr />
                <Typography style={{display: 'inline', float: 'left'}}>Grand Total:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{(fareQuoteOneWay.Response.Results.Fare.PublishedFare + fareQuoteSecondWay.Response.Results.Fare.PublishedFare).toFixed(2)}</Typography><br></br>
                </> : 
                <><hr />
                <Typography style={{display: 'inline', float: 'left'}}>Adults:</Typography>
                <Typography style={{display: 'inline', float: 'left'}}>1</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Base Fare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuoteOneWay.Response.Results.Fare.BaseFare.toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Taxes:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuoteOneWay.Response.Results.Fare.Tax.toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Total Airfare:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuoteOneWay.Response.Results.Fare.OtherCharges.toFixed(2)}</Typography><br></br><br></br>
                <Typography style={{display: 'inline', float: 'left'}}>Convenience Fee:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{`100.00`}</Typography><br></br><br></br>
                <hr />
                <Typography style={{display: 'inline', float: 'left'}}>Grand Total:</Typography>
                <Typography style={{display: 'inline', float: 'right'}}>{fareQuoteOneWay.Response.Results.Fare.PublishedFare.toFixed(2)}</Typography><br></br>
                </>
                }
        </CardContent>
          
        {/* <CardActions>
        <Button variant="contained" style={{margin: '0 auto'}}>
         Proceed to pay
        </Button>
        </CardActions> */}
        
        </Card>
      </Paper>
    </>
  );
};

export default FareBreakUp;
