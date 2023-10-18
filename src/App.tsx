import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { BttnCreate } from "./components/BttnCreate";
import { BttnDelete } from "./components/BttnDelete";
import { Checkbox } from "./components/Checkbox";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Input />
      <BttnCreate />
      <BttnDelete />
      <Checkbox />
    </div>
  )
}
