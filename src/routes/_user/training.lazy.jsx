import Cards from '@/components/Card/Cards'
import { Box, Stack, Typography, Chip } from '@mui/material'
import { createLazyFileRoute } from '@tanstack/react-router'
import { training } from '@/lib/Databases/training'
export const Route = createLazyFileRoute('/_user/training')({
  beforeLoad: () => {
    console.log('Funding')
  },
  component: RouteComponent,
})

function RouteComponent() {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const trainingTypes = [
    {
      name: 'All',
      description: 'All Training',
      keyWord: 'all',
    },
    {
      name: 'Business',
      description: 'Business Training',
      keyWord: 'business',
    },
    {
      name: 'Marketing',
      description: 'Marketing Training',
      keyWord: 'marketing',
    },
    {
      name: 'Legal',
      description: 'Legal Training',
      keyWord: 'legal',
    },
    {
      name: 'Tax',
      description: 'Tax Training',
      keyWord: 'tax',
    }
  ]
  const boxStyle = {
    width: '100%',
    border: '1px solid #f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '10px',
  }
  return (
    <Box>
      <Box sx={boxStyle}>
        <Stack
          direction="rows"
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">Training</Typography>
          <Stack
            direction="rows"
            spacing={3}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {Array.from(trainingTypes).map((type) => (
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
        {training.map((training) => {
          return (
            <Cards title={training.title} type={capitalize(training.eventType)} price={'Date: ' + training.startingDate} description={training.description} buttonText="View" />
          )
        })}
      </Box>
    </Box>
  )
}
