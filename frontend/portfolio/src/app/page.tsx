import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { CoverDemo } from "./components/CoverDemo";
import Footer from "./components/Footer";
import { GoogleGeminiEffectDemo } from "./components/GoogleGeminiEffectDemo";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import MainContent from "./components/MainContant";



export default function Home() {
  return (
    <>
        <div className="text-2xl text-center">
            <MainContent/>
            <GoogleGeminiEffectDemo />
            <CardHoverEffectDemo/>
            <CoverDemo/>
            <HeroParallaxDemo/>
            <Footer/>
        </div>    
    </>
  );
}
