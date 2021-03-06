import React from "react";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import {
  Grid,
  Link,
  Typography,
  makeStyles,
  Avatar,
  CssBaseline,
  Box,
  Paper,
} from "@material-ui/core";
import FormikTextField from "../../utilities/customFormComponents/FormikTextField";
import { NavLink } from "react-router-dom";
import FormikButton from "../../utilities/customFormComponents/FormikButton";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useAlert } from "react-alert";
import EmployerService from "../../services/employerService";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.muratatalik.com">
        Murat Atalık
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function EmployerRegister() {
  const alert = useAlert();
  const employerService = new EmployerService();
  const validationSchema = yup.object({
    companyName: yup.string("Şirket adı").required("Şirket adı gerekli!"),
    webAddress: yup.string("Web adresi").required("Web adresi gerekli!"),
    email: yup
      .string("E-posta adresinizi girin")
      .required("E-posta adresi gerekli!")
      .email("Geçersiz e-posta"),
    password: yup
      .string("Şifre ")
      .required("Şifre gerekli")
      .min(8, "Şifre en az 8 karakter olmalı"),
    rePassword: yup
      .string("Şifre ")
      .required("Şifre gerekli")
      .oneOf([yup.ref("password"), null], "şifreler aynı olmak zorunda"),
    phoneNumber: yup
      .string("Telefon numarası")
      .required("Telefon numarası gerekli!"),
    securityAnswer: yup
      .string("Güvenlik sorusu cevabı")
      .required("Cevap gerekli!"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rePassword: "",
      companyName: "",
      webAddress: "",
      phoneNumber: "",
      securityAnswer: "",
    },
    validationSchema: validationSchema,
  });
  const handleSubmit = (values) => {
    employerService.add(values).then((result) => {
      result.data.success
        ? alert.success("KULLANICI OLUŞTURULDU")
        : alert.error(result.data.message);
    });
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "90vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            İş Veren Kayıt Formu
          </Typography>
          <Formik
            initialValues={formik.initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: "1em", marginBottom: "1em" }}
                >
                  <FormikTextField name="companyName" label="Şirket adı" />
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "1em", marginBottom: "1em" }}
                  >
                    <FormikTextField name="webAddress" label="Web Adresi" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "1em", marginBottom: "1em" }}
                  >
                    <FormikTextField name="email" label="Eposta Adresi" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "1em", marginBottom: "1em" }}
                  >
                    <FormikTextField
                      name="phoneNumber"
                      label="Telefon Numarası"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "1em", marginBottom: "1em" }}
                  >
                    <FormikTextField
                      name="password"
                      type="password"
                      label="Şifre"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "1em", marginBottom: "1em" }}
                  >
                    <FormikTextField
                      name="rePassword"
                      type="password"
                      label="Şifre tekrarı"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "1em", marginBottom: "1em" }}
                  >
                    <FormikTextField
                      name="securityAnswer"
                      label="En sevdiğiniz film"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <FormikButton style={{ marginTop: "1em", marginBottom: "1em" }}>
                Kayıt ol
              </FormikButton>
              <Grid
                item
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                style={{ marginTop: "1em", marginBottom: "1em" }}
              >
                <Grid item xs>
                  <NavLink
                    to="/register/candidate"
                    variant="body2"
                    style={{ color: "blue" }}
                  >
                    İş Arayan Kayıt Formu
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink
                    to="/login"
                    variant="body2"
                    style={{ color: "blue" }}
                  >
                    Zaten hesabınız var mı? Oturum aç
                  </NavLink>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
        <Box>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
