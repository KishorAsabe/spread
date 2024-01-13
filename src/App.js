
import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const [data, setData] = useState([
    [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "" }],
    [{ value: "Strawberry" }, { value: "Cookies" }, { value: "" }],
    [{ value: "Vanilla" }, { value: "Chocolate" }, { value: "" }],
    [{ value: "Strawberry" }, { value: "Cookies" }, { value: "" }]
  ]);
  return <Spreadsheet data={data} onChange={setData} />;
};

export default App