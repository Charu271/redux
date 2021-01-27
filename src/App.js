import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import CustomcakeContainer from "./components/CustomcakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/userContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <CustomcakeContainer />
      </div>
    </Provider>
  );
}

export default App;
