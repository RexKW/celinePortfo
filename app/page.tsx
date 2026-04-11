import Image from "next/image";
import NavbarMain from "./components/navbarMain";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import PageWrapper from "./components/pageWrapper";
import Grainient from '../components/Grainient';
import { grenzeGotisch } from "./fonts";



export default function Home() {


  return (
    <PageWrapper>
      <div className={`flex text-white overflow-hidden ${grenzeGotisch.className}  relative flex-col min-h-screen items-center justify-center  bg-[#f8f5f2] bg-[radial-gradient(circle_at_0%_0%,#963d29,transparent_65%),radial-gradient(circle_at_100%_0%,#702808,transparent_65%),radial-gradient(circle_at_50%_50%,#9c501c,transparent_65%),radial-gradient(circle_at_100%_50%,#9c501c,transparent_65%),radial-gradient(circle_at_0%_100%,#702808,transparent_65%),radial-gradient(circle_at_100%_100%,#63291b,transparent_65%)] font-sans dark:bg-black`}>
        <Grainient
            color1="#963D29"
            color2="#A14D24"
            color3="#702808"
            timeSpeed={0.4}
            colorBalance={0.05}
            warpStrength={2}
            warpFrequency={4}
            warpSpeed={2}
            warpAmplitude={80}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={0.7}
            centerX={0}
            centerY={0}
            zoom={0.9}
            className="absolute z-0 inset-0 w-full h-full "
          />
        <NavbarMain />
        <Image
          src="/main/BackgroundStars.svg"
          alt="Background"
          fill
          className="object-cover z-2 pointer-events-none"
        />
        <Image
          src="/main/grainMain.webp"
          alt="Background"
          fill
          className="object-cover opacity-[25%] mix-blend-difference z-3 pointer-events-none"
        />
        <div className="relative">
          <About />
        
          {/* <div className="h-[70vh] mix-blend md:h-[125vh] w-full absolute z-1 top-[-10%] md:top-[-25%] left-0 blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#6a220fee_0%,#6a220faa_25%,#6a220f55_50%,transparent_80%)] lg:hidden">
          </div>
          <div className="h-[70vh] md:h-[125vh]  w-full absolute z-1 top-[-10%] md:top-[-25%] right-0 blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#6a220fee_0%,#6a220faa_25%,#6a220f55_50%,transparent_80%)]">
          </div>
          <div className="h-[70vh] md:h-[125vh]  w-full absolute z-1 top-[-10%] md:top-[-25%] left-0 blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#6a220fee_0%,#6a220faa_25%,#6a220f55_50%,transparent_80%)]">
          </div> */}

          {/* yellow light */}
          <div className="h-[70vh] md:h-[125vh] w-full absolute z-1 top-[-5%] md:top-[-15%] blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#efbe35ee_0%,#efbe35aa_25%,#ab732755_50%,transparent_80%)]">
          </div>
          <div className="h-[70vh] md:h-[125vh] w-full absolute z-1 top-[-5%] md:top-[-15%] blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#efbe35ee_0%,#efbe35aa_25%,#ab732755_50%,transparent_80%)]">
          </div>
          <div className="h-[155vh] w-full absolute z-0 top-[-25%]
        bg-[radial-gradient(ellipse_70%_50%_at_center,#ab7327cc_0%,#ab732788_35%,#ab732744_65%,transparent_90%)]">
          </div>

        </div>
        <div className="relative">
          <Portfolio />
          <div className="h-[70vh] md:h-[200vh] w-full absolute z-1 bottom-[-25%] left-[-50%] blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#903720ee_0%,#903720aa_25%,#90372055_50%,transparent_80%)]">
          </div>
          <div className="h-[150vh] w-full absolute z-0 bottom-0 blur-2xl 
          bg-[radial-gradient(ellipse_60%_60%_at_center,#ee7e33ee_0%,#ee7e33aa_25%,#ee7e3355_50%,transparent_80%)]">
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
