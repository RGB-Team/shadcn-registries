import { Icons } from "@/components/icons";
import { getSingleRegistry } from "@/db";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type RegistryIdPgeProps = {
  params: {
    registryId: string;
  };
};

const render = 5;
// Image generation
export default async function Image({
  params: { registryId },
}: RegistryIdPgeProps) {

  const registry = await getSingleRegistry(registryId);
  if (!registry) notFound();

  const leftAuthor = registry.authors.length - render;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#000",
          color: "#fff",
        }}
        tw="flex items-center flex-col justify-center"
      >
          <div tw="flex items-center justify-center flex-col space-2">
            <div tw="flex items-center flex-col space-2" >
              <h2
                tw="text-4xl font-bold"
              >
                {registry.title}
              </h2>
              <p tw="text-xl font-medium" >
                {registry.searchDescription}
              </p>
            </div>
            <p tw="text-lg" >made by</p>
            <div tw="flex items-center space-3 justify-center relative mt-2 w-20">
              {registry.authors.slice(0, render).map((author, idx) => (
                  <img
                    style={{
                      position : "absolute",
                      right : `${idx * 28}px`
                    }}
                    key={`author-${author.name}`}
                    src={author.avatar}
                    alt={author.name}
                    height={40}
                    width={40}
                    tw="rounded-full"
                  />
              ))}
              {leftAuthor > 0 && (
                <div
                  tw="flex items-center justify-center absolute right-0"
                  style={{
                    height : 40,
                    width : 40,
                    borderRadius: "9999px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  +{leftAuthor}
                </div>
              )}
            </div>
          </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
