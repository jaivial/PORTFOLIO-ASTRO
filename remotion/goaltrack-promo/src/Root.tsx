import React from "react";
import { Composition } from "remotion";
import { GoalTrackPromo } from "./GoalTrack";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="GoalTrackPromo"
      component={GoalTrackPromo}
      durationInFrames={280}
      fps={30}
      width={1080}
      height={1350}
    />
  );
};
