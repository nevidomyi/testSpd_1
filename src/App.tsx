import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { RecoilRoot } from "recoil";
import APIProvider from "./api/API";

function App() {
  return (
    <APIProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </APIProvider>
  );
}

export default App;
