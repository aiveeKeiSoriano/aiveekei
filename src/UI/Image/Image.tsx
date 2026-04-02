export type ImageSources = {
  fallback: string;
  sources?: { src: string; type: string }[];
};
type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  alt: string;
  src: ImageSources | string;
};
export default function Image({ src, alt, ...props }: ImageProps) {
  const isMultiSource = typeof src === "object";
  if (isMultiSource) {
    return (
      <picture>
        {src.sources?.map(({ src, type }) => (
          <source key={type} srcSet={src} type={type} />
        ))}
        <img alt={alt} src={src.fallback} {...props} />
      </picture>
    );
  }
  return <img alt={alt} src={src} {...props} />;
}
