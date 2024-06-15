import {
  createBrowserRouter,
} from "react-router-dom";

//Main Pages
import Home from '../pages/Home';
import Explore from '../pages/Explore';

//Accounts Pages
import Login from '../pages/Account/Login';
import Register from '../pages/Account/Register';
import AccountSetting from '../pages/Account/AccountSetting';
import ForgotPassword from '../pages/Account/ForgotPassword';
import ItAccount from '../pages/Account/ItAccount';
import MyAccount from '../pages/Account/MyAccount';
import SettingPassword from '../pages/Account/SettingPassword';

//Movie Pages
import FilterMovies from '../pages/Movie/FilterMovies';
import MovieDetail from '../pages/Movie/MovieDetail';
import SavedMovie from '../pages/Movie/SavedMovie';

const router = createBrowserRouter([
    //Main Pages
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },

    //Movie Pages
    {
        path: "/filter-movies",
        element: <FilterMovies />,
    },
    {
        path: "/movie-detail",
        element: <MovieDetail />,
    },
    {
        path: "/saved-movie",
        element: <SavedMovie />,
    },

    //Account Pages
    {
        path: "/account-settings",
        element: <AccountSetting />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/it-account",
        element: <ItAccount />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/my-account",
        element: <MyAccount />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/setting-password",
        element: <SettingPassword />,
    },
]);

export default router;