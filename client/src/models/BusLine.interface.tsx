export interface BusLine {
  DirectionCode: string;
  ExistsFromDate: string;
  JourneyPatternPointNumber: string;
  LastModifiedUtcDateTime: string;
  LineNumber: string;
  StopName?: {
    ExistsFromDate: string;
    LastModifiedUtcDateTime: string;
    LocationEastingCoordinate: string;
    LocationNorthingCoordinate: string;
    StopAreaNumber: string;
    StopAreaTypeCode: string;
    StopPointName: string;
    StopPointNumber: string;
    ZoneShortName: string;
  };
}
