import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <Routes>
        {
          publicRoutes.map((route, index)=>{
            const Layout = route.layout===undefined?DefaultLayout:(route.layout===null?Fragment:route.layout);
            const Page = route.component;
            return <Route

              path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              }>


            </Route>
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
