import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";
import AddItems from "./pages/AddItems/AddItems";
import Items from "./pages/Items/Items";
import ShowItem from "./pages/ShowItem/ShowItem";
import EditItem from "./pages/EditItem/EditItem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/Add" element={<AddItems />} />
        <Route path="/item/:id" element={<ShowItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </>
  );
}

export default App;
