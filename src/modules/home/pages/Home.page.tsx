import HomeClock from '@home/components/HomeClock/HomeClock';
import Wrapper from '@home/components/TinderCard/Wrapper';
import { useI18nContext } from '@i18n/i18n-react';
import { Container, Text } from '@mantine/core';

export default function HomePage() {
  // useCheckAuthFirebase();
  const { LL } = useI18nContext();

  return (
    <Container pt="md" className="flex flex-col">
      <Text component="h1" size="xl">
        {LL.home.title()}
      </Text>

      <HomeClock />

      <Wrapper />
    </Container>
  );
}
