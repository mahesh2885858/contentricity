import React, { useContext } from 'react'
import { Button, Card, Box } from "@mui/material";
import { ColorModeContext } from './ColorModeContext';

const CardWithProps = () => {
    const { mode, switchTheme } = useContext(ColorModeContext)
    return (
        <Card style={{
            width: "317px",
            height: "181px",
            backgroundColor: mode === "light" ? "unset" : "#45485F"
        }}>
            this is card content
            <Box>

                <Button variant='contained'>Add Platforms</Button>
            </Box>
        </Card>
    )
}

export default CardWithProps