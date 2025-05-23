import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { QueryParams } from "@sanity/client";

// Core client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "published",
});

// Environment validation
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables"
  );
}

// Image URL builder
const builder = imageUrlBuilder(client);
export const urlForImage = (source: any) => builder.image(source);

// Unified fetch helper
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  stega = false,
  perspective = "published",
}: {
  query: string;
  params?: QueryParams;
  stega?: boolean;
  perspective?: "published" | "previewDrafts";
}) {
  return client.fetch<QueryResponse>(query, params, {
    stega,
    perspective,
    // Add these options to every query by default
    filterResponse: true,
    resultSourceMap: stega ? "withKeyArraySelector" : false,
  });
}

// Debug utility (moved from sanity.debug.ts)
export async function verifySanityConnection() {
  try {
    const data = await client.fetch(`*[_type == "systemSettings"][0]{
      _id,
      _type,
      "dataset": select(defined(^._dataset) => ^._dataset, "unknown")
    }`);

    console.log("Sanity Connection Verified:");
    console.table({
      ProjectID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      Dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      ServerDataset: data?.dataset || "not found",
      DocumentID: data?._id || "none",
      TokenPresent: !!process.env.SANITY_WRITE_TOKEN,
    });
  } catch (error) {
    console.error("Sanity Connection Error:", error);
  }
}
