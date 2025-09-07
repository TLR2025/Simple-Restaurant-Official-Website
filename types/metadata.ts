export type Metadata = 
{
    title: string,
    description: string,
    keywords: string[],
    openGragh: {
        title: string,
        description: string,
        url: string,
        siteName: string,
        images: {
            url: string,
            width: number,
            height: number,
            alt: string,
        }[],
        type: "website",
        locale: string,
    }
}