import CategoryWrapper from '@home/components/Category/Category';
import HanepyonFirst from '@home/components/Hanepyon/HanepyonFirst';
import HanepyonSecond from '@home/components/Hanepyon/HanepyonSecond';
import OnboardingNextFlight from '@home/components/Onboarding/OnboardingNextFlight';
import OnboardingSwipeWrapper from '@home/components/Onboarding/OnboardingSwipe';
import { HomeSearchParams } from '@home/types/home.type';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  const { step } = params as unknown as HomeSearchParams;

  return (
    <div className="h-screen font-sans">
      {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
      {!step || step === 'landing' ? (
        <HanepyonFirst />
      ) : step === 'avatar' ? (
        <HanepyonSecond />
      ) : step === 'how-to-use' ? (
        <OnboardingSwipeWrapper />
      ) : step === 'time' ? (
        <OnboardingNextFlight />
      ) : (
        <CategoryWrapper />
      )}
    </div>
  );
}
