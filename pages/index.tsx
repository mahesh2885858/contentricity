import type { NextPage } from 'next'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import CardWithProps from '../components/Card'
import { useContext } from 'react'
import { ColorModeContext } from '../components/ColorModeContext'
const sampleData = [
  { buttonText: "ADD PLATFORM", description: "Platforms are the root to which you add your articles. It can be a domain or an offline magazine.", icon: "/Group1.png", title: "Platform" },
  { buttonText: "ADD PLATFORM", description: "Platforms are the root to which you add your articles. It can be a domain or an offline magazine.", icon: "/Group1.png", title: "Platform" }
]
const Home: NextPage = () => {
  const { mode, switchTheme } = useContext(ColorModeContext)
  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
      <Box>
        <Typography fontSize={"32px"} color={mode === "light" ? "rgba(76, 78, 100, 0.87)" : "unset"}>
          Hi John Doe! Welcome to Contentricity
        </Typography>
        <Typography fontSize={"16px"} color={mode === "light" ? "rgba(76, 78, 100, 0.87)" : "unset"}>
          Get started by completing the following setup
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        gap: "20px",
        marginTop: "21px"

      }}>

        {
          sampleData.map((card, index) => {
            return (
              <CardWithProps buttonText={card.buttonText} description={card.description} icon={card.icon} title={card.title} key={index} />
            )
          })
        }
      </Box>


      {/* <CardWithProps buttonText='ADD PLATFORM' description='
      Platforms are the root to which you add your articles. It can be a domain or an offline magazine.
      ' icon={"/Group1.png"} title="Platform" />

      <CardWithProps buttonText='ADD PLATFORM' description='
      Platforms are the root to which you add your articles. It can be a domain or an offline magazine.
      ' icon={"/Group1.png"} title="Platform" /> */}
    </Box>

  )
}

export default Home
