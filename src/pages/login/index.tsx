import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import muiTheme from "@/styles/muiTheme";
import { HeadMetaType } from "@/types/headMetaType";
import { Divider, TextField, ThemeProvider } from "@mui/material";
import { useFormik } from "formik";
import { Fira_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import * as Yup from "yup";

export const metadata: HeadMetaType = {
  title: "Login",
  description:
    "Sign in to UniAvalia and access your account. Join a community dedicated to helping students make informed class selections.",
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
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
        <div className="h-screen w-screen flex lg:h-full p-6 lg:px-28 lg:pt-12">
          <div className="grid justify-items-center px-16 pt-6 md:pt-10 gap-y-6 md:gap-y-10 rounded-l-xl lg:bg-blue/[0.02] w-full lg:w-1/2">
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

            <form
              onSubmit={formik.handleSubmit}
              className="grid justify-items-center w-full gap-8"
            >
              <ThemeProvider theme={muiTheme}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Senha"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </ThemeProvider>

              <a className="cursor-pointer font-fira underline justify-self-end text-xs mb-5">
                Esqueceu sua senha?
              </a>
              <Button
                handleButtonClick={formik.handleSubmit}
                buttonText="Login"
                buttonWidth="w-full"
                buttonHeight="h-7 md:h-9"
              />
            </form>
            <div className="grid justify-items-center w-64 gap-y-7 pb-6 md:pb-10">
              <p className="font-fira text-xs">
                Não possui uma conta?{" "}
                <a className="cursor-pointer font-fira underline text-xs">
                  Crie agora
                </a>
              </p>
              <Divider className="w-full text-xs font-fira">
                ou continue com seu Google
              </Divider>
              <div className="flex justify-center cursor-pointer w-32 h-9 border-2 border-black border-solid rounded-md">
                <Image
                  src="/gIcon.svg"
                  alt="Google icon"
                  className="flex"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-0 lg:w-1/2 rounded-r-xl bg-[#1DDF8C] ">
            <Image
              src="/login-image.svg"
              alt="Uniavalia Logo with text"
              className=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </main>
    </>
  );
}
