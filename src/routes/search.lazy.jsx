import { createLazyFileRoute, useSearch } from "@tanstack/react-router";
import { Box, Chip, Container,Grid2, Stack, Typography } from "@mui/material";
import SearchForm from "@/components/SearchForm/SearchForm";
import Cards from "@/components/Card/Cards";

export const Route = createLazyFileRoute("/search")({
  pendingComponent: () => "Loading...",
  component: RouteComponent,
});

function RouteComponent() {
  const search = useSearch({
    from: "/search",
  });

  const makeFirstLetterCapital = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  return (
    <Box>
      <Container>
        <Typography variant="body1" sx={{
          mt: 2,
        }}>Search</Typography>
        <SearchForm/>
        <Stack spacing={2} direction="row" sx={{
          mb: 2,
        }}>
          {search.shift ? <Chip label={makeFirstLetterCapital(search.shift)} /> : null}
          {search.eventDate ? <Chip label={search.eventDate} /> : null}
          {search.guests ? <Chip label={search.guests} /> : null}
          {search.eventType ? <Chip label={makeFirstLetterCapital(search.eventType)} /> : null}
        </Stack>
        <Grid2 container spacing={5}>
            <Grid2
              size={{
                sm: 12,
                md: 4,
              }}
            >
              <Cards />
            </Grid2>
            <Grid2
              size={{
                sm: 12,
                md: 4,
              }}
            >
              <Cards />
            </Grid2>
            <Grid2
              size={{
                sm: 12,
                md: 4,
              }}
            >
              <Cards />
            </Grid2>
          </Grid2>
      </Container>
    </Box>
  );
}
