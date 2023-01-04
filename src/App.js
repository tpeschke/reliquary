import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UniqueItems from './components/UniqueItems'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className="tab-menu">
        <h1>Bonfire Reliquary</h1>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Unique Items" {...a11yProps(0)} />
            <Tab label="Relics" {...a11yProps(1)} />
            <Tab label="Enchanted Items" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </div>
      <TabPanel value={value} index={0}>
        <UniqueItems />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Relics (under construction)
      </TabPanel>
      <TabPanel value={value} index={2}>
        Enchanted Items (under construction)
      </TabPanel>
    </div>
  );
}

export default App;
