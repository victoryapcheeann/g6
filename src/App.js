import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import PageOne from './pages/page1/page1';
import PageTwo from './pages/page2/page2';
import PageThree from './pages/page3/page3';
import PageFour from './pages/page4/page4';
import PageFive from './pages/page5/page5';

function App() {
  function Layout() {
    return (
      <div>
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav>
            <div className='container' style={{display:'flex', flexDirection:'row'}}>
              <div>
                <Link to="/PageOne">Sample</Link>
              </div>
              <div>
                <Link to="/PageTwo">Money Diagram (Bug)</Link>
              </div>
              <div>
                <Link to="/PageThree">Fruchterman with Clustering</Link>
              </div>
              <div>
                <Link to="/PageFour">Tree Diagram</Link>
              </div>
              <div>
                <Link to="/PageFive">Knowledge Tree Graph</Link>
              </div>
            </div>
          </nav>
  
          <hr />
  
          {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
          <Outlet />
      </div>
    );
  }

  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<PageOne />} />
          <Route path="PageOne" element={<PageOne />} />
          <Route path="PageTwo" element={<PageTwo />} />
          <Route path="PageThree" element={<PageThree />} />
          <Route path="PageFour" element={<PageFour />} />
          <Route path="PageFive" element={<PageFive />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
