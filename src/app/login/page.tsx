"use client"

import Header from "@/components/header/header.component"
import CustomButton from "@/components/custom-button/custom-button.component"

import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles"

import { BsGoogle } from "react-icons/bs"
import { FiLogIn } from "react-icons/fi"
import { useForm } from "react-hook-form"
import isEmail from "validator/lib/isEmail"


import CustomInput from "@/components/custom-input/custom-input.component"
import InputErrorMessage from "@/components/input-error-message/input-error-message.component"

export default function LoginPage() {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm()

    const handleSubmitPress = (data: any) => {
        
    }

    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton 
                        startIcon={<BsGoogle size={20} />}>
                            Entar com o google
                    </CustomButton>

                    <LoginSubtitle>ou entre com  seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>Email</p>
                        <CustomInput 
                            hasError={!!errors?.email}
                            placeholder="Digite seu email" 
                            {...register('email', { required: true, validate: (value) => {
                                return isEmail(value)
                            }})} 
                        />

                        {errors?.email?.type === "required" && (
                            <InputErrorMessage>
                                o email é obrigatório.
                            </InputErrorMessage>
                        )}

                        {errors?.email?.type === "validate" && (
                            <InputErrorMessage>
                                Por favor, insira um email válido.
                            </InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput 
                            hasError={!!errors?.password}
                            placeholder="Digite sua senha" 
                            type="password"
                            {...register('password', { required: true })} 
                        />

                        {errors?.password?.type === "required" && (
                            <InputErrorMessage>
                                A senha é obrigatória.
                            </InputErrorMessage>

                        )}
                    </LoginInputContainer>

                    <CustomButton 
                        startIcon={<FiLogIn size={20} />} 
                        onClick={() => handleSubmit(handleSubmitPress)()}>
                        Entrar
                    </CustomButton>

                </LoginContent>
            </LoginContainer>
        </>
    )
}