import 'index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { render } from 'preact'
import App from 'App'

const theme = createTheme({
    palette: {
        // primary: {
        //   main:'#7F7576FF',
        // },
        // secondary: {
        //   main: '#ff3d00',
        // },  
        text: {
          primary: '#3A4157', // Set default text color to black
        },
      },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 1100, // Increase font weight for h1
      color: '#3A4157', // Black color
    },
    h2: {
      fontSize: '0.9rem',
      fontWeight: 1050, // Increase font weight for h1
      color: '#3A4157', // Black color
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 1000, // Increase font weight for h1
      color: '#3A4157', // Black color
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 900, // Increase font weight for h1
      color: '#3A4157', // Black color
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 700, // Increase font weight for h1
      color: '#3A4157', // Black color
    },
  },
})

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root') as Element
)