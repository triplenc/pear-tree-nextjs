import Image from "next/image";

import {
  SplashContainer,
  SplashImageContainer,
  TitleImageContainer,
} from "./styles";

export function Splash() {
  return (
    <SplashContainer>
      <TitleImageContainer>
        <Image
          alt="배달 나눠 무라"
          height={20}
          src="/images/sub-title.png"
          width={139}
        />
        <Image alt="배나무" height={44} src="/images/title.png" width={143} />
      </TitleImageContainer>
      <SplashImageContainer>
        <Image
          alt="메인 화면 로딩"
          height={1500}
          layout="fill"
          src="/images/splash.png"
          width={1500}
        />
      </SplashImageContainer>
    </SplashContainer>
  );
}
