import { useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { routes } from "@routes/routerConfig";
import type { IRouterConfig } from "../../types/router";

export function MobileTabContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="px-5 pb-7 pt-3">
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
          <route.icon size={25} weight={active ? "fill" : "regular"} />
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

  const location = useLocation();

  const pagesWithoutTabs = [/recipe\/.*/];
  const hideTabs = pagesWithoutTabs.some((page) =>
    page.test(location.pathname)
  );

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => setActiveTab(location.pathname), [location]);

  const handleTabClick = (tabPath: string) => setActiveTab(tabPath);

  if (hideTabs) return null;

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
