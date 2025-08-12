import Hero  from "@/components/hero";
import homeImg from '@/assets/images/home.jpg'
export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="car-factory" title="Professional Cloud Housting" />
  );
}
