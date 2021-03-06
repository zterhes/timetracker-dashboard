enum TimeFrames {
  DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
}

export function enumFromStringValue<T>(
  enm: { [s: string]: T },
  value: string
): T | undefined {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}

export default TimeFrames;
