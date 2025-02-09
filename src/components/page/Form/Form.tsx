import { Button, MenuItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useForm, SubmitHandler } from "react-hook-form";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Header from "../../Heder";

const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regNumber = /^-?\d+$/;

const currencies = [
  { value: "Admin", label: "Admin" },
  { value: "Manger", label: "Manger" },
  { value: "User", label: "User" },
];

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  Number: string;
  address1: string;
  address2: string;
  role: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const getHelperText = (error: boolean, message: string) =>
    error ? message : null;

  const handleClick = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <Header
        title={"CREATE USER"}
        suptitle={"Creat a New User Profile"}
        isdashboard={false}
      />
      <Stack direction={"row"} gap={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={getHelperText(
            Boolean(errors.firstName),
            "This field is required. & min 3 characters"
          )}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={getHelperText(
            Boolean(errors.lastName),
            "This field is required. & min 3 characters"
          )}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={getHelperText(
          Boolean(errors.email),
          "Please provide a valid email address."
        )}
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.Number)}
        helperText={getHelperText(
          Boolean(errors.Number),
          "Please provide a valid phone number."
        )}
        {...register("Number", {
          required: true,
          minLength: 11,
          pattern: regNumber,
        })}
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Address 1" variant="filled" {...register("address1")} />
      <TextField label="Address 2" variant="filled" {...register("address2")} />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        {...register("role", { required: true })}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          onClick={handleClick}
          type="submit"
          variant="contained"
          sx={{
            textTransform: "capitalize",
          }}
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
