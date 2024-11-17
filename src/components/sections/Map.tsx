import React, { useEffect, useState } from "react";
import { Map, useMap, Marker } from "@vis.gl/react-google-maps";
import { fetchStories } from "../../../utils/firebaseUtils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Define the type for a story
interface Story {
  location: {
    latitude: number;
    longitude: number;
  };
  name: string;
  story: string;
  img_url: string;
  age: number;
  goals: string[];
  profession: string;
  homeless_since?: string;
  // Add other properties ig
}

function VancMap() {
  const map = useMap();
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    async function loadStories() {
      const storiesData = await fetchStories();
      setStories(storiesData as Story[]);
    }
    loadStories();
  }, []);

  useEffect(() => {
    if (map) {
      map.setOptions({
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#dadada" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
        ],
        mapTypeId: "satellite",
      });
    }
  }, [map]);

  return (
    <div
      id="stories"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Map
        defaultZoom={17}
        defaultCenter={{ lat: 49.281282350356186, lng: -123.10014107629969 }}
        style={{
          filter: "grayscale(100%) brightness(50%)"
        }}
      >
        {stories.map((story, index) => (
          <Sheet key={index}>
          <SheetTrigger asChild>
            <Marker
              key={index}
              position={{
                lat: story.location.latitude,
                lng: story.location.longitude,
              }}
              
              // options={{
              //   icon: {
              //     path: google.maps.SymbolPath.CIRCLE,
              //     fillColor: "#FFFFFF",
              //     fillOpacity: 1,
              //     strokeWeight: 0,
              //     scale: 8,
              //   },
              // }}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{story.name}</SheetTitle>
              <SheetDescription>
                {story.story}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        ))}
      </Map>
    </div>
  );
}
export default VancMap;
