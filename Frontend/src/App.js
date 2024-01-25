import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./LoginPage/login";
import { RegisterPage } from "./Register/register";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}