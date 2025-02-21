"use client"
import Image from "next/image"
import logo from "@/assets/logos/logo.png"
import { Icon } from '@iconify/react'
import { useState } from "react"
import { usePathname } from "next/navigation"
import { 
    MenuBarContainer,
    HeadSection,
    MenuSection,
    LogoutItem,
    MenuTitle,
    MenuItem
} from "./MenuBar.styles"


const MenuBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const pathname = usePathname()

    const menuJsx = menudata.map(el => (
        <MenuItem 
            href={el.path} key={el.id}
            isActive={pathname === el.path}
        >
            <Icon icon={el.icon} />
            {isOpen && <p>{el.name}</p>}
        </MenuItem>
    ))

    const accountJsx = accountData.map(el => (
        <MenuItem
            href={el.path} key={el.id}
            isActive={pathname === el.path}
        >
            <Icon icon={el.icon} />
            {isOpen && <p>{el.name}</p>}
        </MenuItem>
    ))

 return (
    <MenuBarContainer>
        <HeadSection>
            <Image src={logo} alt="logo" />
            {isOpen && <span>Upstat</span>}
            <Icon 
                icon={`ri:arrow-${isOpen ? "left" : "right"}-double-line`}
                onClick={() => setIsOpen(!isOpen)}
                style={{cursor: "pointer"}}
            />
        </HeadSection>
        <MenuSection>
            <MenuTitle>MENU</MenuTitle>
            {menuJsx}
        </MenuSection>
        <MenuSection>
            <MenuTitle>ACCOUNTS</MenuTitle>
            {accountJsx}
        </MenuSection>
        <MenuSection>
            <LogoutItem href="/signup">
                <Icon icon="majesticons:login" />
                {isOpen && <p>Log in</p>}
            </LogoutItem>
        </MenuSection>
    </MenuBarContainer>
 )
}

const menudata: {
    id: number,
    icon: string,
    name: string,
    path: string,
}[] = [
    {
        id: 0,
        icon: "material-symbols:dashboard",
        name: "Dashboard",
        path:"/"
    },
    {
        id: 1,
        icon: "ph:traffic-sign-fill",
        name: "Traffic",
        path:"/traffic"
    },
    {
        id: 2,
        icon: "bxs:hourglass",
        name: "Uptime",
        path:"/uptime"
    },

    {
        id: 3,
        icon: "mingcute:time-fill",
        name: "Page Load Time",
        path:"/pageloadtime"
    },
    {
        id: 4,
        icon: "mdi:analytics",
        name: "SEO Metrics",
        path:"/seo"
    },
    {
        id: 5,
        icon: "fluent:arrow-bounce-16-filled",
        name: "Bounce Rate",
        path:"/bounce"
    },
    {
        id: 6,
        icon: "material-symbols:error",
        name: "Error Rate",
        path:"/error"
    }
]

const accountData: {
    id: number,
    icon: string,
    name: string,
    path: string,
}[] = [
    {
        id: 1,
        icon: "icon-park-solid:setting",
        name: "Settings",
        path:"/settings"
    },
    {
        id: 2,
        icon: "mdi:help-box",
        name: "Help Center",
        path:"/help"
    },
]

export default MenuBar