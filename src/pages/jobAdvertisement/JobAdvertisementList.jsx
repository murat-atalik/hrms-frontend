import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import FavoriteJobService from "../../services/favoriteJobService";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "@material-ui/core";

export default function JobAdvertisementList() {
  const [jobAdverts, setJobAdverts] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvert()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, jobAdverts.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      minHeight: 600,
    },
  });
  const classes = useStyles();

  // function favorites(jobAdvertId) {
  //   let values = {
  //     candidateId: 1,
  //     jobAdvertisementId: jobAdvertId,
  //   };

  //   // let favoriteJobService = new FavoriteJobService();
  //   // favoriteJobService
  //   //   .add(values)
  //   //   .then((result) => console.log(result.data.data));
  //   console.log(values);
  // }
  return (
    <div>
      <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Şirket Adı</TableCell>
              <TableCell>Websitesi</TableCell>
              <TableCell>Çalışma programı</TableCell>
              <TableCell>Şehir</TableCell>
              <TableCell>Pozisyon</TableCell>
              <TableCell>Çalışma Türü</TableCell>
              <TableCell>Maaş</TableCell>
              <TableCell>Açık Pozisyon</TableCell>
              <TableCell>son Başvuru</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? jobAdverts.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : jobAdverts
            ).map((jobAdvert) => {
              return (
                <TableRow hover key={jobAdvert.id}>
                  <TableCell>
                    {jobAdvert.employer.company.companyName}
                  </TableCell>
                  <TableCell>
                    <a
                      href={"https://" + jobAdvert.employer.company?.webAddress}
                      target={"_blank"}
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {jobAdvert.employer.company?.webAddress}
                    </a>
                  </TableCell>
                  <TableCell>{jobAdvert.workProgram?.programName}</TableCell>
                  <TableCell>{jobAdvert.city?.cityName}</TableCell>
                  <TableCell>{jobAdvert.jobPosition?.positionName}</TableCell>
                  <TableCell>{jobAdvert.typeOfWork?.workType}</TableCell>
                  <TableCell>
                    {jobAdvert.minSalary + "-" + jobAdvert.maxSalary}
                  </TableCell>
                  <TableCell>{jobAdvert?.openPosition}</TableCell>
                  <TableCell>{jobAdvert?.applicationDeadline}</TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      onClick={() => {
                        let values = {
                          candidateId: 3,
                          jobAdvertisementId: jobAdvert.id,
                        };

                        let favoriteJobService = new FavoriteJobService();
                        favoriteJobService
                          .add(values)
                          .then((result) => console.log(result.data.data));
                      }}
                    >
                      <AiFillHeart color="black" size="3em" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100, { label: "All", value: -1 }]}
          component="div"
          count={jobAdverts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}