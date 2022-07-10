import type { NextPage } from 'next'
import { Box, Card } from '@mui/material'
const Home: NextPage = () => {
  return (
    <Box sx={{

    }} >
      <Card elevation={8} sx={{ width: "200px" }} >
        this is content of card
      </Card>
    </Box>
  )
}

export default Home
