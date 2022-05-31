import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "./store";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

// Pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
