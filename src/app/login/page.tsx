"use client"

import Header from "@/components/header/header.component"
import CustomButton from "@/components/custom-button/custom-button.component"

import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles"

import { BsGoogle } from "react-icons/bs"
import { FiLogIn } from "react-icons/fi"

export default function LoginPage() {

    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>

                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton startIcon={<BsGoogle size={20}/>}>Entar com o google</CustomButton>

                    <LoginSubtitle>ou entre com  seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        {/* Email Input */}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        {/* password */}
                    </LoginInputContainer>
                    <CustomButton startIcon={<FiLogIn size={20}/>}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>

    )
}