import logo from './logo.svg';
import './App.css';
import { useDispatch } from "react-redux";
import { setSnackbar } from './store/ducks/snackbar';
import SnackbarEx from './components/SnackbarEx';
import { Button } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(
      setSnackbar(
        true,
        "success",
        "Success Message!"
      ));
  }

  return (
    <div className="App">
      <SnackbarEx />
      <Button variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Apply
      </Button>
    </div>
  );
}

export default App;
