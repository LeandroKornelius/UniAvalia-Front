import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import { Field, Form, Formik } from "formik";
import { TextField } from 'formik-mui';
import { Fira_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import * as Yup from 'yup';


export const metadata: HeadMetaType = {
    title: "Login",
    description: "Sign in to UniAvalia and access your account. Join a community dedicated to helping students make informed class selections.",
  };

  const fira_mono = Fira_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fira-mono",
    weight: "400",
  });

  interface LoginFormValues {
    email: string;
    password: string;
  }

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

export default function Login() {
    const initialValues: LoginFormValues = {
      email: '',
      password: ''
    }

    const handleClickLogin = () => {
        
    };
    

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/greenLogo.svg" sizes="any" />
            </Head>
            <main className={`${fira_mono.variable}`}>
                <NavBar
                    selectedPageText={""}
                    buttonText={"Cadastrar"}
                    buttonWidth={"170"}
                />
                <div className="h-screen w-screen grid content-between lg:h-full p-6 lg:px-24 lg:py-0">
          <div className="grid justify-items-center space-y-6 md:space-y-10">
            <Image
              src="/greenLogoText.svg"
              alt="Uniavalia Logo with text"
              className="flex lg:hidden"
              width={72}
              height={72}
            />
            <h1 className="font-fira text-center text-2xl md:text-3xl font-extrabold">
              Bem-vindo de volta!
            </h1>
            <h2 className="font-fira font-bold text-center text-base md:text-xl">
              Como você gostaria de realizar o seu login?
            </h2>

            <Formik
              initialValues={initialValues}
              onSubmit={handleClickLogin}
            >
              <Form>
                <Field
                  component={TextField}
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  size="small"
                />
                <Field
                  component={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  className=""
                />
                <Button 
                  buttonText="Login"
                  handleButtonClick={handleClickLogin}
                  buttonWidth="w-52 md:w-96 lg:w-320"
                  buttonHeight="h-7 md:h-9"
                />
              </Form>

            </Formik>
            
            
          </div>
        </div>
            </main>
        </>
    )
}