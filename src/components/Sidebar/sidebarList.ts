import type { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";
import { RiHomeFill, RiSettings3Fill } from "react-icons/ri";

interface SidebarList{
    label : string,
    path : string,
    icon : IconType
}

export const sidebarList : SidebarList[] = [
    {label : 'Dashboard', path: '/', icon : RiHomeFill},
    {label : 'Product List', path: '/product-list', icon : FaStar },
    {label : 'Settings', path: '/settings', icon : RiSettings3Fill}
]