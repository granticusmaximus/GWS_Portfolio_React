import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0hm5a81q",
  dataset: "production",
  useCdn: true,
  apiVersion: '2022-07-27', // use a UTC date string
});