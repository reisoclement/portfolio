import { Audio, Sequence, staticFile } from "remotion";
import { useLocale } from "../LocaleContext";
import { getSceneStartFrames } from "./scene-starts";

export const Voiceover: React.FC = () => {
  const { locale, t } = useLocale();
  const sceneStarts = getSceneStartFrames(locale);
  return (
    <>
      {t.narration.map((clip) => {
        const startFrame = sceneStarts[clip.id] ?? 0;
        return (
          <Sequence key={clip.id} from={startFrame}>
            <Audio
              src={staticFile(`voiceover/${locale}/${clip.id}.mp3`)}
              volume={() => 1}
            />
          </Sequence>
        );
      })}
    </>
  );
};
