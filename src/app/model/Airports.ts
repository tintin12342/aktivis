export enum LocationSubType {
  AIRPORT = 'AIRPORT',
  CITY = 'CITY',
  POINT_OF_INTEREST = 'POINT_OF_INTEREST',
  DISTRICT = 'DISTRICT',
}

interface Location {
  type: string;
  subType: LocationSubType;
  name: string;
  detailedName: string;
  id: string;
  self: {
    href: string;
    methods: string[];
  };
  timeZoneOffset: string;
  iataCode: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  address: {
    cityName: string;
    cityCode: string;
    countryName: string;
    countryCode: string;
    stateCode?: string;
    regionCode: string;
  };
  analytics?: {
    travelers: {
      score: number;
    };
  };
}

export interface Airports {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: Location[];
}
