import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComp(){
    const[openDrawer,setOpenDrawer]=useState(false);
   
    return(
        <React.Fragment>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon color="inherit" sx={{marginLeft:-10}}/>
            </IconButton>
        </React.Fragment>

    )

}
export default DrawerComp;