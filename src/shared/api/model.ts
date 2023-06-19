export type TimestampResponseType = TimestampType[];

type TimestampType = {
  id: number;
  timestamp: number;
  duration: number;
  zone: ZoneType;
};

type ZoneType = {
  left: number;
  top: number;
  width: number;
  height: number;
};
