
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/Signin";
import Navbar from "./components/Navbar";
import Tabarea from "./components/Tabarea";
import Footer from "./components/Footer";
import Drawer from "./components/DrawerComp";
import Register from "./components/Register";
import ProtectedRoutes from "./routes/ProtectedRoute";
import SessionlessRoutes from "./routes/SessionlessRoutes";



function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Home/>} />
            
          </Route>
          <Route element={<SessionlessRoutes />}>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/navbar' element={<Navbar />} />
            <Route path='/drawer' element={<Drawer />} />
            <Route path='/tabarea' element={<Tabarea />} />
            <Route path='/footer' element={<Footer />} />
            <Route
              path='/register'
              element={<Register />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
