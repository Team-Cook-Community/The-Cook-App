import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import SiteBrand from "@assets/brand/brand.svg?react";
import { CaretLeftIcon, DotsThreeIcon, GearIcon } from "@phosphor-icons/react";

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
    {
      regex: /profile/,
      navbarContent: () => <ProfilePageNavbarContent />,
    },
  ];

  const matched = navbarMap.find(({ regex }) => regex.test(location));

  return matched?.navbarContent() ?? <NavbarWithBrand />;
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

function IconButton({ children }: any) {
  return <button className="cursor-pointer">{children}</button>;
}

function MoreButton({ size }: any) {
  return (
    <IconButton>
      <DotsThreeIcon weight="bold" size={size} />
    </IconButton>
  );
}

function SettingButton({ size }: any) {
  return (
    <IconButton>
      <GearIcon size={size} />
    </IconButton>
  );
}

function NavbarWithBrand({ children }: any) {
  return (
    <>
      <NavbarBrand>
        <SiteBrand className="w-[150px]" />
      </NavbarBrand>
      {children}
    </>
  );
}

function NavbarWithGoBackButton({ children }: any) {
  return (
    <>
      <NavbarContent>
        <NavbarItem className="flex items-center">
          <GoBackButton size={20} />
        </NavbarItem>
      </NavbarContent>
      {children}
    </>
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

function ProfilePageNavbarContent() {
  return (
    <NavbarWithBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          <SettingButton size={27} />
        </NavbarItem>
      </NavbarContent>
    </NavbarWithBrand>
  );
}

export default function NavigationBar() {
  const location = useLocation();
  const content = navbarSelector(location.pathname);

  return <Navbar className="border-b border-b-default-200">{content}</Navbar>;
}
