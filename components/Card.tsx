import React, { useContext } from 'react'
import { Button, Card, Box, Typography } from "@mui/material";
import { ColorModeContext } from './ColorModeContext';
import Image from 'next/image';
interface CardProps {
    title: string;
    description: string;
    buttonText: string;
    icon: string

}
const CardWithProps = (props: CardProps) => {
    const { mode, switchTheme } = useContext(ColorModeContext)
    return (
        <Card style={{
            width: "270px",
            position: "relative",
            height: "181px",
            backgroundColor: mode === "light" ? "unset" : "#45485F",
            border: "1px solid rgba(76, 78, 100, 0.12)",
            boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
            borderRadius: "10px",

        }}>
            <Box sx={{ width: "100%", height: "30px", display: "flex", marginTop: "15px", marginLeft: "20px", alignItems: "center" }}>
                <Image src={props.icon} width={30} height={30} />
                <Typography fontSize={24} marginLeft="12px" fontWeight={"400"} >{props.title}</Typography>

            </Box>
            <Typography marginLeft="20px" marginTop={"10px"} >
                {props.description}
            </Typography>
            <Button style={{
                backgroundColor: "#3366FF", width: "233px", height: "30px", boxShadow: " 0px 6px 18px -8px rgba(76, 78, 100, 0.56)", borderRadius: "4px", position: "absolute", bottom: "20px", left: "20px"
            }} variant='contained'>{props.buttonText}</Button>
        </Card>
    )
}

export default CardWithProps