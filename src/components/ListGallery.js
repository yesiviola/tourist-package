import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import ListComponent from "./ListComponent";
import GalleryComponent from "./GalleryComponent";

const classes = styled('div')({

});

const ListGallery = () => {
    return (
        <div className={classes.gridRoot}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ListComponent/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GalleryComponent/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ListGallery
