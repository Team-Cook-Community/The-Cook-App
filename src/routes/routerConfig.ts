import Home from "@pages/Home";
import Search from "@pages/Search";
import Profile from "@pages/Profile";
import Favorites from "@pages/Favorites";
import AddRecipe from "@pages/AddRecipe";
import Recipe from "@pages/Recipe";
import NotFound from "@pages/NotFound";

import type { IRouterConfig } from "../types/router";

import {
  HouseIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  BookmarkSimpleIcon,
  UserIcon,
} from "@phosphor-icons/react";

export const routes: IRouterConfig[] = [
  {
    path: "/",
    element: Home,
    title: "Home",
    icon: HouseIcon,
  },
  {
    path: "/search",
    element: Search,
    title: "Search",
    icon: MagnifyingGlassIcon,
  },
  {
    path: "/add-recipe",
    element: AddRecipe,
    title: "Add Recipe",
    icon: PlusCircleIcon,
  },
  {
    path: "/favorites",
    element: Favorites,
    title: "Favorites",
    icon: BookmarkSimpleIcon,
  },
  {
    path: "/profile",
    element: Profile,
    title: "Profile",
    icon: UserIcon,
  },
  {
    path: "/recipe/:id",
    element: Recipe,
    title: "Recipe",   
  },
  {
    path: "*",
    element: NotFound,
    title: "404",
  },
];
