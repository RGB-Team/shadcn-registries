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
  const interSemiBold = fetch(
    new URL("@/app/fonts/GeistMonoVF.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "32px",
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h3
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Icons.logo />
            shadcn registries
          </h3>
          <div>
            <h2
              style={{
                fontSize: "64px",
                fontWeight: "700",
              }}
            >
              {registry.title}
            </h2>
            <p>made by</p>
            {registry.authors.slice(0, render).map((author, idx) => (
              <div
                key={`author-${author.name}`}
                style={{
                  position: "absolute",
                  right: `${idx * 28}px`,
                  transition: "all",
                }}
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  height={40}
                  width={40}
                />
              </div>
            ))}
            {leftAuthor > 0 && (
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
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
      fonts: [
        {
          name: "Geist Mono",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
