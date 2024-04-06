import "./App.css";
import DataTable from "./components/DataTable/DataTable";
import jsonData from "./components/DataTable/data.json";
function App() {
  const { users, products } = jsonData;

  return <DataTable data={users} />;
}

export default App;
