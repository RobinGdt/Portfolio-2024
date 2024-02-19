import "./App.css";
import Home from "./components/Home/Home";
import GlobalStyle from "./GlobalStyle";
import Typography from "./utils/Typography";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Typography />
      <Home />
    </div>
  );
}

export default App;
