import Onboarding from '@home/components/Onboarding/Onboarding';
import Wrapper from '@home/components/TinderCard/Wrapper';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <Container pt="md" className="flex min-h-screen flex-col bg-blue-100">
      {/* <Text component="h1" size="xl">
        {LL.home.title()}
      </Text> */}

      <Wrapper />
      <Onboarding />
    </Container>
  );
}
