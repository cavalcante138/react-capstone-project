import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import "./utils.scss";
import "./app.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { BookingPage } from "./pages/BookingPage";

function App() {
  return (
    <Router>
    <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/booking" component={BookingPage} />
    <Footer />
    </Router>
  );
}

export default App;
