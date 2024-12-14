import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
const Cards = ({title, price, type, description}) => {
  return (
    <>
      <Card
        sx={{
          width: '100%',
          border: "none",
          boxShadow: "none",
          borderRadius: "15px",
        }}
      >
        <CardContent
          sx={{
            padding: "0",
            paddingTop: "10px",
          }}
        >
          <Stack direction="row" spacing={1} sx={{ padding: "0" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "#01311e",
                
              }}
              flexGrow={1}
            >
              <Link to="/">
              {title}
            </Link>
            </Typography>
            <Stack direction="row" flexGrow={1} sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: ".99rem",
                  color: "#01311e",
                  m:0,
                  ml: "5px",
                  mr: "5px",

                }}
              >
                {type}
              </Typography>
              <Typography variant="body1" component="div" sx={{ color: "#01311e" }}>
                {price}
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: "#01311e", color: "#fff", fontSize: ".8rem", padding: "5px 10px", borderRadius: "5px" }}>
                Apply
              </Button>
            </Stack>
          </Stack>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
