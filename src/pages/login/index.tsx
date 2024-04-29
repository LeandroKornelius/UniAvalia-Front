import NavBar from "@/components/NavBar";
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
                <NavBar selectedPageText={""}/>

            </main>
        </>
    )
}