import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";

import OneWay from "./OneWay";
import SecondWay from "./SecondWay";
import { Button, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import {authActions} from '../../../../store/auth-slice';

import {fareRuleHandler} from '../../../../store/fareRuleHandler';
import {fareQuoteHandler} from '../../../../store/fareQuoteHandler';


const SearchResultSection = () => {

  const dispatch = useDispatch();
  const isRoundTrip = useSelector((state) => state.searchResult.isRoundTrip);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const traceId = useSelector((state) => state.searchResult.traceId);
  
  const [proceedToBookAfterSearchBtn, setProceedToBookAfterSearchBtn] = useState(false);

  const [oneWaySelectedIndex, setOneWaySelectedIndex] = useState("");
  const [secondWaySelectedIndex, setSecondWaySelectedIndex] = useState("");

  const oneWaySelectedIndexHandler = (index) => {
    setOneWaySelectedIndex(index);
  };

  const secondWaySelectedIndexHandler = (index) => {
    setSecondWaySelectedIndex(index);
  };

  const proceedToBookHandler = () => {
    setProceedToBookAfterSearchBtn(true);
    if (isRoundTrip) {
      if (secondWaySelectedIndex === "" || oneWaySelectedIndex === "") {
        alert("Please select the flight before proceeding furture");
        setProceedToBookAfterSearchBtn(false);
        return;
      }
    } else {
      if (oneWaySelectedIndex === "") {
        alert("Please select the flight before proceeding");
        setProceedToBookAfterSearchBtn(false);
        return;
      }
    }
    if(!isAuthenticated) {
      dispatch(authActions.setOpenDailogBox(true));
      setProceedToBookAfterSearchBtn(false);
    } else {
      const data = {
        TraceId: traceId,
        ResultIndex: [oneWaySelectedIndex , secondWaySelectedIndex !== "" ? secondWaySelectedIndex: null]
      }
      dispatch(fareRuleHandler(data));
      dispatch(fareQuoteHandler(data));
    }
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "20px !important" }}
      >
        Select the row to select the flights
      </Typography>
      <div>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={isRoundTrip ? 6 : 8}>
            <OneWay
              oneWaySelectedIndexHandler={oneWaySelectedIndexHandler}
            ></OneWay>
          </Grid>
          {isRoundTrip && (
            <>
              <Grid item xs={6}>
                <SecondWay
                  secondWaySelectedIndexHandler={secondWaySelectedIndexHandler}
                ></SecondWay>
              </Grid>
            </>
          )}
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          {proceedToBookAfterSearchBtn ? 
          <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          sx={{
            marginTop: "80px",
            marginBottom: "80px",
            padding: "20px 80px",
          }}
        >
          Proceed to book
        </LoadingButton> :  
          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: "80px",
              marginBottom: "80px",
              padding: "20px 80px",
            }}
            onClick={proceedToBookHandler}
          >
            Proceed to book
          </Button>
        }
          

          
        </Grid>
      </div>
    </>
  );
};

export default SearchResultSection;
