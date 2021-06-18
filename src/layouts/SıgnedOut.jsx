import { Button, MenuItem } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOut(props) {
  return (
    <div>
      <MenuItem>
        <Button
          variant="contained"
          color="inherit"
          onClick={props.signIn}
          style={{ backgroundColor: "green" }}
        >
          Giriş yap
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={NavLink}
          to="/Candidateregister"
          style={{
            color: "white",
          }}
        >
          Kayıt Ol
        </Button>
      </MenuItem>
    </div>
  );
}
