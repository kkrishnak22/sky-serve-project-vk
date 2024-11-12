import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212', // Soft Black
    },
    secondary: {
      main: '#FF5A5F', // Warm Coral
    },
    background: {
      default: '#FAFAFA', // Ultra Light Gray
    },
    surface: {
      main: '#FFFFFF', // Pure White
    },
    text: {
      primary: '#333333', // Charcoal Gray
      secondary: '#757575', // Medium Gray for secondary text
    },
    accent: {
      main: '#FFC107', // Golden Amber
    },
    action:{
      hover: '#e6e6e6',
    }
  },
  gradients: {
    lightGrey: 'linear-gradient(135deg, #e6e6e6, #F5F5F5)', // Light grey gradient 
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#333333',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
    button: {
      textTransform: 'none',
      fontWeight: '600',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '2px solid #4A90E2',
        },
      },
    },
  },
});

export default theme;
