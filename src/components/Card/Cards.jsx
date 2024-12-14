import { Star } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Icon,
  Button,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
const Cards = ({title, price, type, description, buttonText}) => {
  return (
    <>
      <Card
        sx={{
          width: '100%',
          boxShadow: "none",
          borderRadius: "15px",
          border: "1px solid #f0f0f0",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        <CardContent
          sx={{
            padding: "0",
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
              <Link to="">
              <Button variant="contained" sx={{ backgroundColor: "#01311e", color: "#fff", fontSize: ".8rem", padding: "5px 10px", borderRadius: "5px" }}>
                {buttonText}
              </Button>
              </Link>
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
