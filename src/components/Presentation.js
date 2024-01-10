import { Paper, Typography } from "@mui/material";

const Presentation = () => {

    return (
        <Paper
        variant="outlined"square elevation={0}>
            <Typography variant="h6" sx={{color: 'black', fontFamily: 'sans-serif'}} align="center">Our package include</Typography>
        </Paper>
    )
}

export default Presentation;
