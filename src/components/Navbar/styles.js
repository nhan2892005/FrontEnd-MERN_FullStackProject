import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    // responsive
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      padding: '10px 20px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0',
      padding: '10px 20px',
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  image: {
    marginLeft: '15px',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      display: 'contents',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100px',
      display: 'block',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      display: 'contents',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100px',
      display: 'ruby',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '50%',
      alignSelf: 'start',
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    margin: '0 30px',
    [theme.breakpoints.down('xs')]: {
      width: '30px',
      height: '30px',
    },
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      alignSelf: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  logout: {
    margin: '0 10px',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },
}));
