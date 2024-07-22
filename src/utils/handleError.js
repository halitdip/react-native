
import { setLogout } from '../redux/userSlice';

const handleError = (status,dispatch) => {

  if (status === 401) {
    dispatch(setLogout());
  }
};

export default handleError;