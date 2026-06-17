import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignUpTab } from "./_components/sign-up-tab";
import { SignInTab } from "./_components/sign-in-tab"

export default function LoginPage() {
    return (
        <Tabs defaultValue={"signin"} className="max-auto w-full my-6 px-4">
            <TabsList>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SignUpTab></SignUpTab>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="signup">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SignInTab></SignInTab>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
