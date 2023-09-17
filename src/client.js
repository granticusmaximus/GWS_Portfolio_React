import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "g8ilm21s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-07-27", // use a UTC date string
});
