import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {createStore} from 'redux'
import {reducers} from './store/store.js'
import {Provider} from 'react-redux'

const store = createStore(reducers)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
