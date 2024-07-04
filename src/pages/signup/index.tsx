import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import { TextField } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";
import { Fira_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
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
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(15, "Must be 20 characters or less")
    .required("Required"),
  degree: Yup.string().required("Required"),
  semester: Yup.number().max(20).required("Required"),
});

export default function Signup() {
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
              Primeira vez aqui?
            </h1>
            <h2 className="font-fira font-bold text-center text-2xl md:text-xl">
              Crie sua conta
            </h2>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
            >
              {({ handleReset }) => (
                <Form
                  className="grid justify-items-center"
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
                    <option value="">Selecione seu curso</option>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
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
                    buttonWidth="w-full"
                    buttonHeight="h-7 md:h-9"
                    buttonType="submit"
                  />
                  <p className="font-fira text-xs">
                    Já possui conta?{" "}
                    <a className="font-fira underline text-xs">Faça Login</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </>
  );
}
