import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Perguntas from "./pages/Perguntas";

function App() {
  return (
    <QuestionsContextProvider>
      <BrowserRouter>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/perguntas' component={Perguntas} />
      </BrowserRouter>
    </QuestionsContextProvider>
  );
}

export default App;
