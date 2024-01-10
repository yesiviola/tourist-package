import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { styled, } from "@mui/system";
import data from "../listData";



const StyledDiv = styled('div')(({theme}) => ({

}));

const ListComponent = () => {
  return (
    <List component="nav" aria-labelledby="nested-list-subheader"
    subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Cost based on a group of 30px, accomodated in twin rooms
        </ListSubheader>
    }>
        <StyledDiv>
      {
        data.map(item => (
        <ListItem key={item.text}>
        <ListItemIcon sx={{color: '#008000'}}>
           {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
        </ListItem>
        ))
      }
        </StyledDiv>
    </List>
  )
}

export default ListComponent;
