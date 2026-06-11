"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

const signUpSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(1)
})

type SignUpForm = z.infer<typeof signUpSchema>

export function SignUpTab() {
    const form = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    function handleSignUp(data: SignUpForm) {
        form.reset()
        alert("form submit action complete")
    }

    return (
        <div className="container px-4 mx-auto my-6">
            <form onSubmit={form.handleSubmit(handleSignUp)}>

            </form>
        </div>
    )
}