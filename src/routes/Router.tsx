import { Routes, Route } from "react-router-dom";
import { routes } from "./routerConfig";

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.title}
          path={route.path}
          element={<route.element />}
        />
      ))}
    </Routes>
  );
}
