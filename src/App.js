import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/common/navigationBar/NavBar';
import FooterMain from './components/common/footer/FooterMain';
import LotteryInfo from './pages/LotteryInfo';
import UserDashBoard from './pages/UserDashBoard';
import ViewAllHome from './components/core/viewAllLottery/ViewAllHome';
import ViewAllCars from './components/core/viewAllLottery/ViewAllCars';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import PrivateRoute from './privateroute/PrivateRoute';
// import Test from './pages/Test';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/info/:lid' element={<LotteryInfo />} />
        <Route path='/viewallhome' element={<ViewAllHome />} />
        <Route path='/viewallcars' element={<ViewAllCars />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<UserDashBoard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Route>
      </Routes>
      <FooterMain />
      {/* <Test/> */}
    </div>
  );
}

export default App;
