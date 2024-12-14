import Cards from "@/components/Card/Cards";
import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { user } from "@/lib/Databases/user";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Route = createLazyFileRoute("/_user/consultant/")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = Array.from(user).filter(
    (user) => user.userType === "consultants"
  );
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };



  const consultantTypes = [
    {
      name: "All",
      description: "All consultants",
      keyWord: "all",
    },
    {
      name: "Business",
      description: "Business consultant",
      keyWord: "business",
    },
    {
      name: "Marketing",
      description: "Marketing consultant",
      keyWord: "marketing",
    },
    {
      name: "Legal",
      description: "Legal consultant",
      keyWord: "legal",
    },
    {
      name: "Tax",
      description: "Tax consultant",
      keyWord: "tax",
    },
  ];

  const columns = [
    {
      id: 1,
      label: "Name",
      align: "left",
      minWidth: 170,
    },
    {
      id: 2,
      label: "Expertise",
      align: "right",
      minWidth: 170,
    },
    {
      id: 3,
      label: "Actions",
      align: "right",
      minWidth: 170,
    }
  ]

  const boxStyle = {
    width: "100%",
    border: "1px solid #f0f0f0",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  return (
    <Box>
      <Box sx={boxStyle}>
        <Stack
          direction="rows"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Consultant</Typography>
          <Stack
            direction="rows"
            spacing={3}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
          >
            {Array.from(consultantTypes).map((type) => (
              <Chip
                key={type.keyWord}
                label={type.name}
                variant="outlined"
                clickable
              />
            ))}
          </Stack>
        </Stack>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {Array.from(columns).map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datum) => (
              <TableRow
                key={datum.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {capitalize(datum.firstname) +
                    " " +
                    capitalize(datum.lastname)}
                </TableCell>
                <TableCell align="right">
                  {capitalize(datum.userField)}
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" sx={{ backgroundColor: "#01311e", color: "#fff", fontSize: ".8rem", padding: "5px 10px", borderRadius: "5px" }} onClick={() =>{
                    const link = `https://api.whatsapp.com/send/?phone=${datum.contact}&text&type=phone_number&app_absent=0`
                    window.open(link, "_blank")
                  }}>
                    Chat Now
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
