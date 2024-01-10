import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterRoot = styled('footer')(({theme}) =>  ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: theme.palette.common.white,
    textAlign: 'center',

    padding: theme.spacing(2),
}));

const StickyFooter = () => {
  const year = new Date().getFullYear();
  return (
    <FooterRoot>
      <Container maxWidth="sm">
        <Typography variant="body1">Buenos Aires💃@Good Air {year} </Typography>

      </Container>
    </FooterRoot>
  )
}

export default StickyFooter
