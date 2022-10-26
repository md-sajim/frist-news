
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routs } from './routs/Routs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routs}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
