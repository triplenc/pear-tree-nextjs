import { ImageProps } from "./interfaces";
import { ImageContainer, ImageStyle } from "./styles";

export function Image({ src, alt }: ImageProps) {
  return (
    <ImageContainer>
      <ImageStyle src={src} alt={alt} loading="lazy" />
    </ImageContainer>
  );
}
