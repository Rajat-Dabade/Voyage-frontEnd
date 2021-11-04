import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


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


const FareRule = () => {

    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Paper variant="elevation" elevation={0} sx={{borderRadius: '70px', margin: '50px 100px'}}>
                <Card sx={{ borderRadius: '20px', border: '1px solid #FFB9B9' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[300] }} aria-label="recipe">
                                02
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
                        title="Important"
                        titleTypographyProps={{ variant: 'h6' }}
                    />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                            <Typography sx={{fontSize: '12px'}} paragraph>Web checkin is mandatory. Only passengers with confirmed web check-in will be allowed to enter the airport.<br></br>

                            A self-declaration/ Aarogya Setu App status would also be obtained that the passenger is free of COVID-19 symptoms. Passengers with Red status in Aarogya Setu App would not be permitted to travel.<br></br>

                            Passengers will be required to wear the Face Mask as per government regulations.<br></br>

                            The airlines will not provide meal services on board for flights with duration less than 2 hours.<br></br>

                            Only one check-in bag per person will be allowed.<br></br>

                            If a passenger who is not permitted to fly undertakes an air journey, he/she shall be liable for penal action.<br></br>

                            Before booking the flight, we request you to carefully refer to the airline and destination travel guidelines as mentioned by the government, for a safe and hassle-free journey.<br></br>
                            </Typography>
                            </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </>
    )
}


export default FareRule;