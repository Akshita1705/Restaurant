import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantInfo from './pages/RestaurantInfo.jsx';
import OnlineOrder from './pages/OnlineOrder.jsx';
import Submitted from './pages/Submitted.jsx';
import Navbar from './components/Navbar.jsx';
import AuthContainer from './pages/AuthContainer.jsx';
import HeroSection from './components/HeroSection.jsx';
import RequirementsSection from './components/RequirementSection.jsx';

import './App.css'
import './css/Forms.css'; // Add this import
import RegistrationInformation from './components/RegistrationInfo.jsx';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={
          <>

            <HeroSection />
            <RequirementsSection />
          </>
        } />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/restaurant-info" element={<RestaurantInfo />} />


        <Route path="/onboarding" element={<Submitted />} />
        <Route path="/online" element={<OnlineOrder />} />

      </Routes>


      {/*<AuthContainer></AuthContainer>*/}
    </>
  )
}

export default App