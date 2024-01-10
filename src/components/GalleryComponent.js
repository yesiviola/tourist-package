import { ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";
import tileData from "../tileData";


const GalleryComponent = () => {
  return (
    <Paper sx={{padding: 2, color: 'text.secondary'}}>
    <div sx={{display: 'flex', flexWrap: 'wrap', overflow: 'auto', justifyContent: "space-around"}}>
        <ImageList sx= {{width: 'auto', height: 'auto'}} cols={2}>
          {
            tileData.map(tile => (
                <ImageListItem key={tile.title}>
                    <img src={tile.img} alt={tile.title}/>
                    <ImageListItemBar title={tile.title} />
                </ImageListItem>
            ))
          }
        </ImageList>
    </div>
    </Paper>
  )
}

export default GalleryComponent;
