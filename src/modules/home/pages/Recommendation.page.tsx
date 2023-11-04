import bgm from '@assets/audios/8-selection-bgm.mp3';
import usePlayAudio from '@auth/hooks/usePlayAudio/usePlayAudio.hook';
import RecommendationList from '@home/components/Recommendation/RecommendationList';

export default function RecommendationPage() {
  usePlayAudio(bgm);
  return (
    <div className="h-screen font-sans">
      <RecommendationList />
    </div>
  );
}
