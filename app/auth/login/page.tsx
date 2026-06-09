import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
    return <Tabs defaultValue={"signin"} className="max-auto w-full my-6 px-4">
        <TabsList>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <Card>
            <TabsContent value="signin">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Sign in form goes here</p>
                </CardContent>
            </TabsContent>
        </Card>

        <Card>
            <TabsContent value="signup">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Sign up form goes here</p>
                </CardContent>
            </TabsContent>
        </Card>
    </Tabs>
}