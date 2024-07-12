import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import { MenuItem, TextField } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";
import { Fira_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import * as Yup from "yup";

export const metadata: HeadMetaType = {
  title: "Signup",
  description:
    "Sign up to UniAvalia to access our system. Join a community dedicated to helping students make informed class selections.",
};

const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: "400",
});

interface SignupFormValues {
  email: string;
  username: string;
  password: string;
  degree: string;
  semester: string;
}

const schema = Yup.object({
  username: Yup.string()
    .max(30, "Must be 15 characters or less")
    .required("Forneça um usuário válido"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(15, "Must be 20 characters or less")
    .required("Forneça uma senha válida"),
  degree: Yup.string().required("Selecione um curso"),
  semester: Yup.number().max(20).required("Forneca um semestre válido"),
});

export default function Signup() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      degree: "",
      semester: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleLoginClick = () => {
    router.push("/login");
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
          buttonText={"Login"}
          buttonWidth={"170"}
        />
        <div className="h-screen w-screen flex lg:h-full p-6 lg:px-28 lg:pt-12">
          <div className="flex justify-center w-0 lg:w-1/2 rounded-l-xl bg-[#1DDF8C] ">
            <Image
              src="/signup-img.svg"
              alt="Uniavalia Logo with text"
              className=""
              width={450}
              height={450}
            />
          </div>
          <div
            className="grid justify-items-center space-y-6 md:space-y-10 px-16 pt-6 md:pt-10 gap-y-4 md:gap-y-6
           rounded-l-xl lg:bg-blue/[0.02] w-full lg:w-1/2"
          >
            <Image
              src="./LogoVerde.svg"
              alt="Uniavalia Logo with text"
              className="hidden lg:block"
              width={72}
              height={72}
            />

            <div>
              <h1 className="font-fira text-center text-2xl md:text-3xl font-extrabold">
                Primeira vez aqui?
              </h1>
              <h2 className="font-fira font-bold text-center text-base md:text-xl m-4 mb-0">
                Crie sua conta
              </h2>
            </div>

            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                degree: "",
                semester: "",
              }}
              onSubmit={(data, params) => {
                console.log(data);
                params.resetForm();
              }}
            >
              <Form
                className="grid justify-items-center w-full gap-4"
                onSubmit={formik.handleSubmit}
              >
                <Field
                  name="username"
                  id="username"
                  as={TextField}
                  label="Nome"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500">{formik.errors.username}</div>
                ) : null}

                <Field
                  name="email"
                  id="email"
                  as={TextField}
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}

                <Field
                  name="password"
                  id="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}

                <Field
                  name="degree"
                  id="degree"
                  as={TextField}
                  select
                  label="Curso"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.degree}
                >
                  <MenuItem value="">
                    <em>Selecione seu curso</em>
                  </MenuItem>
                  <MenuItem value="opcao1">Opção 1</MenuItem>
                  <MenuItem value="opcao2">Opção 2</MenuItem>
                  <MenuItem value="opcao3">Opção 3</MenuItem>
                </Field>
                {formik.touched.degree && formik.errors.degree ? (
                  <div className="text-red-500">{formik.errors.degree}</div>
                ) : null}

                <Field
                  name="semester"
                  id="semester"
                  as={TextField}
                  label="Semestre"
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={formik.handleChange}
                  value={formik.values.semester}
                />
                {formik.touched.semester && formik.errors.semester ? (
                  <div className="text-red-500">{formik.errors.semester}</div>
                ) : null}

                <Button
                  buttonText="Cadastrar"
                  buttonStyle={
                    "font-fira px-10 py-1 text-white bg-green rounded-md w-full h-7 md:h-9"
                  }
                  buttonType="submit"
                  handleButtonClick={formik.handleSubmit}
                />

                <p className="cursor-pointer font-fira text-xs">
                  Já possui conta?{" "}
                  <a
                    className="font-fira underline text-xs"
                    onClick={handleLoginClick}
                  >
                    Faça Login
                  </a>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </main>
    </>
  );
}
