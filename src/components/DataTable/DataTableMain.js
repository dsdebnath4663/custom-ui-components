import React from "react";
// import "./css/DataTable.css"; // Import CSS file for styles

const DataTable = ({ data }) => {
  return (
    <div className="data-table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DataTableMain = () => {
  const jsonData = [
    { id: 1, name: "Alice", age: 30, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 25, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
    { id: 4, name: "David", age: 40, email: "david@example.com" },
  ];

  return (
    <div className="app">
      <h1>Data Table Example</h1>
      <DataTable data={jsonData} />
    </div>
  );
};

export default DataTableMain;
