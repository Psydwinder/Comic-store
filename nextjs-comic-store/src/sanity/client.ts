import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "m6r9f35v",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});