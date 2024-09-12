"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Button } from "@ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";

type Provider = "github" | "google";

const authOptions = [
  {
    name: "github",
    icon: <GitHubLogoIcon />,
  },
] satisfies {
  name: Provider;
  icon: React.ReactNode;
}[];

export const SignInForm = () => {
  return (
    <Card className="border-none max-w-md shadow-none ">
      <CardHeader className="flex items-center flex-col space-y-3 text-2xl font-bold">
        <CardTitle>Sign In</CardTitle>
        <CardDescription className="text-gray-500 text-lg font-semibold">
          Log into your account on registry
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        {/* options to the auth */}
        {authOptions.map((item) => (
          <Button
            key={item.name}
            variant={"outline"}
            className="gap-2 w-full rounded-xl h-10 text-base"
            onClick={() => signIn(item.name, { callbackUrl: "/" })}
          >
            <span>{item.icon}</span>
            Sign in with {item.name}
          </Button>
        ))}
      </CardContent>
      <CardFooter>
        <p className="text-xs">
          By signing up, you agree to the Terms and Privacy policy
        </p>
      </CardFooter>
    </Card>
  );
};
