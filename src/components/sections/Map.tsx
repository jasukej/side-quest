import React, { useEffect, useState } from "react";
import { Map, useMap, Marker } from "@vis.gl/react-google-maps";
import { fetchPlaces, fetchStories } from "../../../utils/firebaseUtils";
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

interface Place {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  mission?: string;
  url: string;
  description: string;
  contact_field: string[];
}

function VancMap() {
  const map = useMap();
  const [stories, setStories] = useState<Story[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    async function loadStories() {
      const storiesData = await fetchStories();
      setStories(storiesData as Story[]);
    }
    async function loadPlaces() {
      const placesData = await fetchPlaces();
      setPlaces(placesData as Place[]);
    }
    loadStories();
    loadPlaces();
  }, []);

  useEffect(() => {
    if (map) {
      map.setOptions({
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#212121" }]
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#212121" }]
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ color: "#757575" }]
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill", 
            stylers: [{ color: "#9e9e9e" }]
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#181818" }]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1b1b1b" }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#2c2c2c" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8a8a8a" }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#373737" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#3c3c3c" }]
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#4e4e4e" }]
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }]
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#3d3d3d" }]
          }
        ],
        mapTypeId: "roadmap",
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
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
        defaultZoom={16}
        defaultCenter={{ lat: 49.281282350356186, lng: -123.10014107629969 }}
        style={{
          // filter: "grayscale(100%) brightness(50%)"
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
              icon={{
                url: '/assets/markers/interview.png',
                scaledSize: new google.maps.Size(45, 45)
              }}
            />
          </SheetTrigger>
          <SheetContent className="py-[5rem] px-[2rem] overflow-y-auto max-h-screen">
            <SheetHeader>
              <div className="w-full h-[15rem] overflow-hidden mb-[1rem]">
                <img 
                  src={story.img_url} 
                  className="w-full h-full object-cover filter grayscale brightness-60"
                />
              </div>
              <div className="flex flex-row gap-[0.5rem]">
                <SheetTitle className="text-white text-2xl font-serif">{story.name}</SheetTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256" className="hover:underline"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </div>
              <SheetDescription>
                {story.story}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-[2rem]">
              <h3 className="text-white text-xl font-serif mb-[1rem]">{story.name} hopes for</h3>
              <div className="flex flex-col divide-y divide-neutral-800">
                {story.goals && story.goals.map((goal, index) => (
                  <div
                    key={index}
                    className="px-[0.5rem] text-neutral-200 flex flex-row gap-[1rem]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M221.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H196.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,181.66Z"></path></svg> 
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        ))}
        {places.map((place, index) => (
          <Sheet key={index}>
            <SheetTrigger asChild>
              <Marker
                key={index}
                position={{
                  lat: place.location.latitude,
                  lng: place.location.longitude,
                }}
                icon={{
                  url: '/assets/markers/shelter.png',
                  scaledSize: new google.maps.Size(35, 40)
                }}
              />
            </SheetTrigger>
            <SheetContent className="py-[5rem] px-[2rem] overflow-y-auto max-h-screen">
              <SheetHeader>
                <div className="w-full h-[15rem] overflow-hidden mb-[1rem]">
                </div>
                <SheetTitle className="text-white text-2xl font-serif">{place.name}</SheetTitle>
                <SheetDescription>
                  {place.description}
                </SheetDescription>
              </SheetHeader>
              {place.contact_field && place.contact_field.length > 0 && (
              <div className="mt-[2rem]">
                <h3 className="text-white text-xl font-serif mb-[1rem]">You can contact {place.name} at</h3>
                <div className="flex flex-col divide-y divide-neutral-800">
                  {place.contact_field.map((contact, idx) => (
                    <div
                      key={idx}
                      className="px-[0.5rem] text-neutral-200 flex flex-row gap-[1rem]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M221.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H196.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,181.66Z"></path></svg> 
                      <span>{contact}</span>
                    </div>
                  ))}
                </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        ))}
      </Map>
    </div>
  );
}
export default VancMap;
