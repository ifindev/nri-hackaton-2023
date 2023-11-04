import { Stack, Text } from '@mantine/core';
import classes from './Counter.module.css';

interface CounterProps {
  label: string;
  count: number;
}

export default function Counter({ count, label }: CounterProps) {
  return (
    <Stack className="items-center space-y-2">
      <Text className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-medium">
        {count}
      </Text>

      <Text className={classes.container__text}>{label}</Text>
    </Stack>
  );
}
