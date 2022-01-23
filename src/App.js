import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Navbar from './components/navbar/navbar';

import HomePage from './pages/home-page';
import HomePageLayout from './layouts/home-pagel-layout';
import LoginPage from './pages/login-page';
import ProductsPage from './pages/products-page';
import ResourcesPage from './pages/resources-page';
import BuyInstantlyPage from './pages/buy-instantly-page';
import NotFoundPage from './pages/not-found-page';
import SignUpPage from './pages/sign-up-page';

const App = () => {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="buy-now" element={<BuyInstantlyPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
};

export default App;
