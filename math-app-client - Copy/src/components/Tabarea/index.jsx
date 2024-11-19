import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import tab2 from '../../assets/tab2.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function StyledTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#FDF6F0", height: "100vh", p: 4 }}
    >
      {/* Tabs Container */}
      <Box
        sx={{
          width: "50%",
          border: 1,
          borderRadius: 3,
          borderColor: "black",
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              color: "black",
              borderRadius: 2,
              transition: "0.3s",
              minWidth: "120px",
            },
            "& .MuiTab-root:hover": {
              backgroundColor: "#FF6D25",
              color: "white",
            },
            "& .Mui-selected": {
              backgroundColor: "#FF6D25",
              color: "white",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="S2 3-4 Years Old" />
          <Tab label="S3 5 Years Old" />
          <Tab label="S4 6 Years Old" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Content for S2 (3-4 Years Old)</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
                        component="img"
                        src={tab2}
                        alt="hero Image"
                        width='100%'
                        height="auto"
                             
                    />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6">Content for S4 (6 Years Old)</Typography>
      </TabPanel>
    </Box>
  );
}
