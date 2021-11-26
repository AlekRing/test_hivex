import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./UI/pages/loginPage/LoginPage";
import { persistor, store } from "./services/store";

import "./App.css";
import Console from "./UI/pages/consolePage";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}> 
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/console" element={<Console />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
