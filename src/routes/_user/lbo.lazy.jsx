import Cards from "@/components/Card/Cards";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { localBusinessOwners } from "@/lib/Databases/lbo";


export const Route = createLazyFileRoute("/_user/lbo")({
  beforeLoad: () => {
    console.log("Expert");
  },
  component: RouteComponent,
});

function RouteComponent() {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const localBusinessOwnerTypes = [
    {
      name: "Small",
      description: "Small business owner",
      keyWord: "small",
    },
    {
      name: "Micro",
      description: "Micro business owner",
      keyWord: "micro",
    },
    {
      name: "Medium",
      description: "Medium business owner",
      keyWord: "medium",
    },
  ];
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
          <Typography variant="h6">Local Business Size</Typography>
          <Stack
            direction="rows"
            spacing={3}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              minWidth: "200px",
            }}
          >
            {localBusinessOwnerTypes.map((type) => (
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
      <Box sx={boxStyle}>
      {
        localBusinessOwners.map((lbo) => (
          <Cards
            key={lbo.userId}
            title={lbo.title}
            type={capitalize(lbo.userField)}
            price={"Asked On: "+lbo.date}
            description={lbo.excerpt}
            buttonText="View Request"
            link="https://api.whatsapp.com/send/?phone=9800000002&text&type=phone_number&app_absent=0"
          />
        ))
      }
      </Box>
    </Box>
  );
}
