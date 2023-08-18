import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='bg-blue-200'>
      
      <div className=''>
      <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
