import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContentManagement from "./pages/ContentManagement/ContentManagement";
import MonitoringContent from "./pages/MonitoringContent/MonitoringContent";
import AccountUsers from "./pages/AccountUsers/AccountUsers";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="content-management" element={<ContentManagement />} />
        <Route path="monitoring-content" element={<MonitoringContent />} />
        <Route path="account-users" element={<AccountUsers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
