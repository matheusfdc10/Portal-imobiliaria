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
import Tela2Page from "../pages/Tela2Page";

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
            <Route
                path="/"
                element={
                    <Private>
                        <MainPage />
                    </Private>}
                >
                <Route path="/home" element={<HomePage />} />
                <Route path="/tela2" element={<Tela2Page />} />
            </Route>
            </Routes>
        </AuthProvider>
    </Router>
  );
}