import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRouter from "./routes/Admin";
import UserRouter from "./routes/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<UserRouter />}></Route>
        <Route path="/admin/*" element={<AdminRouter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
