import { createContext, useReducer } from "react";
import SearchBar from "./Components/SearchBar";

export const AppContext = createContext();
function App() {
  const initialState = {
    ipData: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "getIpData":
        return {
          ...state,
          ipData: action.payload,
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
      </main>
    </AppContext.Provider>
  );
}

export default App;
