"use client"

//Utils

import { useRouter } from "next/navigation"

//Icons
import { BsCart3 } from "react-icons/bs"

//Style
import { HeaderContainer, HeaderTitle, HeaderItem, HeaderItems } from "./header.styles"

export default function Header() {

    const router = useRouter()

    const handleLoginClick = () => {
        router.push("./login")
    }

    const handleCreateAccountClick = () => {
        router.push("./sign-up")
    }

    return (
        <HeaderContainer>
            <HeaderTitle onClick={() => router.push("./")}>LK STORE</HeaderTitle>
            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem> 
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem onClick={handleCreateAccountClick}>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p className="ml-1">5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
} 