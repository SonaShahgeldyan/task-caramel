import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/App.routs";
import { store } from "./store/index";
import { Provider as GlobalStateProvider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider store={store}>
        <AppRoutes />
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
