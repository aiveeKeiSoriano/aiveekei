export type ImageSources = {
  fallback: string;
  sources?: { src: string; type: string }[];
};
type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string | ImageSources;
};
export default function Image({ src, ...props }: ImageProps) {
  const isMultiSource = typeof src === "object";
  if (isMultiSource) {
    return (
      <picture>
        {src.sources?.map(({ src, type }) => (
          <source key={type} srcSet={src} type={type} />
        ))}
        <img src={src.fallback} {...props} />
      </picture>
    );
  }
  return <img src={src} {...props} />;
}
