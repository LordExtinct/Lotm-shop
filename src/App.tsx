import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserAuth } from "./shared/api/auth/userAuth";
import MainPageFast from "./pages/main";
import PageButRegistration from "./pages/pageButRegistration";
import { CartComponent } from "./pages/cart/components/cartComponent";
import { CartDetail } from "./pages/detailTitle";
import { PersonInfo } from "./pages/personal/user-account/person-info";
import { EditUser } from "./pages/personal/edit-users/edit-user-profile";
import { ProtectedRoute } from "./shared/components/protected-route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageFast />} />
        <Route path="/main" element={<PageButRegistration />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/basket" element={<CartComponent />} />
        <Route path="/product/:id" element={<CartDetail />} />
        <Route path="/lxrd" element={<PersonInfo />} />
        <Route
          path="/edit"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
