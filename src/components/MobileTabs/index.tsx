import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { routes } from "@routes/routerConfig";
import type { IRouterConfig } from "../../types/router";

export function MobileTabContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav>
      <ul className="flex justify-between">{children}</ul>
    </nav>
  );
}

export function MobileTabItem({
  route,
  active,
  callback,
}: {
  route: IRouterConfig;
  active: boolean;
  callback?: (tabPath: string) => void;
}) {
  return (
    <li onClick={() => callback && callback(route.path)}>
      <Link to={route.path} className="flex flex-col items-center gap-1">
        {route.icon && (
          <route.icon size={30} weight={active ? "fill" : "regular"} />
        )}
        <span className="text-xs">{route.title}</span>
      </Link>
    </li>
  );
}

export default function MobileTabs() {
  const leftTabs: IRouterConfig[] = useMemo(
    () =>
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

  const pathname = window.location.pathname;

  const [activeTab, setActiveTab] = useState(pathname);

  const handleTabClick = (tabPath: string) => setActiveTab(tabPath);

  return (
    <MobileTabContainer>
      {leftTabs.map((route: IRouterConfig) => (
        <MobileTabItem
          key={route.title}
          route={route}
          active={activeTab === route.path}
          callback={handleTabClick}
        />
      ))}
      {centerTab && (
        <MobileTabItem
          route={centerTab}
          active={activeTab === centerTab.path}
          callback={handleTabClick}
        />
      )}
      {rightTabs.map((route: IRouterConfig) => (
        <MobileTabItem
          key={route.title}
          route={route}
          active={activeTab === route.path}
          callback={handleTabClick}
        />
      ))}
    </MobileTabContainer>
  );
}
