import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// import configureStore
import './index.css';
import App from './App';
// import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context'
import configureStore from './hooks-store/products-store';

// const rootReducer = combineReducers({
//   shop: productReducer
// }); 

// const store = createStore(rootReducer);

configureStore();
ReactDOM.render(
  // <Provider store={store}>
    // <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    // </ProductsProvider>,
  // </Provider>,
  document.getElementById('root')
);
