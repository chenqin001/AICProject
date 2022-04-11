import './App.css';
import Upload from './components/Upload.js';
import Download from './components/Download';
import Settings from './components/Settings';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
      <AppBar position="static">
      <Toolbar>
      <CssBaseline />
      <Typography variant="h4">
          AIC Final Project 
        </Typography>
        <div className={classes.navlinks}>
            <Link to="/upload" className={classes.link}>Upload</Link>
            <Link to="/download" className={classes.link}>Download</Link>
            <Link to="/settings" className={classes.link}>Settings</Link>
        </div>
        </Toolbar>
        </AppBar>
      </div>
      <Routes>
          <Route path="/" element={<Navigate to="/Upload" />}/>
          <Route exact path='/upload' element={<Upload/>} />
          <Route path='/download' element={<Download/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
    </Router>
  );
}

export default App;
