"use client"

import Header from "@/components/header/header.component";

import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.styles";

import CustomInput from "@/components/custom-input/custom-input.component";
import CustomButton from "@/components/custom-button/custom-button.component";

import { FiLogIn } from "react-icons/fi";

import { useForm } from "react-hook-form";

import isEmail from "validator/lib/isEmail"
import InputErrorMessage from "@/components/input-error-message/input-error-message.component";

interface SignUpForm {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignUpPage() {

    const {register, handleSubmit, formState: { errors }, watch } = useForm<SignUpForm>()
    const watchPassword = watch('password')

    const handleSubmitPress = (data: SignUpForm) => {

    }

    return(
        <>
           <Header />

           <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadline>Criar Conta</SignUpHeadline>

                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput
                            hasError={!!errors?.name}
                            placeholder="Digite seu nome" 
                            {...register('name', { required: true })}/>

                        {errors?.name?.type === "required" && (
                            <InputErrorMessage>
                                o nome é obrigatório.
                            </InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Sobrenome</p>
                        <CustomInput 
                            hasError={!!errors?.lastName}
                            placeholder="Digite seu sobrenome" 
                            {...register('lastName', 
                            { required: true })}/>

                        {errors?.lastName?.type === "required" && (
                            <InputErrorMessage>
                                o sobrenome é obrigatório.
                            </InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Email</p>
                        <CustomInput 
                            hasError={!!errors?.email}
                            placeholder="Digite seu email" 
                            {...register('email', 
                            { required: true , validate: (value) => { 
                                return isEmail(value)
                            }})}/>

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
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput 
                            hasError={!!errors?.password}
                            placeholder="Digite sua senha" 
                            type="password" 
                            {...register('password', 
                            { required: true })}/>

                        {errors?.password?.type === "required" && (
                            <InputErrorMessage>
                                A senha é obrigatória.
                            </InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Confirme sua senha</p>
                        <CustomInput 
                            hasError={!!errors?.confirmPassword}
                            placeholder="Confirme sua senha" 
                            type="password" 
                            {...register('confirmPassword', 
                            { required: true,
                                validate: (value) => {return value === watchPassword}
                            })}/>

                        {errors?.confirmPassword?.type === "required" && (
                            <InputErrorMessage>
                                A confirmação da senha é obrigatória.
                            </InputErrorMessage>
                        )}

                        {errors?.confirmPassword?.type === "validate" && (
                            <InputErrorMessage>
                                As senhas são diferentes.
                            </InputErrorMessage>
                        )}
                    </SignUpInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}>Criar Conta</CustomButton>
                </SignUpContent>
           </SignUpContainer>
        </>
    )
}