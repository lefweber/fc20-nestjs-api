import { Injectable } from '@nestjs/common';
import {
  Client as GoogleMapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js';

@Injectable()
export class PlacesService {
  constructor(private googleMapsClient: GoogleMapsClient) {}

  async findPlaces(text: string) {
    const apiKey = process.env.GOOGLE_API_KEY;
    const { data } = await this.googleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
        key: apiKey,
      },
    });

    return data;
  }
}
