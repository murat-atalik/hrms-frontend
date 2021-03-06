import { Button, MenuItem } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOut() {
  return (
    <div>
      <MenuItem>
        <Button
          variant="contained"
          color="inherit"
          style={{ backgroundColor: "green" }}
          component={NavLink}
          to="/login"
        >
          Giriş yap
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={NavLink}
          to="/register/candidate"
        >
          Kayıt Ol
        </Button>
      </MenuItem>
    </div>
  );
}
