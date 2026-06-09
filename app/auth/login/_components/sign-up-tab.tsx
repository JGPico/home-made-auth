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
    useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema)
    })
}