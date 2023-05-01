import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile/:username" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
