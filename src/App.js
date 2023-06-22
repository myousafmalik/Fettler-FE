import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Header from "./containers/Header/Header";
import Recommender from "./pages/Recommender/Recommender";
import Footer from "./containers/Footer/Footer";
import Register from "./pages/Register/Register";
import PublishRequest from "./pages/PublishRequest/PublishRequest";
import BrowseRequests from "./pages/BrowseRequests/BrowseRequests";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="" element={<Homepage />} />
              <Route exact path="/recommend" element={<Recommender />} />
              <Route path="/requests">
                <Route path="publish" element={<PublishRequest />} />
                <Route path="" element={<BrowseRequests />} />
              </Route>
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route path="*" element={<h1 className="fc">Not Found</h1>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
