import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import LikeButton from './components/LikeButton'; 
export default function Home() {
  return (
    <main>
      <Hero
      title= 'The Movies That Own My Screen'
      tagline='Films are a one-time watch, but these legendary Chinese masterpieces get better every single time you hit play.'
      />
      <CardGrid items={items} />
    </main>
  );  
}