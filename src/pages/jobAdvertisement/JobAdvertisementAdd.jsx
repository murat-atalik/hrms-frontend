import React, { useEffect, useState } from "react";

import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";

import { Grid, makeStyles, Paper } from "@material-ui/core";

import FormikButton from "../../utilities/customFormComponents/FormikButton";
import FormikSelect from "../../utilities/customFormComponents/FormikSelect";
import FormikTextField from "../../utilities/customFormComponents/FormikTextField";
import FormikDAtePicker from "../../utilities/customFormComponents/FormikDatePicker";

import JobAdvertisementService from "../../services/jobAdvertisementService";
import CityService from "../../services/cityService";
import WorkProgramService from "../../services/workProgramService";
import JobPositionService from "../../services/jobPositionService";
import WorkTypeService from "../../services/workTypeService";

import EmployerSideMenu from "../employer/EmployerSideMenu";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import EmployerSideMenuButton from "../employer/EmployerSideMenuButton";
import { useSelector } from "react-redux";

export default function JobAdvertisementAdd() {
  const alert = useAlert();
  const jobService = new JobAdvertisementService();
  const { authItem } = useSelector((state) => state.auth);

  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);
  const tCities = cities.map(({ id, cityName: value }) => ({ id, value }));

  const [workPrograms, setWorkPrograms] = useState([]);
  useEffect(() => {
    let workProgramService = new WorkProgramService();
    workProgramService
      .getWorkPrograms()
      .then((result) => setWorkPrograms(result.data.data));
  }, []);
  const tWorkPrograms = workPrograms.map(({ id, programName: value }) => ({
    id,
    value,
  }));
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionsService = new JobPositionService();
    jobPositionsService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);
  const tJobPositions = jobPositions.map(({ id, positionName: value }) => ({
    id,
    value,
  }));
  const [workTypes, setWorkTypes] = useState([]);
  useEffect(() => {
    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
  }, []);
  const tWorkTypes = workTypes.map(({ id, workType: value }) => ({
    id,
    value,
  }));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const validationSchema = yup.object({
    jobDescription: yup
      .string("???? a????klamas??n?? girin")
      .required("???? a????klamas?? gerekli!"),
    minSalary: yup
      .string("Minimum maa?? ")
      .required("Minimum maa?? gerekli!")
      .test(
        "Is grater than 2500",
        "En az asgari ??cret de??eri girebilirsiniz!",
        (value) => value > 2500
      ),
    maxSalary: yup
      .string("Maksimum maa?? ")
      .required("Maksimum maa?? gerekli")
      .test(
        "Is grater than minSalary",
        "Girilen minimum maa??tan y??ksek bir de??er olmal??!",
        (value) => value > formik.values.minSalary
      ),
    openPosition: yup
      .string("A????k Pozisyon")
      .required("A????k pozisyon say??s?? gerekli!")
      .test(
        "Is grater than 0",
        "En az a????k pozisyon say??s?? 1!",
        (value) => value > 0
      ),

    applicationDeadline: yup
      .string("Son ba??vuru tarihi")
      .required("Son Ba??vuru tarihi girilmeli")
      .test(
        "Son ba??vuru tarihi",
        "Son Ba??vuru tarihi en ge?? bug??n olmal??d??r",
        (value) => {
          let date = new Date(value);

          if (date.getTime() >= today.getTime()) {
            return true;
          } else return false;
        }
      ),
    workTypeId: yup
      .string("??al????ma Bi??imi")
      .required("??al????ma Bi??imi gerekli!"),
    active: yup.string("???? ilan?? durumu").required("i?? ilan?? durumu gerekli"),
    employerId: yup
      .string("Employer id")
      .required("Employer gerekli!")
      .test(
        "Is grater than 0",
        "En az a????k pozisyon say??s?? 1!",
        (value) => value > 0
      ),
    workProgramId: yup
      .string("??al????ma program??")
      .required("??al????ma program?? gerekli!"),
    jobPositionId: yup
      .string("??al????ma Pozisyon")
      .required("??al????ma pozisyonu gerekli!")
      .test(
        "Is grater than 0",
        "En az a????k pozisyon say??s?? 1!",
        (value) => value > 0
      ),

    cityId: yup.string("??ehir Ad??").required("??ehir ad?? Zorunlu"),
  });
  const formik = useFormik({
    initialValues: {
      jobDescription: "",
      minSalary: 0,
      maxSalary: 0,
      openPosition: 0,
      applicationDeadline: "",
      active: true,
      workTypeId: "",
      employerId: authItem[0].user.id,
      workProgramId: "",
      jobPositionId: "",
      cityId: "",
    },
    validationSchema: validationSchema,
  });
  const history = useHistory();
  const handleSubmit = (values) => {
    jobService.add(values).then((result) => console.log(result.data.data));

    alert.info("???? ??LANI EKLEND?? ONAY BEKLEN??YOR");
    history.push("/");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    container: {
      minHeight: 600,
    },
    sideMenu: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      [theme.breakpoints.up("lg")]: {
        display: "block",
      },
    },
    sideMenuOnlyButton: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("lg")]: {
        display: "block",
      },
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid
      space={2}
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <div className={classes.sideMenu}>
        <Grid item lg={2}>
          <EmployerSideMenu />
        </Grid>
      </div>
      <div className={classes.sideMenuOnlyButton}>
        <Grid item xs={1}>
          <EmployerSideMenuButton />
        </Grid>
      </div>
      <Grid item xs={10} lg={8}>
        <Paper style={{ backgroundColor: "#E5E5E5", padding: "4em" }}>
          <Formik
            initialValues={formik.initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormikTextField
                    name="jobDescription"
                    label="???? A????klamas??"
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <FormikDAtePicker
                    name="applicationDeadline"
                    label="Son ba??vuru tarihi"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikTextField
                    name="minSalary"
                    type="number"
                    label="Minimum maa??"
                  />
                </Grid>{" "}
                <Grid item xs={6}>
                  <FormikTextField
                    name="maxSalary"
                    type="number"
                    label="Maksimum maa??"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikTextField
                    name="openPosition"
                    type="number"
                    label="A????k pozisyon"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect
                    name="jobPositionId"
                    label="??al????ma pozisyonu"
                    options={tJobPositions}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect
                    name="workTypeId"
                    label="??al????ma bi??imi "
                    options={tWorkTypes}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect
                    name="workProgramId"
                    label="??al????ma program??"
                    options={tWorkPrograms}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormikSelect name="cityId" label="??ehir" options={tCities} />
                </Grid>
                <Grid item xs={12}>
                  <FormikButton> ???? ??lan?? Olu??tur</FormikButton>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}
