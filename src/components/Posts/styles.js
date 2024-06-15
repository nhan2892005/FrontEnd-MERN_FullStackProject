import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  sayHello: {
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'red',
  },
}));
