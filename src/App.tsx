import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { QuestionsContextProvider } from "./context/QuestionsContext";
import Home from "./pages/Home";
import Perguntas from "./pages/Perguntas";
import Resultado from "./pages/Resultado";

function App() {
  return (
    <BrowserRouter>
      <QuestionsContextProvider>
        <Route path='/' component={Home} exact />
        <Route path='/perguntas/:quantity' component={Perguntas} />
        <Route path='/resultado' component={Resultado} />
      </QuestionsContextProvider>
    </BrowserRouter>
  );
}

export default App;
