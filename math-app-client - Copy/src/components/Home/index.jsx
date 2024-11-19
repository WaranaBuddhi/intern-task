import { AppBar,Grid, Box, Button,Paper,  Drawer, Toolbar, Typography,useTheme,useMediaQuery,Tabs,Tab } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ReactImage from '../../assets/super-kid.png';
import ClzImage from '../../assets/clz.png';
import logo from '../../assets/logo.png';
import tel from '../../assets/tel.png';
import con1 from '../../assets/con1.png';
import con2 from '../../assets/con2.png';
import con3 from '../../assets/con3.png';
import con4 from '../../assets/con4.png';
import React, { useState }  from "react";
import DrawerComp from "../DrawerComp";
import { Headphones } from "@mui/icons-material";
import Header from "../Navbar";
import Footer from "../Footer";
import Tabarea from "../Tabarea";



function Home() {
    const navigate  = useNavigate()
    const theme=useTheme();
    console.log(theme);
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));

    const ages=[
        {id:1,age:"age - 3"},
        {id:2,age:"age - 4"},
        {id:3,age:"age - 5"},
        {id:4,age:"age - 6"},
        {id:5,age:"age - 7"},
        {id:6,age:"age - 8"}
    ]

  return (
    // BODY--------------------------------------------
    <>
        <Header/>
        
        {/* CONTENT ------------------------------------------------------ */}
        <Box mt={10} display='flex' alignItems="center" justifyContent='center' >
            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                width="90%"
                >
                {/* This is the left side */}       
                <Box mt={10} width= {{xs:"100%", md:"50%"}} >
                     <Grid container display='flex' flexDirection='column' >
                          <Grid xs={12} >
                            <Typography fontSize="4rem" fontWeight={600}>Making Kids Fall in Love with Math!</Typography>                       
                          </Grid>

                          {/* Ages section */}
                          <Grid item xs={12}>
                             <Grid container width='70%' rowSpacing={5} columnGap={2} mt={3}>
                                <Grid item xs={12}>
                                    <Typography fontSize="1rem">Book your FREE class with age group</Typography>
                                </Grid>
                                {ages.map((age,id)=>(    
                                    <Grid item={3} mt='-5px'>    
                                    <Box 
                                        width={135} 
                                        height={50} 
                                        display="flex" 
                                        alignItems="center" 
                                        justifyContent="center" 
                                        
                                        borderRadius={1} 
                                        boxShadow={1}
                                        >{age.age}</Box>

                                </Grid>
                                ))}
                             </Grid>                            
                          </Grid>

                          <Grid item xs={12} mt={5} >
                            <Box width='536px' display='flex' flexDirection='column' alignItems="center" justifyContent='center'>
                                <Button 
                                    fullWidth 
                                    variant="contained" 
                                    sx={{ 
                                        fontSize:"1rem",
                                        fontWeight:"bold",
                                        height: '60px',
                                        background: 'linear-gradient(93.93deg, #FF7B3A 69.26%, rgba(255, 123, 58, 0.59) 80.39%, #FF7B3A 95.95%)', 
                                        color: 'white' ,
                                        "&:hover": {
                                            background: 'linear-gradient(20.20deg, #FF7B3A 69.26%, rgba(255, 123, 58, 0.59) 80.39%, #FF7B3A 95.95%)',
                                        }
                                    }} onClick={() => navigate('/signin')}
                                >
                                    Book a free live class
                                </Button>
                                <Box mt={1}  display='flex' alignItems='center' flexDirection="column">
                                    <Typography fontSize='1.1rem' fontWeight={500}>
                                       <strong style={{fontSize:"1.9rem"}}>₹0</strong> for first class <stong style={{color:"#008958",fontWeight:"bold"}}> 100% Off</stong>
                                    </Typography>
                                    <Box display='flex'alignItems='center'> 
                                        <Typography fontSize='1.1rem' fontWeight={500} color='rgba(0, 0, 0, 0.5)' > Booked a demo already? </Typography>
                                        <Button variant="text"  sx={{ color:"#FF7C3B",fontWeight:"bold",fontSize:'1.1rem'}} >
                                           Join now
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                           </Grid>
                     </Grid>
                </Box>

                {/* This is the right side */}
                <Box width= {{xs:"100%", md:"50%"}} display='flex' alignItems='center'justifyContent='center'>   
                    <Box
                        component="img"
                        src={ReactImage}
                        alt="hero Image"
                        width='680px'
                        height="auto"
                        marginTop={5}     
                    />
                </Box>
            </Box>    
        </Box>


        <Box marginTop="20%"display='flex' justifyContent='center' alignItems='center'>
            <Typography fontWeight="bold"fontSize={"40px"}>Adaptive learning path + best teachers = Math mastery</Typography>
            
        </Box>
        <Box marginTop="1%"display='flex' justifyContent='center' alignItems='center'>
            <Typography>The guaranteed formula to be a Math wizard
            </Typography>
        </Box>

        <Box   justifyContent="center" alignItems="center" >
        <Grid container display="flex"
                flexDirection={{ xs: 'column', md: 'row' }} marginTop={-50} >
                    <Grid item md={3}marginTop={44}>
                    <Box 
                    position='absolute'
                    component="img"
                    src={con1}
                    alt="Content1"
                    width= {{xs:"50%", md:"25%"}}
                    height="auto"
                    marginTop={10}/>
                    </Grid>
                    
                    <Grid item md={3}marginTop={44}>
                    <Box 
                    position='absolute'
                    component="img"
                    src={con2}
                    alt="Content1"
                    width= {{xs:"50%", md:"25%"}}
                    height="auto"
                    marginTop={10}/>
                    </Grid>
                    <Grid item md={3}marginTop={44}>
                    <Box 
                    position='absolute'
                    component="img"
                    src={con3}
                    alt="Content1"
                    width= {{xs:"50%", md:"25%"}}
                    height="auto"
                    marginTop={10}/>
                    </Grid>
                    <Grid item md={3}marginTop={44}>
                    <Box 
                    position='absolute'
                    component="img"
                    src={con4}
                    alt="Content1"
                    width= {{xs:"50%", md:"25%"}}
                    height="auto"
                    marginTop={10}/>
                    </Grid>
                </Grid>
        </Box>
        <Box mt={80}><Tabarea/></Box>
        <Box mt={10}><Footer/></Box>

        
        
        
    </>



  )
}

export default Home