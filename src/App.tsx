import { BrowserRouter } from "react-router";

import Layout from "@components/Layout";
import Router from "@routes/Router";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
