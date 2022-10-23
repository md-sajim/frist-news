
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routs } from './routs/Routs';

function App() {
  return (
    <div>
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
