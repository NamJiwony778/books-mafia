import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignUpPage from "./pages/Sign-up-page";
import SignInPage from "./pages/Sign-in-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/sign-up" element={<SignUpPage/>} />
        <Route exact path="/sign-in" element={<SignInPage/>} />
        <Route path="/" element={<Navigate replace to="/sign-up" />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
