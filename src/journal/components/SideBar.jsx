import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth  = 240, }) => {
  
  const {notes} = useSelector( state => state.journal)
  const {displayName} = useSelector(state => state.auth)

  return (
    <Box
      component="div"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider/>
        <List>
            {
                notes.map( note => (
                  <SideBarItem {...note} key={note.id}/>
                ))
            }
        </List>
      </Drawer>
    </Box>
  );
};
