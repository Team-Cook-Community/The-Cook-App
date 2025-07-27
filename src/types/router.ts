import type { ComponentType } from "react";

export interface IRouterConfig {
    path: string;
    element: ComponentType;
    title: string;
    icon?: any;
}