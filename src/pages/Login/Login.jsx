import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserByEmailAndPassword } from "../../services/userServices";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    user: { userDispatch },
    } = useAppContext();
    
    const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("Por favor digite un correo"),
      password: Yup.string().required("Por favor digite la contraseña"),
    }),
    onSubmit: async (values) => {
      const user = await getUserByEmailAndPassword(values);
      if (user) {
          console.log(user);
          userDispatch({
              type: "LOGIN",
              payload: user
          });
          alert("Bienvenid@ ", user.email)
          navigate("/");
      } else {
          alert("Por favor verifique sus credenciales");
      }
    },
  });
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <FormControl
        error={formik.touched.email && formik.errors.email ? true : false}
        variant="standard"
      >
        <InputLabel htmlFor="email">Correo electrónico</InputLabel>
        <Input
          id="email"
          //   defaultValue="Composed TextField"
          aria-describedby="email-text"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <FormHelperText id="email-text">{formik.errors.email}</FormHelperText>
        ) : null}
      </FormControl>
      <FormControl
        error={formik.touched.password && formik.errors.password ? true : false}
        variant="standard"
      >
        <InputLabel htmlFor="password">Contraseña</InputLabel>
        <Input
          id="password"
          //   defaultValue="Composed TextField"
          aria-describedby="password-text"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <FormHelperText id="password-text">
            {formik.errors.password}
          </FormHelperText>
        ) : null}
      </FormControl>
      <Button variant="contained" disableElevation type="submit">
        Iniciar sesión
      </Button>
    </Box>
  );
}
