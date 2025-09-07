import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "@/types/metadata";

export async function generateMetaDataFromURL(pageURL:string){
    const payload = await getPayload({config});
    const metadata = await payload.find({
        collection: "metadatas",
        where: {
            relativeURL: {
                equals: pageURL,
            }
        }
    });
    const res: Metadata = {
        title: metadata.docs[0].title + (metadata.docs[0].relativeURL === "/" ? "" : (" - " + process.env.NEXT_PUBLIC_SITE_NAME)),
        description: metadata.docs[0].description,
        keywords: (metadata.docs[0].keywords as Array<{
            id: string,
            keyword: string,
        }>).map((v)=>v.keyword),
        openGragh: {
            title: metadata.docs[0].title,
            description: metadata.docs[0].description,
            url: process.env.NEXT_PUBLIC_SITE_URL + pageURL,
            siteName: process.env.NEXT_PUBLIC_SITE_NAME!,
            images: metadata.docs[0].images,
            type: "website",
            locale: "en",
        }
    };

    return res;
}