import React from "react";
import { Box, Grid, Typography, List, ListItem, IconButton } from "@mui/material";
import appstore from '../../assets/appstore.svg';
import PlayStoreIcon from "@mui/icons-material/Android";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
    const schoolList1 = ['India', 'Maharashtra', 'Bihar', 'Gujarat', 'Karnataka', 'Andhra Pradesh', 'Madhya Pradesh'];
  const schoolList2 = ['West Bengal', 'Telangana', 'Uttar Pradesh', 'Tamil Nadu', 'Rajasthan', 'Kerala', 'kid store'];
  const certifiedIcons = [
    // Replace with your certified icon components or images
    <div key="icon1" style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: '50%' }} />,
    <div key="icon2" style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: '50%' }} />,
    <div key="icon3" style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: '50%' }} />,
    <div key="icon4" style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: '50%' }} />,
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#008958",
        color: "white",
        p: 4,
        mt: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={4}>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Creta Class
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
          <Box
                    position='absolute'
                    component="img"
                    src={appstore}
                    alt="Logo"
                    width="100px"
                    height="auto"
                    />
          </Box>

          <Typography variant="h6" sx={{ mt: 10, mb: 2 }}>
            Certified
          </Typography>
          <Grid container spacing={1}>
            {[1, 2, 3, 4].map((_, index) => (
              <Grid item xs={3} key={index}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Second Column */}
       <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            School
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <List dense>
              {schoolList1.map((school, index) => (
                <ListItem key={index} sx={{ py: 0 }}>{school}</ListItem>
              ))}
            </List>
            <List dense sx={{mr:'50px'}}>
              {schoolList2.map((school, index) => (
                <ListItem key={index} sx={{ py: 0 }}>{school}</ListItem>
              ))}
            </List>
          </Box>
        </Grid>


        {/* Third Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Math
          </Typography>
          <List dense>
            {["Algebra", "Geometry", "Calculus", "Trigonometry", "Statistics", "Probability"].map(
              (topic, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  {topic}
                </ListItem>
              )
            )}
          </List>
        </Grid>

        {/* Fourth Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon />
            <Typography>+1 (234) 567-890</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
