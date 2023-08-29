import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
