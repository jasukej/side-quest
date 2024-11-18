import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchStories() {
  const storiesCollection = collection(db, "stories");
  const storiesSnapshot = await getDocs(storiesCollection);
  const storiesList = storiesSnapshot.docs.map(doc => doc.data());
  return storiesList;
} 

export async function fetchPlaces() {
    const placesCollection = collection(db, "places");
    const placesSnapshot = await getDocs(placesCollection);
    const placesList = placesSnapshot.docs.map(doc => doc.data());
    return placesList;
}