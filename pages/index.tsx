import type { NextPage } from 'next'
import { Box, Button, Card, Container } from '@mui/material'
import CardWithProps from '../components/Card'
const Home: NextPage = () => {
  return (
    <>

      <CardWithProps />
      <Button variant="contained" color="primary"> click here!</Button>
    </>

  )
}

export default Home
