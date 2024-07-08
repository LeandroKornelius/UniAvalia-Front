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

const schema2 = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

/* const theme = createTheme({
  palette: {
    primary: {
      main: "#1DDF8C",
    },
  },
}); */

export default function Login() {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: schema2,
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
                  sx={
                    {
                      /* "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "Arial",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1C1C1C80",
                      },
                      "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor:
                            formik.touched.email && Boolean(formik.errors.email)
                              ? "primary.main"
                              : "error",
                        },
                      },
                    }, */
                    }
                  }
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
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
            <div className="grid justify-items-center w-64 space-y-7 ">
              <p className="font-fira text-xs">
                Não possui uma conta?{" "}
                <a className="cursor-pointer font-fira underline text-xs">
                  Crie agora
                </a>
              </p>
              <Divider className="w-full text-xs">
                ou continue com seu Google
              </Divider>
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
  );
}
