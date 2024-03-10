import { LocationSubType } from "./Airports";

export interface AirportDetails {
  meta: {
    links: {
      self: string;
    };
  };
  data: {
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
      regionCode: string;
    };
    analytics: {
      travelers: {
        score: number;
      };
    };
  };
}
