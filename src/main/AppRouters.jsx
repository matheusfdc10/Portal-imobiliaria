import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import MainPage from ".";
import { AuthContext, AuthProvider } from "../contexts/auth";
import HomePage from "../pages/HomePage";
import BilletPage from "../pages/billetPage";
import BilletDetailsPage from "../pages/BilletDetailsPage";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes() {

    function Private({ children }) {
        const { authenticated } = useContext(AuthContext);
    
        if (!authenticated) {
          return <Navigate to="/login" />;
        }
    
        return children;
      }

  return (
    <Router>
        <AuthProvider>
            <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route
                path="/"
                element={
                    <Private>
                        <MainPage />
                    </Private>}
                >
                <Route path="/home" element={<HomePage />} />
                <Route path="/billet" element={<BilletPage />} />
                <Route path="/billet/details" element={<BilletDetailsPage />}/>
            </Route>
            </Routes>
        </AuthProvider>
    </Router>
  );
}