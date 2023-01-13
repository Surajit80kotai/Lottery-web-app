import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/common/navigationBar/NavBar';
import FooterMain from './components/common/footer/FooterMain';
import LotteryInfo from './pages/LotteryInfo';
import UserDashBoard from './pages/UserDashBoard';
import ViewAllHome from './components/core/viewAllLottery/ViewAllHome';
import ViewAllCars from './components/core/viewAllLottery/ViewAllCars';
// import Test from './pages/Test';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info/:lid' element={<LotteryInfo />} />
        <Route path='/dashboard' element={<UserDashBoard />} />
        <Route path='/viewallhome' element={<ViewAllHome />} />
        <Route path='/viewallcars' element={<ViewAllCars />} />
      </Routes>
      <FooterMain />
      {/* <Test/> */}
    </div>
  );
}

export default App;
