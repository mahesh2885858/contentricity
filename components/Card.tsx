import React from 'react'
import { Button, Card, Box } from "@mui/material";

const CardWithProps = () => {
    return (
        <Card style={{
            width: "317px",
            height: "181px"
        }}>
            this is card content
            <Box>

                <Button variant='contained'>Add Platforms</Button>
            </Box>
        </Card>
    )
}

export default CardWithProps