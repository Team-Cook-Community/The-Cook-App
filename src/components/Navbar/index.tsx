import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import SiteBrand from "@assets/brand/brand.svg?react";
import { CaretLeftIcon, DotsThreeIcon } from "@phosphor-icons/react";

import { useLocation, useNavigate } from "react-router";

function navbarSelector(location: string) {
  const navbarMap = [
    {
      regex: /recipe\/.*/,
      navbarContent: () => <RecipePageNavbarContent />,
    },
    {
      regex: /add-recipe/,
      navbarContent: () => <NavbarWithGoBackButton />,
    },
  ];

  const matched = navbarMap.find(({ regex }) => regex.test(location));

  return matched?.navbarContent() ?? <MainNavbarContent />;
}

function GoBackButton({ size }: any) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <button className="cursor-pointer" onClick={handleOnClick}>
      <CaretLeftIcon weight="bold" size={size} />
    </button>
  );
}

function MoreButton({ size }: any) {
  return (
    <button className="cursor-pointer">
      <DotsThreeIcon weight="bold" size={size} />
    </button>
  );
}

function MainNavbarContent() {
  return (
    <NavbarBrand>
      <SiteBrand className="w-[150px]" />
    </NavbarBrand>
  );
}

function NavbarWithGoBackButton({ children }: any) {
  return (
    <NavbarBrand>
      <NavbarContent>
        <NavbarItem className="flex items-center">
          <GoBackButton size={20} />
        </NavbarItem>
      </NavbarContent>
      {children}
    </NavbarBrand>
  );
}

function RecipePageNavbarContent() {
  return (
    <NavbarWithGoBackButton>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          <MoreButton size={27} />
        </NavbarItem>
      </NavbarContent>
    </NavbarWithGoBackButton>
  );
}

export default function NavigationBar() {
  const location = useLocation();
  const content = navbarSelector(location.pathname);

  return <Navbar className="border-b border-b-default-200">{content}</Navbar>;
}
