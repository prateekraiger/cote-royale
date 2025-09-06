import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  
  try {
    const page = await client.getSingle("homepage");
    return <SliceZone slices={page.data.slices} components={components} />;
  } catch (error) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Côte Royale Paris</h1>
          <p className="text-gray-300">Website is loading...</p>
          <p className="text-sm text-gray-500 mt-2">Please check Prismic configuration</p>
        </div>
      </div>
    );
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  
  try {
    const page = await client.getSingle("homepage");
    return {
      title: page.data.meta_title,
      description: page.data.meta_description,
      openGraph: {
        images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
      },
    };
  } catch (error) {
    return {
      title: "Côte Royale Paris",
      description: "Luxury fragrances from Paris",
    };
  }
}
