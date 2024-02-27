"use client"

import Header from "@/components/header/header.component"
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles"

export default function LoginPage() {

    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    {/* {button} */}
                    <LoginSubtitle>ou entre com  seu e-mail</LoginSubtitle>
                    <LoginInputContainer>
                        {/* Email Input */}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        {/* password */}
                    </LoginInputContainer>
                    {/* Button */}
                </LoginContent>
            </LoginContainer>
        </>

    )
}