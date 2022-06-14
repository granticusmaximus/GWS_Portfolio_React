import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0hm5a81q",
  dataset: "production",
  useCdn: true,
});