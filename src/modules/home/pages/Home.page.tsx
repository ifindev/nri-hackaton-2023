import Onboarding from '@home/components/Onboarding/OnboardingSwipe';

export default function HomePage() {
  return (
    <div className="h-screen bg-red-100 font-sans">
      <Onboarding
        count={1}
        title="Let's get you ready!"
        description={
          <h2 className="mt-20 text-center text-[1.75em] font-bold leading-[1.75em] text-hanepyon-blue">
            Swipe right with <br /> two fingers to like!
          </h2>
        }
        type="swipe-right"
      />
    </div>
  );
}
