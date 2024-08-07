import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import { Divider, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Fira_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
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
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

export default function Login() {
    const router = useRouter();

    const initialValues: LoginFormValues = {
      email: '',
      password: ''
    }

    const handleCreateClick = () => {
        router.push("/signup");
    }
    
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
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ handleSubmit }) => (
                <Form className="grid justify-items-center" onSubmit={handleSubmit}>
                  <Field 
                    name="email"
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  {/* <ErrorMessage name="email" component="div" className="text-red-500" /> */}
                  <Field 
                    name="password"
                    as={TextField}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  {/* <ErrorMessage name="password" component="div" className="text-red-500" /> */}
                  <a className="cursor-pointer font-fira underline justify-self-end text-xs mb-5">Forgot Password?</a>
                  <Button 
                    handleButtonClick={handleSubmit}
                    buttonText="Login"
                    buttonStyle={"font-fira px-10 py-1 text-white bg-green rounded-md w-full h-7 md:h-9"}
                  />
                  </Form>
              )}
            </Formik>
                  <div className="grid justify-items-center w-64 space-y-7 ">
                    <p className="font-fira text-xs">Don&apos;t have an account? 
                      <a className="cursor-pointer font-fira underline text-xs"
                        onClick={handleCreateClick}
                      >Create one</a>
                    </p>
                    <Divider className="w-full text-xs">or continue with</Divider>
                    <div className="cursor-pointer grid justify-items-center content-center w-32 h-9 border-2 border-black border-solid rounded-md">
                      <Image
                        src="/gIcon.svg"
                        alt="Google icon"
                        className="flex lg:hidden"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
          </div>
        </div>
            </main>
        </>
    )
}