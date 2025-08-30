import FixedBg from "@/components/fixed-bg";
import Slide1 from "@/components/slide1";
import Slide2 from "@/components/slide2";
import Slide3 from "@/components/slide3";
import Slide4 from "@/components/slide4";
import Slide5 from "@/components/slide5";
import Slide6 from "@/components/slide6";
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