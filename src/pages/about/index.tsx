import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import Head from "next/head";

export const metadata: HeadMetaType = {
  title: "About Uniavalia",
  description: "Learn more about UniAvalia - a teacher rating system dedicated to helping students choose their classes wisely.",
};


export default function About() {

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/iconLogo.svg" sizes="any" />
            </Head>
            <main className="h-screen bg-light-white">
                <div className="space-y-6">
                    <NavBar selectedPageText={"About"}/>
                    <div className="grid justify-items-center space-y-8">
                        <div className="grid justify-items-center">
                            <h1 className="text-light-blue text-5xl font-semibold">Ajude seus colegas</h1>
                            <h1 className="text-light-blue text-5xl font-semibold">e avalie seus professores!</h1>
                        </div>
                        <div className="grid justify-items-center">
                            <h2 className="text-light-blue text-lg font-semibold">O sistema que reúne e te guia na escolha do seu professor!</h2>
                            <h2 className="text-light-blue text-lg font-semibold">Encontre avaliações, comentários e orientações de seus colegas para decidir suas disciplinas</h2>
                        </div>
                        <img src="/about.png" alt="about"></img>
                    </div>
                </div>
            </main>
        </>
    )
}