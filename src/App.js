import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/routing/Layout";
import DataTableMain from "./components/DataTable/DataTableMain";
import AutocompleteCompo from "./components/autocomplete/AutocompleteCompo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Layout />} /> */}
            <Route path="DataTableMain" element={<DataTableMain />} />
            <Route path="AutocompleteCompo" element={<AutocompleteCompo />} />

            {/* <Route path="*" element={<NoPage />} />  */}
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
