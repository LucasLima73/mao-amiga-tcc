import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("I'm a toast message.");

export const Customtoaster = () => {
  return (
    <>
      <button className="btn btn-primary btn-wave" id="toast-button" onClick={notify}>Click For Live Toast</button>
      <ToastContainer />
    </>
  );
};