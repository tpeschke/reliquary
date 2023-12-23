import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UniqueItems from './components/uniqueItems/UniqueItems'
import Potions from './components/potions/Potions'
import EnchantedItems from './components/enchantedItems/EnchantedItems'
import Talismans from './components/talismans/Talismans'
import Scrolls from './components/scrolls/Scrolls'
import { styled } from '@mui/material/styles';
import WhiteFire from './assets/WhiteFire.png'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

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

  useEffect(() => {
      const splitUrl = window.location.href.split('/')
      if (splitUrl.length > 3) {
        if (splitUrl[3] === 'potions') {
          a11yProps(1)
          setValue(1);
        } else if (splitUrl[3] === 'talismans') {
          a11yProps(2)
          setValue(2);
        } else if (splitUrl[3] === 'scrolls') {
          a11yProps(3)
          setValue(3);
        } else if (splitUrl[3] === 'enchanted') {
          a11yProps(4)
          setValue(4);
        }
      }
  }, [])

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
            <StyledTab label="Scrolls" {...a11yProps(3)} />
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
        <Talismans />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Scrolls />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <EnchantedItems />
      </TabPanel>
      <Toaster position="top-right"/>
    </div>
  );
}

export default App;
