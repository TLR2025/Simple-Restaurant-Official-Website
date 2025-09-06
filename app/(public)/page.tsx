import FixedBg from "@/components/fixed-bg";
import Slide1 from "@/components/landing/slide1";
import Slide2 from "@/components/landing/slide2";
import Slide3 from "@/components/landing/slide3";
import Slide4 from "@/components/landing/slide4";
import Slide5 from "@/components/landing/slide5";
import Slide6 from "@/components/landing/slide6";
import { generateMetaDataFromURL } from "@/lib/generate-meta-data";

export async function generateMetadata(){
  const metadata = await generateMetaDataFromURL("/");
  // console.log(metadata);
  return metadata;
}

export default function LandingPage(){
  return (
    <>
      <FixedBg />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
    </>
  );
}