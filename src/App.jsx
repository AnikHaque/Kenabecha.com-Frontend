import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Router";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
