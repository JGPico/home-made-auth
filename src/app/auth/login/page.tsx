import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignUpTab } from "./_components/sign-up-tab";
import { SignInTab } from "./_components/sign-in-tab"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    return (
        <>
            <Button size="lg">
                <Link href="/">Home</Link>
            </Button>
            <Tabs defaultValue={"signin"} className="max-auto w-full my-6 px-4">
                <TabsList>
                    <TabsTrigger value="signin">Sign In with bananas</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up in conjuction with bananas</TabsTrigger>
                    <TabsTrigger value="banana">Bananas!</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Sign In with bananas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <SignInTab></SignInTab>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Sign Up with bananas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <SignUpTab></SignUpTab>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="banana">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Bananas!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h1>bananas!</h1>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    )
}
