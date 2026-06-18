"use client"

import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Button } from "@/components/ui/button"
import { LoadingSwap } from "@/components/ui/loading-swap"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const signInSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(1)
})

type SignInForm = z.infer<typeof signInSchema>

export function SignInTab() {
    const router = useRouter()
    const form = useForm<SignInForm>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const { isSubmitting } = form.formState

    async function handleSignIn(data: SignInForm) {
        //form.reset()
        alert("Sign In Clicked")
    }

    return (
        <div className="container px-4 mx-auto my-6">
            <form onSubmit={form.handleSubmit(handleSignIn)}>
                <FieldGroup>
                    <Controller
                        control={form.control}
                        name="name"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid} />

                                {fieldState.invalid && (<FieldError errors={[fieldState.error]}></FieldError>)}
                            </Field>
                        )} />

                    <Controller
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid} />

                                {fieldState.invalid && (<FieldError errors={[fieldState.error]}></FieldError>)}
                            </Field>
                        )} />

                    <Controller
                        control={form.control}
                        name="password"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                <PasswordInput
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid} />

                                {fieldState.invalid && (<FieldError errors={[fieldState.error]}></FieldError>)}
                            </Field>
                        )} />

                    <Button type="submit" disabled={isSubmitting}
                        className="w-full">
                        <LoadingSwap isLoading={isSubmitting}>
                            Sign In but also Bananas
                        </LoadingSwap>
                    </Button>
                </FieldGroup>
            </form>
        </div>
    )
}