import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ContractPage } from './components/contract';
import { FormForgotPass } from './components/form-forgot-pass/form-forgot-pass';
import { FormLogin } from './components/form-login'
import { FormRegister } from './components/form-register';
import { TermsPage } from './components/terms';
import { BookPage } from './pages/book';
import { Login } from './pages/login';
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
            <Route index={true} element={<Navigate to='/books/all'/>} />
            <Route path='/books/all' element={<BookPage/>} />
            <Route path='/books/:category' element={<BookPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/contract' element={<ContractPage />} />
          </Route>
          <Route element={<Login/>} > 
            <Route path='/auth' element={<FormLogin/>}/>
            <Route path='/registration' element={<FormRegister/>} />
            <Route path='/forgot-pass' element={<FormForgotPass/>} />
          </Route>
          <Route path='/books/:category/:bookId' element={<BookPage />} />
        </Routes>
      </HashRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
