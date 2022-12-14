import { createContext, useReducer } from "react";
import IpMap from "./Components/IpMap";
import SearchBar from "./Components/SearchBar";
import "../node_modules/leaflet/dist/leaflet.css";

export const AppContext = createContext();
function App() {
  const initialState = {
    data: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "getdata":
        return {
          ...state,
          data: action.payload,
        };
      default:
        throw new Error("Action Type not defined");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <main>
        <SearchBar />
        <IpMap />
      </main>
    </AppContext.Provider>
  );
}

export default App;
