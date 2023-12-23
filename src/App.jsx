import Display from "./components/Display";
import Nav from "./components/Nav";
import { useOptionContext } from "./context/UserContextApi";
function App() {
  const { dark } = useOptionContext();
  return (
    <>
      <div className={` min-h-[100vh] ${dark ? "dark2" : ""}`}>
        <Nav />
        <Display />
      </div>
    </>
  );
}

export default App;
