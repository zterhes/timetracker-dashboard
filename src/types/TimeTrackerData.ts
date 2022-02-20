export default interface TimeTrackerData {
  userdata: {
    name: string;
    img: string;
  };
  timeTypes: TimeTypes[];
}

interface TimeTypes {
  title: string;
  style: {
    icon: string;
    color: string;
  };
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: { current: number; previous: number };
    monthly: { current: number; previous: number };
  };
}
