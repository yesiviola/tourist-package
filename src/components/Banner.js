/* eslint-disable no-unused-vars */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper, Typography } from "@mui/material";
import { styled  } from "@mui/system";
import image1 from "../images/Buenos_Aires_1.jpg";
import image2 from "../images/Buenos_Aires_2.jpg";
import image3 from "../images/buenos_aires_3.jpg";
import logo from "../images/Toirist packageT.png";
import {useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


    const BannerRoot = styled('div')(({theme}) => ({
        width: "inherit",
        height: "40vh",
       display: 'flex',
         flexDirection: 'column',
         justifyContent: "space-between",
         minHeight: '75vh', 
         [theme.breakpoints.down('sm')]: {
            minHeight: '40vh',
         },
         color: "#fff",
         fontWeight: "bold",
         position: "relative",
         backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
         margin: theme.spacing(1),
         marginBottom: theme.spacing(2),
}));


const TitleContainer = styled('div')({
 position: 'absolute',
top: 0,
right: 0,
display: 'flex',
justifyContent: 'space-between',
width: '100%',
padding: '3px',

});

const LogoContainer = styled('div')({
    width: '120px',
    height: '70px',
});

const Logo = styled('img')({
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%',
});



const Text = styled('p')({
    fontFamily:  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: 'white',
    padding: '0.2em',
});

const BannerSection = styled('section')({
    backgroundColor: '#f5f5f5',
});

const Banner = ({children}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    

    
    return (
        <BannerSection>
            <BannerRoot theme={theme}>
            <Paper variant="outlined" square elevation={0}>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <TitleContainer style={{background: "#000", opacity: 0.7}}>
                    <Typography variant="h3" component="h1" style={{fontSize: '1.5rem', whiteSpace: 'nowrap'}}>
                       <Text> Reset your Event in <span style={{color: '#2e8b57'}}>Bs As</span></Text>
                    </Typography>
                    <LogoContainer>
                        <Logo src={logo} alt="logo" />
                    </LogoContainer>
                    </TitleContainer>
                    <img src={image1} alt="Buenos Aires 1" />
                    <p className="legend">Buenos Aires, the obelisk</p>
                </div>
                <div>
                    <img src={image2} alt="Buenos Aires 2" />
                    <p className="legend">Classic Buenos Aires</p>
                </div>
                <div>
                    <img src={image3} alt="Buenos aires 3" />
                    <p className="legend"> Madero Port Buenos Aires</p>
                </div>
            </Carousel>
            </Paper>
                {children}
            </BannerRoot>
        </BannerSection>
    )
}
  

export default Banner;
