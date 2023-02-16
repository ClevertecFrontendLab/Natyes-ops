import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ContractPage } from './components/contract';
import { MenuList } from './components/menu';
import { TermsPage } from './components/terms';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { store } from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<MainPage />} >
            <Route path='/' element={<MenuList to='/books/all'/>} />
            <Route path='/books/:category' element={<BookPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/contract' element={<ContractPage />} />
          </Route>
          <Route path='/books/:category/:bookId' element={<BookPage />} />
        </Routes>
      </HashRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
