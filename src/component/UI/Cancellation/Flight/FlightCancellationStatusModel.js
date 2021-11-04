import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { cancellationActions } from "../../../../store/cancellationSlice";
import { useDispatch, useSelector } from "react-redux";
import { cancellationStatus } from "../../../../store/cancellationHandler";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FlightCancellationStatusModel = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    dispatch(cancellationActions.setCancellationStatusModel(false));
  };

  const cancelledStatus = useSelector(
    (state) => state.flightCancellation.cancelledStatus
  );

  const changeRequestId = useSelector(
    (state) => state.flightCancellation.ChangeRequestId
  );

  useEffect(() => {
    dispatch(cancellationActions.setCancelledStatus({}));
    dispatch(cancellationStatus(changeRequestId));
  }, [changeRequestId]);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Cancellation Status for {changeRequestId}
          </Typography>
          <hr></hr>

          {JSON.stringify(cancelledStatus) === JSON.stringify({}) ? (
            <h3>Loading Status...</h3>
          ) : (
            <Typography id="modal-modal-title" variant="body1" component="h2">
              {cancelledStatus.Response.ChangeRequestStatus === 1 ? (
                <p>
                  The current cancellation status is Unassigned, please check is
                  after some time
                </p>
              ) : cancelledStatus.REsponse.ChangeRequestStatus === 2 ? (
                <p>
                  The current status is Assigned for Cancellation. This process
                  will take couple of hours. Please check it later.
                </p>
              ) : cancelledStatus.Response.ChangeRequestStatus === 3 ? (
                <p>
                  The current cancellation status is been acknowledge and is in
                  completion process. Please recheck it after some time
                </p>
              ) : cancelledStatus.Response.ChangeRequestStatus === 4 ? (
                <p>
                  The current cancellation status is completed, the amount has
                  been refunded to your credit. Refer to check updated credits.
                </p>
              ) : cancelledStatus.Response.ChangeRequestStatus === 5 ? (
                <p>
                  The Cancellation for this ticketId is been cancelled from the
                  flight operator side
                </p>
              ) : cancelledStatus.Response.ChangeRequestStatus === 6 ? (
                <p>
                  The cancellation status is been closed and the amount has been
                  credited to your account
                </p>
              ) : cancelledStatus.Response.ChangeRequestStatus === 7 ? (
                <p>
                  The cancellation status is pending from the flight operator
                  side. Please check it after some time.
                </p>
              ) : null}
            </Typography>
          )}
          <Button variant="contained" color="error" onClick={handleClose}>
            Closed
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default FlightCancellationStatusModel;
