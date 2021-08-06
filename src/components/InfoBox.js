import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../styles/InfoBox.css";


function InfoBox({ title, cases, total, active, isRed, isBlue, isGrey, ...props }) {
    console.log(title, active);
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"} ${isBlue && "infoBox--blue"} ${isGrey && "infoBox--grey"}`}
        >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${isRed && "infoBox__cases--red"} ${isBlue && "infoBox__cases--blue"} ${isGrey && "infoBox__cases--grey"}`}>
                    {cases}
                </h2>

                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox;