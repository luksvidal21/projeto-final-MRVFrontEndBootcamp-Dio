import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import BusinessIcon from '@material-ui/icons/Business';
import RouterIcon from '@material-ui/icons/Router';
import ComputerIcon from '@material-ui/icons/Computer';
import GridOnIcon from '@material-ui/icons/GridOn';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.bigSpace} color="primary">
             IPlus automações, o plus que falta a sua empresa!
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Oferecemos as melhores soluções para impulsionar sua empresa. Soluções automatizadas em diversas áreas e níveis empresáriais, sempre em busca da excelência nos processos do seu negócio. 
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#3E2723", height:"125", width:"125"}}/>}  title="Soluções de segurança" btnTitle="Mais Informações" />
          <Grid icon={<CloudDoneIcon style={{fill: "#3E2723", height:"125", width:"125"}}/>} title="Soluções na Nuvem" btnTitle="Mais Informações"/>
          <Grid icon={<BusinessIcon style={{fill: "#3E2723", height:"125", width:"125"}}/>}  title="Smart Business" btnTitle="Mais Informações"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<RouterIcon style={{fill: "#3E2723", height:"125", width:"125"}}/>}  title="Soluções Iot " btnTitle="Mais Informações"/>
          <Grid icon={<GridOnIcon style={{fill: "#3E2723", height:"125", width:"125"}}/>} title="Soluções com SmartGrid" btnTitle="Mais Informações"/>
          <Grid icon={<ComputerIcon style={{fill: "#3E2723", height:"125", width:"125"}}/>}  title="Soluções Web" btnTitle="Mais Informações"/>          
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
