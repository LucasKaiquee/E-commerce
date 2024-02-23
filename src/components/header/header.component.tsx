"use client"

import { BsCart3 } from "react-icons/bs"

import { HeaderContainer, HeaderTitle, HeaderItem, HeaderItems } from "./header.styles"

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderTitle>LK STORE</HeaderTitle>
            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem> 
                <HeaderItem>Login</HeaderItem>
                <HeaderItem>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p className="ml-1">5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
} 