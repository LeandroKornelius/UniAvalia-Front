import Button from "@/components/Button";
import { HeadMetaType } from "@/types/headMetaType";
import { Fira_Mono } from 'next/font/google';
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export const metadata: HeadMetaType = {
  title: "About",
  description: "Learn more about UniAvalia - a teacher rating system dedicated to helping students choose their classes wisely.",
};

const fira_mono = Fira_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fira-mono',
    weight: "400"
})


export default function About() {
    const router = useRouter();

    const handleClickLogin = () => {
        router.push('/login');
    }

    const handleClickCreate = () => {

    }

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/greenLogo.svg" sizes="any" />
            </Head>
            <main className={`${fira_mono.variable}`}>
                <div className="h-screen w-screen grid gap-28 content-between p-6">
                    <div className="grid justify-items-center space-y-4">
                        <Image 
                            src="/greenLogoText.svg"
                            alt="Uniavalia Logo with text"
                            width={72}
                            height={72}
                        />
                        <h1 className="font-fira text-center text-3xl font-bold">Ajude a comunidade acadêmica avaliando seus <span className="text-green">professores</span> e <span className="text-green">disciplinas</span></h1>
                        <h2 className="font-fira text-center text-base">No Uniavalia você encontra comentários, avaliações e orientações feitas por outros estudantes que te auxiliam a fazer as melhores escolhas na hora de montar sua grade</h2>
                    </div>
                    <div className="grid justify-items-center space-y-2"> 
                        <Button btnText={'Login'} handleButtonClick={handleClickLogin}/>
                        <h3 className="font-fira text-sm">Não tem uma conta? <a className="cursor-pointer underline underline-offset-2" onClick={handleClickCreate}>Crie uma</a></h3>
                    </div>
                </div>
            </main>
        </>
    );
}