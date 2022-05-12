import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import PageOne from './pages/page1/page1';
import PageTwo from './pages/page2/page2';
import PageThree from './pages/page3/page3';

function App() {
  function Layout() {
    return (
      <div>
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav>
            <ul>
              <li>
                <Link to="/PageOne">1</Link>
              </li>
              <li>
                <Link to="/PageTwo">2</Link>
              </li>
              <li>
                <Link to="/PageThree">3</Link>
              </li>
            </ul>
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
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<PageOne />} />
          <Route path="PageOne" element={<PageOne />} />
          <Route path="PageTwo" element={<PageTwo />} />
          <Route path="PageThree" element={<PageThree />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
