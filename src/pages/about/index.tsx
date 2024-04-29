import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import Head from "next/head";

export const metadata: HeadMetaType = {
  title: "UniAvalia",
  description: "A teacher rating system to help students pick classes.",
};


export default function About() {

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/iconLogo.svg" sizes="any" />
            </Head>
            <NavBar/>
        </>
    )
}