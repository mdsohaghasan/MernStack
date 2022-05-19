import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';
import MyItems from './Components/MyItems/MyItems';
import AddMyItem from './Components/MyItems/Add Item/AddMyItem';
import UpdateMyItem from './Components/MyItems/UpdateItem/UpdateMyItem';
import AddItem from './Components/Inventory/Add Item/AddItem';
import UpdateItem from './Components/Inventory/UpdateItem/UpdateItem';
import MyAccount from './Components/MyAccount/MyAccount';
// import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Signin" element={<Signin></Signin>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>

        {/* <Route path="/ItemDetails/:id" element={<UpdateItem></UpdateItem>}></Route>

        <Route path="/MyItemDetails/:id" element={<UpdateMyItem></UpdateMyItem>}></Route>

        <Route path="/myItems" element={<MyItems></MyItems>}></Route>

        <Route path="/additem" element={<AddItem></AddItem>}></Route>

        <Route path="/addmyitem" element={<AddMyItem></AddMyItem>}></Route> */}

        {/* hgfgh */}

        <Route path="/ItemDetails/:id" element={<RequireAuth><UpdateItem></UpdateItem></RequireAuth>}></Route>

        <Route path="/MyItemDetails/:id" element={<RequireAuth><UpdateMyItem></UpdateMyItem></RequireAuth>}></Route>

        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>

        <Route path="/additem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>

        <Route path="/addmyitem" element={<RequireAuth><AddMyItem></AddMyItem></RequireAuth>}></Route>

        <Route path="/MyAccount" element={<RequireAuth><MyAccount></MyAccount></RequireAuth>}></Route>

        {/* <Route path="/Checkout" element={
          <RequireAuth><Checkout></Checkout></RequireAuth>}></Route> */}
        <Route path="/*" element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
