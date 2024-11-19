import { AppBar, Toolbar, Typography,Box, Button,useTheme,useMediaQuery } from "@mui/material";
import React from "react";
import logo from '../../assets/logo.png';
import tel from '../../assets/tel.png';
import DrawerComp from "../DrawerComp";
import CookieIcon from '@mui/icons-material/Cookie';


function Header(){
    const theme=useTheme();
    console.log(theme);
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Box bgcolor='white' boxShadow={1} display='flex' justifyContent='center' alignItems='center' pl={10} pr={10} height={70} sx={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            
            {/* Navigation Bar */}
            <React.Fragment>
            <AppBar sx={{background:"white"}}>
                <Toolbar>
                <Box
                    position='absolute'
                    component="img"
                    src={logo}
                    alt="Logo"
                    width="300px"
                    height="auto"
                    marginTop="60px"
                    marginLeft={"-50px"}/>
                

                {
                    isMatch  ? (
                        <>
                        <Typography>Buddhi</Typography>
                        <DrawerComp/>
                        <Button sx={{marginLeft:"auto"}} variant="contained" className="LoginButton"> Login </Button>
                        </>
                        
                    ):(
                        <>
                        <Button sx={{marginLeft:"30%", width:"100px"}} variant="contained" className="MenuButton"> ABOUT<CookieIcon sx={{marginLeft:"5px"}}/> </Button>
                        <Button sx={{marginLeft:"50px", width:"100px"}} variant="contained" className="MenuButton" onClick={() => navigate('/footer')} > MATH <CookieIcon sx={{marginLeft:"5px"}}/></Button>
                        <Box sx={{marginLeft:"auto"}}>
                        <Box
                             position='absolute'
                             component="img"
                             src={tel}
                             alt="Tel No Image"
                             width="150px"
                             height="auto"/>  
                             <Button sx={{marginLeft:"150px",width:"100px" }} variant="contained"onClick={() => navigate('/tabarea')} > Login </Button>
                
                            </Box>
                            
                        </>
                    )
                }
                </Toolbar>
            </AppBar>
        </React.Fragment>
        </Box>
            
    )

}
export default Header;