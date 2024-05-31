import { Box, Button, Card, CardBody, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function TeacherHomePage() {
  const navigate = useNavigate();

  return (
    <Box bg="black" color="white" minH="100vh" p={4}>
      <Box bg="amber" p={4} mb={4}>
        <Heading>Teacher Home</Heading>
      </Box>
      <Stack spacing={4} divider={<StackDivider borderColor="gray.700" />}>
        <Card bg="gray.900" borderRadius="md">
          <CardBody>
            <Text fontSize="xl" onClick={() => navigate("/create-homework")}>
              Create Homework
            </Text>
          </CardBody>
        </Card>
        <Card bg="gray.900" borderRadius="md">
          <CardBody>
            <Text fontSize="xl" onClick={() => navigate("/manage-homework")}>
              Manage Homework
            </Text>
          </CardBody>
        </Card>
        <Button bg="amber" borderRadius="md" onClick={() => {}}>
          Another Action
        </Button>
      </Stack>
    </Box>
  );
}

export default TeacherHomePage;
