import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Home from "./Pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Login from "./Pages/Login/Login";
import "./styles/global.scss";
import User from "./Pages/User/User";
import Product from "./Pages/Product/Product";




function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>

          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/users",
          element: <Users />,
        },

        {
          path: "/products",
          element: <Products />,
        },

        {
          path: "/users/:id",
          element: <User />,
        },

        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },

    {
      path : "/login",
      element : <Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
