import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-950 py-5 h-screen">
      <Header />
      <div className="container mx-auto tetx-white">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
