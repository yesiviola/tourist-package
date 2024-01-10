import styled from "@emotion/styled";
import { Button, Divider, Paper, Typography } from "@mui/material";
import {makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@mui/icons-material/Email';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justity',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(-1),
    [theme.breakpoints.down('sm')]:{
      marginTop: theme.spacing(1),
    },
  },
  link: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: "1rem",
    textDecoration: "none",
    fontStyle:"italic",
    },
    extendText: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "& button:hover": {
      backgroundColor: "#008000 !important",
    }
  },

      explanation: {
      width:"inherit",
      height: "auto",
      padding:theme.spacing(2)
    },
}));

const Emoji = ({ symbol, label }) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
);


const StyledPaper = styled(Paper)({
  position: 'relative',
});
const StrongTypography = styled(Typography)({
  color: '#509ba8',
  fontWeight: 'bold',
})

const Explanation = () => {
  const classes = useStyles();
  return (
    <StyledPaper variant="outlined" elevation={0} square className={classes.paper}>
      <Typography variant="body1" paragraph gutterBottom style={{margin:"1rem 1.3rem"}}>
        <StrongTypography variant="h5" component="strong">Pakages Tourist Air Good <Emoji symbol="🌍" label="globe"/></StrongTypography> is a travel agency that offers you the best travel packages to the most beautiful places of Buenos Aires <Emoji symbol="🏙️" label="cityscape" />.
        <br/>
        <StrongTypography variant="h6" component="strong">Welcome to the magical city of Buenos Aires💃</StrongTypography>
        <br/>
        <StrongTypography variant="subtitle1" component="strong">Discover the city of  passion and charm🍷. </StrongTypography>
        <br/>
        Welcome to <strong>Buenos Aires</strong>, the vibrant capital of <strong>Argentina</strong>, where passion, charm and culture come together to create an unforgettable experience. With its rich history, impressive architecture and a food scene that delights the senses, <strong>Buenos Aires</strong> is a destination that captivates all who visit it.
        <br/>
        <StrongTypography variant="subtitle1" component="strong">"Emblematic places". </StrongTypography>
        <br/>
        <strong>The Obelisk <Emoji symbol="🏙️" label="cityscape"/>:</strong> an icon of the city that symolizes its greatness and modernity.
        <br/>
        <strong>The Pink House <Emoji symbol="🏛️" label="classical building" />:</strong> the seat of the <strong>Argentine government</strong>, with its characteristic pink color and its political history.
        <br/>
        <strong>The Cabildo <Emoji symbol="🏛️" label="classical building"/>:</strong> the old seat of the colonial government, today a museum.
        <br/>
        <strong>La Boca <Emoji symbol="⚽" label="soccer ball"/> </strong> A colorful and lively neighborhood, known for its brightly colored houses and the famous La Bombonera soccer stadium 🏆.
        <br/>
        <strong>San Telmo <Emoji symbol="🏛️" label="classical building"/>:</strong> the oldest neighborhood in the city, with its cobbled streets, colonial houses and antique shops.
        <br/>
        <StrongTypography variant="subtitle1" component="strong">Culture and Art</StrongTypography>
        <br/>
        <strong>The Colón Theater<Emoji symbol="🎭" label="performing arts"/>:</strong> one of the most important opera houses in the world.
        <br/>
        <strong>The MALBA <Emoji symbol="🖼️" label="framed picture" />:</strong> the most important museum of Latin American art in the world.
        <br/>
        <strong>The Museum of Fine Arts <Emoji symbol="🖼️" label="frames picture" />:</strong> the most important museum in the country.
        <br/>
        <strong>The Recoleta Cultural Center <Emoji symbol="🖼️" label="frames picture" />:</strong> a cultural center located in the heart of Recoleta.
        <br/>
        <strong>The Usina del Arte <Emoji symbol="🖼️" label="frame picture"/>:</strong> a cultural center located in the neighborhood of La Boca.
        <br/>
        <strong>The Planetarium <Emoji symbol="🌌" label="milky"/>:</strong> a museum dedicated to astronomy.
        <br/>
        <strong>Tango <Emoji symbol="💃" label="woman dancing"/>:</strong> Immerse yourself in the world of tango, the passionate dance that has captivated the entire world 🌐.
        <br/>
        <StrongTypography variant="subtitle1" component="strong">"The best gastronomy in the world <Emoji symbol="🍖"label="meat on bone"/> ". </StrongTypography>
        <br/>
        Buenos Aires is a city that offers a wide variety of gastronomic options, from the most traditional Argentine dishes to the most innovative international cuisine.
        <br/>
        <strong>Asado <Emoji symbol="🍖"label="meat on bone"/>:</strong> the most traditional Argentine dish, consisting of grilled meat.
        <br/>
        <strong>Empanadas <Emoji symbol="🥟"label="dumpling"/>:</strong> a traditional Argentine dish consisting of a dough filled with meat, vegetables or cheese.
        <br/>
        <strong>Locro <Emoji symbol="🥣"label="bowl with spoon"/>:</strong> a traditional Argentine dish consisting of a stew of meat, corn and vegetables.
        <br/>
        <strong>Humita <Emoji symbol="🥣"label="bowl with spoon"/>:</strong> a traditional Argentine dish consisting of a stew of corn and vegetables.
        <br/>
        <strong>Choripan <Emoji symbol="🥪"label="sandwich"/>:</strong> a traditional Argentine dish consisting of a sandwich of chorizo and bread.
        <br/>
        <StrongTypography variant="body1"component="strong">"Exclusive Hotels"</StrongTypography>
        <br/>
        Buenos Aires offers a wide variety of hotels, from the most luxurious to the most economical  <Emoji symbol="🏨"label="hotel"/>.
        <br/>
        <strong>Four Seasons Hotel <Emoji symbol="🏨"label="hotel"/>:</strong> the most luxurious hotel in the city.
        <br/>
        <strong>Faena Hotel Buenos Aires <Emoji symbol="🏨"label="hotel"/>:</strong> An avant-garde design hotel with a unique aesthetic and a privileged location in Puerto Madero.
        <br/>
        <StrongTypography variant="body1"component="strong">Parks and green spaces <Emoji symbol="🌳🌳🌳"label="tree"/> </StrongTypography>
        <br/>
        Buenos Aires is a city that offers a wide variety of parks and green spaces, from the most traditional to the most innovative.
        <br/>
        <strong>The Ecological Reserve <Emoji symbol="🌳"label="tree"/>:</strong> a natural reserve located in the heart of the city.
        <br/>
        <strong>The Botanical Garden <Emoji symbol="🌳"label="tree"/>:</strong> a botanical garden located in the heart of the city.
        <br/>
        <strong>The Japanese Garden <Emoji symbol="🌳"label="tree"/>:</strong> a Japanese garden this exquisitegarden, designed in the traditional Japonese style, is a haven of peace in the middle of the bustling city.
        <br/>
        <strong>The Rose Garden <Emoji symbol="🌳"label="tree"/>:</strong> a rose garden located in the heart of the city.
        <br/>
        <strong>The Palermo Woods <Emoji symbol="🌳"label="tree"/>:</strong> a park located in the heart of the city.
        <br/>
        <strong>The Costanera Sur <Emoji symbol="🌳" label="tree"/>:</strong> A natural Oasis in the meddle of the city, ideal for bird watching and enjoying nature.
        <br/>
      </Typography>
      <Divider/>
          <div className={classes.action}>
            <Button variant="contained" startIcon={<EmailIcon/>} style={{margin: "2rem 0"}}>
              <a className={classes.link} href="mailto:Goodair@Buenos-aires.com">
              Send me an email <span className={classes.extendText}>to learn more...</span>
              </a>
            </Button>
            <br/>
            <Typography variant="h6" sx={{
              fontSize: {
                xs: '0.8rem',
                sm: '1.0rem',
                md: '1.2rem',
                lg: '1.4rem',
              }
            }}>
              Or get in touch at Goodair@Buenos-aires.com
            </Typography>
          </div>
    </StyledPaper>
  )
}

export default Explanation;
