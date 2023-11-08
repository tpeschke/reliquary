import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UniqueItems from './components/uniqueItems/UniqueItems'
import Potions from './components/potions/Potions'
import { styled } from '@mui/material/styles';
import ConstructionIcon from '@mui/icons-material/Construction';
import WhiteFire from './assets/WhiteFire.png'

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#f5f5f5',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#f5f5f5',
    fontFamily: 'Ancient',
    fontSize: '18px',
    '&.Mui-selected': {
      color: '#f5f5f5 ',
      fontFamily: 'Ancient',
      fontSize: '18px'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

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
        <div className='title-shell'>
          <img src={WhiteFire} alt="Bonfire Logo" width="50" height="50" />
          <h1>Bonfire Reliquary</h1>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <StyledTab label="Unique Items" {...a11yProps(0)} />
            <StyledTab label="Potions/Salves" {...a11yProps(1)} />
            <StyledTab label="Talismans" {...a11yProps(2)} />
            <StyledTab label="Relics" {...a11yProps(3)} />
            <StyledTab label="Enchanted Items" {...a11yProps(4)} />
          </StyledTabs>
        </Box>
      </div>
      <TabPanel value={value} index={0}>
        <UniqueItems />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Potions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='construction-shell'>
          <div className='construction-title'>
            <ConstructionIcon />
            <h3>Talismans</h3>
            <ConstructionIcon />
          </div>
          (under construction)
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className='construction-shell'>
          <div className='construction-title'>
            <ConstructionIcon />
            <h3>Relics</h3>
            <ConstructionIcon />
          </div>
          (under construction)
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className='construction-shell'>
          <div className='construction-title'>
            <ConstructionIcon />
            <h3>Enchanted Items</h3>
            <ConstructionIcon />
          </div>
          (under construction)
        </div>
      </TabPanel>
    </div>
  );
}

export default App;
