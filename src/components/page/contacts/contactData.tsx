
import { GridRowsProp } from "@mui/x-data-grid";


import { GridColDef } from "@mui/x-data-grid";


export const rows: GridRowsProp = [
    { id: 1, ID: "1", Name: "Ahmed Ali", Email: "ahmed.ali@example.com", Age: "30", Phone: "0123456789", Address: "Admin"  , City:"cairo" ,Zip :"123515"},
    { id: 2, ID: "2", Name: "Sara Mostafa", Email: "sara.mostafa@example.com", Age: "25", Phone: "0109876543", Address: "Admin" , City:"cairo" ,Zip :"123515" },
    { id: 3, ID: "3", Name: "Omar Adel", Email: "omar.adel@example.com", Age: "28", Phone: "0112233445", Address: "Admin" , City:"cairo" ,Zip :"123515" },
    { id: 4, ID: "1", Name: "Mona Khaled", Email: "mona.khaled@example.com", Age: "32", Phone: "0122334455", Address: "Manger" , City:"cairo" ,Zip :"123515" },
    { id: 5, ID: "2", Name: "Mohamed Tarek", Email: "mohamed.tarek@example.com", Age: "29", Phone: "0113344556", Address: "Manger" , City:"cairo" ,Zip :"123515" },
    { id: 6, ID: "1", Name: "Fatma Ibrahim", Email: "fatma.ibrahim@example.com", Age: "24", Phone: "0105566778", Address: "User"  , City:"cairo" ,Zip :"123515"},
    { id: 7, ID: "2", Name: "Hassan Ahmed", Email: "hassan.ahmed@example.com", Age: "26", Phone: "0126677889", Address: "User"  , City:"cairo" ,Zip :"123515"},
    { id: 8, ID: "3", Name: "Reem El-Gamal", Email: "reem.elgamal@example.com", Age: "23", Phone: "0117788990", Address: "User" , City:"cairo"  ,Zip :"123515"},
    { id: 9, ID: "4", Name: "Khaled Yasser", Email: "khaled.yasser@example.com", Age: "31", Phone: "0128899001", Address: "User" , City:"cairo" ,Zip :"123515" }


];


export const columns: GridColDef[] = [
    {
      field: "ID",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Address",
      headerName: "Address",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "City",
      headerName: "City",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Zip",
      headerName: "Zip Code",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
]