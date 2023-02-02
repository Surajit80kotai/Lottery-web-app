import { Routes, Route } from 'react-router-dom'
import Home from './USER/pages/Home';
import NavBar from './USER/components/common/navigationBar/NavBar';
import FooterMain from './USER/components/common/footer/FooterMain';
import LotteryInfo from './USER/pages/LotteryInfo';
import ViewAllHome from './USER/components/core/viewAllLottery/ViewAllHome';
import ViewAllCars from './USER/components/core/viewAllLottery/ViewAllCars';
import PrivateRoute from './USER/privateroute/PrivateRoute';
import Profile from './USER/pages/Profile';
import Cart from './USER/pages/Cart';
import PlaceOrder from './USER/pages/PlaceOrder';
import Contact from './USER/pages/Contact';
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import TestFive from './USER/pages/test/TestFive';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/contact' element={<Contact />} />
        <Route path='/info/:lid' element={<LotteryInfo />} />
        <Route path='/viewallhome' element={<ViewAllHome />} />
        <Route path='/viewallcars' element={<ViewAllCars />} />
        {/* <Route path='/test' element={<TestFive />} /> */}
        {/* Private Route Part */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Route>
      </Routes>
      <FooterMain />
      <ToastContainer style={{ "fontSize": "16px" }} transition={Flip} position="top-center" />
    </div>
  );
}

export default App;
