import { useMemo } from "react";
import { Link } from "react-router-dom";

import { routes } from "@routes/";
import type { IRouterConfig } from "../../types/router";

export default function MobileTabs() {
  const leftTabs: IRouterConfig[] = useMemo(
    routes.filter(
      (route: IRouterConfig) => route.path === "/" || route.path === "/search"
    ),
    [routes]
  );

  const rightTabs: IRouterConfig[] = useMemo(
    () =>
      routes.filter(
        (route: IRouterConfig) =>
          route.path === "/favorites" || route.path === "/profile"
      ),
    [routes]
  );

  const centerTab: IRouterConfig = useMemo(
    () => routes.find((route: IRouterConfig) => route.path === "/add-recipe"),
    [routes]
  );

  return (
    <nav>
      <ul>
        {leftTabs.map((route: IRouterConfig) => (
          <li key={route.title}>
            <Link to={route.path}>{route.icon && <route.icon />}</Link>
          </li>
        ))}
        {centerTab && (
          <li>
            <Link to={centerTab.path}>
              {centerTab.icon && <centerTab.icon />}
            </Link>
          </li>
        )}
        {rightTabs.map((route: IRouterConfig) => (
          <li key={route.title}>
            <Link to={route.path}>{route.icon && <route.icon />}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
