import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import ListGallery from "./components/ListGallery";
import StickyFooter from "./components/StickyFooter";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
   breakpoints:{
      values:{
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        
      },
    }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
    <Banner />
    <Explanation/>
    <Presentation />
    <ListGallery/>
    <StickyFooter/>
    </Layout>
    </ThemeProvider>

  );
}

export default App;
