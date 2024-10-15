import Image, { ImageProps } from "next/image";

type ImageBlockProps = {
  image: ImageProps | null;
};

export default function ImageBlock(props: ImageBlockProps) {
  const { image } = props;
  return (
    <>
      {image && (
        <div className="image-wrapper">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      {!image && (
        <div className="image-wrapper">
          <Image
            src={`https://picsum.photos/seed/${Math.floor(
              Math.random() * 100
            )}/900/600.webp`}
            alt="placeholder"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
