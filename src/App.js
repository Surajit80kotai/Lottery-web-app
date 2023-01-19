import { Routes, Route } from 'react-router-dom'
import Home from './USER/pages/Home';
import NavBar from './USER/components/common/navigationBar/NavBar';
import FooterMain from './USER/components/common/footer/FooterMain';
import LotteryInfo from './USER/pages/LotteryInfo';
import ViewAllHome from './USER/components/core/viewAllLottery/ViewAllHome';
import ViewAllCars from './USER/components/core/viewAllLottery/ViewAllCars';
import PrivateRoute from './USER/privateroute/PrivateRoute';
import UserDashBoard from './USER/pages/UserDashBoard';
import Cart from './USER/pages/Cart';
import PlaceOrder from './USER/pages/PlaceOrder';
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
