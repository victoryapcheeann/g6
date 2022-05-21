import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import PageOne from './pages/page1/page1';
import PageTwo from './pages/page2/page2';
import PageThree from './pages/page3/page3';
import PageFour from './pages/page4/page4';
import PageFive from './pages/page5/page5';
import PageSix from './pages/page6/page6';
import PageSeven from './pages/page7/page7';
import Page8 from './pages/page8/page8';
import Page9 from './pages/page9/page9';
import Page10 from './pages/page10/page10';
import Page11 from './pages/page11/page11';
import Page12 from './pages/page12/page12';
import Page13 from './pages/page13/page13';

function App() {
  function Layout() {
    return (
      <div>
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav>
            <div className='container' style={{display:'flex', flexDirection:'row', maxWidth: '100vw', flexWrap:'wrap'}}>
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
              <div>
                <Link to="/PageSix">Donut Transfer</Link>
              </div>
              <div>
                <Link to="/PageSeven">Custom Category Graph</Link>
              </div>
              <div>
                <Link to="/Page8">Node Animation</Link>
              </div>
              <div>
                <Link to="/Page9">Edge Animation</Link>
              </div>
              <div>
                <Link to="/Page10">Arrow Type</Link>
              </div>
              <div>
                <Link to="/Page11">Chart</Link>
              </div>
              <div>
                <Link to="/Page12">Tooltip</Link>
              </div>
              <div>
                <Link to="/Page13">Final Example</Link>
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
          <Route path="PageSix" element={<PageSix />} />
          <Route path="PageSeven" element={<PageSeven />} />
          <Route path="Page8" element={<Page8 />} />
          <Route path="Page9" element={<Page9 />} />
          <Route path="Page10" element={<Page10 />} />
          <Route path="Page11" element={<Page11 />} />
          <Route path="Page12" element={<Page12 />} />
          <Route path="Page13" element={<Page13 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
