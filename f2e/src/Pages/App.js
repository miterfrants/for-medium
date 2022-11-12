import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link className='link' to="articles">Articles</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
