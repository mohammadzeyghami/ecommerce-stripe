import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// sanity verifation
export const client = sanityClient({
  projectId: "b9t3qba9",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
// skC8PwAkDW2iOiL04GvyE8cotoJHjAGzI4td1APqqoEzevr3fpRY5NUv1K9g6c0RmghuezniBKHfBBGmULD4WR1pYOkPNuuVeq697JM2PcfCv7UUqbrTAVoXYYbluVrGrEtSSgfSEa26rm6AlDoJ1gWszLEQmFLZ7LSZlEayBsFwD7rpmTsa
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
