import Cards from "@/components/Card/Cards";
import { Box, Stack, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/Auth";
import { localBusinessOwners } from "@/lib/Databases/lbo";
import { shops } from "@/lib/Databases/shop";
export const Route = createFileRoute("/_user/dashboard")({
  beforeLoad: () => {
    console.log("beforeLoad");
  },
  component: RouteComponent,
});

function RouteComponent() {
  const returnFullText = (text) => {
    switch (text) {
      case "lbo":
        return "Local Business Owner";
      case "consultant":
        return "Consultant";
      case "training":
        return "Training";
      default:
        return "Unknown";
    }
  };
  const { getUser } = useAuth();
  const userId = getUser()[0]["id"];
  const userLBO = localBusinessOwners.filter((lbo) => lbo.userId === userId);
  const userShops = shops.filter((shop) => shop.UserId === userId);
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
          <Typography variant="h6">Dashboard</Typography>

          <Typography variant="body1">
            {returnFullText(getUser()[0]["userType"])}
          </Typography>
        </Stack>
      </Box>
      <Box sx={boxStyle}>
        {userLBO.length > 0 ?userLBO.map((lbo, index) => {
          return (
            <Cards
              key={index}
              title={lbo.title}
              description={lbo.excerpt}
              buttonText="Cancel"
              type={lbo.userField}
              price={"Asked On: " + lbo.date}
            />
          );
        }): 
        <Typography variant="body1">
          No Business Purposed
        </Typography>
      
      }
      </Box>
      <Box sx={boxStyle}>

        {userShops.length > 0 ? userShops.map((shop, index) => {
          return (
            <Cards
              key={index}
              title={shop.title}
              description={shop.excerpt}
              buttonText="Cancel"
              type={shop.userField}
              price={"Asked On: " + shop.date}
            />
          );
        }
        ) :
        <Typography variant="body1">
          No Shops Found
        </Typography>
      }
      </Box>
      </Box>
  );
}
