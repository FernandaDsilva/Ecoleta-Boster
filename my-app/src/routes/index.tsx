import React from 'react';
import { Route, Routes as BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import CreatePoint from '../pages/CreatePoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route index element={<Home />} />
      <Route path="/create-point" element={<CreatePoint />} />
    </BrowserRouter>
  );
};

export default Routes;