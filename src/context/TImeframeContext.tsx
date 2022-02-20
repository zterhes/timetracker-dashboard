import React, { createContext } from "react";
import TimeFrames from "../types/TimeFrames";

interface TimeFrameContextState {
  timeFrame: TimeFrames;
  setTimeFrame: (state:TimeFrames) => void;
}

const defaultContext = {
  timeFrame: TimeFrames.WEEKLY,
  setTimeFrame: ()=>{}
};

const TImeframeContext = createContext<TimeFrameContextState>(defaultContext);

export default TImeframeContext;
