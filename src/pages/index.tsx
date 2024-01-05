import {
  ApplicationsContentApps,
  Description,
  Dots,
  InfoContainer,
  InfoContainerInner,
  Phones,
  Title,
  TreLogo,
} from "@components/components/Home/style";
import MainContainer from "@components/components/MainContainer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title={"მატარებლის ბილეთების აპლიკაცია"}
        description={
          "მარტივად მოძებნე და შეიძინე ბილეთები სასურველი მიმართულებით მთელი საქართველოს მასშტაბით"
        }
        canonical={`https://railway.com.ge`}
        openGraph={{
          images: [
            {
              url: "https://tre.ge/images/ogg-banner.png",
              width: 800,
              height: 600,
              alt: "მარტივად მოძებნე და შეიძინე ბილეთები სასურველი მიმართულებით მთელი საქართველოს მასშტაბით",
            },
          ],
        }}
      />

      <MainContainer>
        <InfoContainer>
          <InfoContainerInner>
            <TreLogo src="/icons/tre-mobile.svg" alt="tre-mobile" />
            <Title>მატარებლის ბილეთების აპლიკაცია</Title>
            <Description>
              მარტივად მოძებნე და შეიძინე ბილეთები სასურველი მიმართულებით მთელი
              საქართველოს მასშტაბით
            </Description>
            <ApplicationsContentApps>
              <a
                href="https://apps.apple.com/us/app/tre-train-tickets/id6449191931"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/app-store.svg" alt="app store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.lemondo.tre"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/play-store.svg" alt="play store" />
              </a>
            </ApplicationsContentApps>
          </InfoContainerInner>
          <Phones src="/icons/phones.svg" alt="phones" />
        </InfoContainer>
      </MainContainer>
    </>
  );
}
