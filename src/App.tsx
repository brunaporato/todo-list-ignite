import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { BttnCreate } from "./components/BttnCreate";
import { BttnDelete } from "./components/BttnDelete";
import { Task } from "./components/Task";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Input />
      <BttnCreate />
      <BttnDelete />
      <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
    </div>
  )
}
