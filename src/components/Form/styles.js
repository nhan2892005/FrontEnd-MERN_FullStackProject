
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    borderRadius: 5,
  },
  buttonSubmit: {
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#00c853',
  },
  buttonInputFile: {
    borderRadius: 15,
    backgroundColor: '#00c853',
  },
  buttonClear: {
    borderRadius: 15,
    backgroundColor: '#f44336',
  },
}));
