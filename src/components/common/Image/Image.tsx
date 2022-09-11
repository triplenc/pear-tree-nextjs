import { ImageProps } from "./interfaces";
import { ImageContainer, ImageStyle } from "./styles";

export function Image({ alt, src }: ImageProps) {
  return (
    <ImageContainer>
      <ImageStyle alt={alt} loading="lazy" src={src} />
    </ImageContainer>
  );
}
