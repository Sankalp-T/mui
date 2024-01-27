import './App.css';
import { useDispatch } from "react-redux";
import { setSnackbar } from './store/ducks/snackbar';
import SnackbarEx from './components/SnackbarEx';
import { Button } from '@mui/material';

import { useSnackbar } from './hooks/useSnackBar';
import CustomizedSnackbar from './components/CustomizedSnackbar';

function App() {
  // using redux
  const dispatch = useDispatch();
  const handleClickRedux = (event) => {
    dispatch(
      setSnackbar(
        true,
        "success",
        "Snackbar using Redux"
      ));
  }

  // using custom hook
  const { isOpen, message, type, openSnackBar } = useSnackbar();
  const handleClickHook = (event) => {
    openSnackBar("Snackbar using custom hook", "error");
  }

  return (
    <div className="App">
      {/* using redux 
      you need to import it at the entry point of your application
      */}
      <div>
        <p>Snackbar using redux</p>
        <SnackbarEx />
        <Button variant="contained"
          color="primary"
          onClick={handleClickRedux}
        >
          Open Snackbar 1
        </Button>
      </div>

      {/*using custom hook
      you need to import snackbar in every component you want to use
      */}
      <div>
        <p>Snackbar using custom snackbar hook</p>
        <CustomizedSnackbar open={isOpen} message={message} type={type} />
        <Button variant="contained"
          color="primary"
          onClick={handleClickHook}
        >
          Open Snackbar 2
        </Button>
      </div>
    </div>
  );
}

export default App;
