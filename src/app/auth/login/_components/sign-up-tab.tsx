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

const signUpSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(1)
})

type SignUpForm = z.infer<typeof signUpSchema>

export function SignUpTab() {
    const router = useRouter()
    const form = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const { isSubmitting } = form.formState

    async function handleSignUp(data: SignUpForm) {
        //form.reset()
        await authClient.signUp.email({ ...data, callbackURL: "/" }, {
            onError: (error) => {
                toast.error(error.error.message || "Failed to sign up")
            },
            onSuccess: () => {
                router.push("/")
            }
        })

    }

    return (
        <div className="container px-4 mx-auto my-6">
            <form onSubmit={form.handleSubmit(handleSignUp)}>
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
                            Sign Up with bananas
                        </LoadingSwap>
                    </Button>
                    <h1>lemons</h1>
                </FieldGroup>
            </form>
        </div>
    )
}