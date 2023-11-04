import HanepyonFirst from '@home/components/Hanepyon/HanepyonFirst';
import HanepyonSecond from '@home/components/Hanepyon/HanepyonSecond';
import OnboardingSwipeWrapper from '@home/components/Onboarding/OnboardingSwipe';
import { HomeSearchParams } from '@home/types/home.type';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  const { step } = params as unknown as HomeSearchParams;

  return (
    <div className="h-screen font-sans">
      {step === 'landing' ? (
        <HanepyonFirst />
      ) : step === 'avatar' ? (
        <HanepyonSecond />
      ) : step === 'how-to-use' ? (
        <OnboardingSwipeWrapper />
      ) : (
        <HanepyonFirst />
      )}
    </div>
  );
}
