import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import RegularInput from "@/components/RegularInput";
import { HeadMetaType } from "@/types/headMetaType";
import Head from "next/head";

export const metadata: HeadMetaType = {
    title: "Login to Uniavalia",
    description: "Sign in to UniAvalia and access your account. Join a community dedicated to helping students make informed class selections.",
  };

export default function Login() {

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/iconLogo.svg" sizes="any" />
            </Head>
            <main className="h-screen bg-light-white">
                <NavBar 
                    selectedPageText={""}
                    buttonText={"Login"}
                />
                <div className="flex justify-center">
                    <div className="flex justify-between w-4/6 h-7/10 bg-light-gray">
                        <div className="grid justify-items-center w-1/2 h-7/10">
                            <h1 className="text-light-blue text-3xl font-bold">Login to your Account</h1>
                            <h2 className="text-light-blue text-base font-semibold">Welcome back! How would you like to login?</h2>
                            <button className="px-10 py-1 border border-solid border-light-blue rounded-xl"><img src="/google.svg" alt="Google"></img></button>
                            <h3 className="text-sm text-light-blue">or continue with email</h3>
                            <RegularInput
                                required={true}
                                inputType="email"
                                inputPlaceholder="Enter your email"
                                iconPath="/email.svg"
                                iconAlt="email icon"
                            />
                            <a className="text-sm text-light-blue underline underline-offset-2">Forgot your password?</a>
                            <h3 className="text-sm text-light-blue">Dont have an account? <a className="text-sm text-light-blue underline underline-offset-2">Create one!</a></h3>
                            <Button buttonText={"Log In"}/>
                        </div>
                        <div className="grid justify-items-center w-1/2 h-7/10 bg-light-blue">
                            <h1>Teste</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}