// import { SmileFilled } from "@ant-design/icons";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import StartBuildingNow from "./Components/StartBuildingNow/StartBuildingNow";
import UnderTheHood from "./Components/UnderTheHood/UnderTheHood";
import Testimonials from "./Components/Temtimonials/Testimonials";
import TrustedBy from "./Components/TrustedBy/TrustedBy";
import CommunitySupport from "./Components/CommunitySupport/CommunitySupport";
import AppsYouCanBuild from "./Components/AppsYouCanBuild/AppsYouCanBuild";
import TheFoundationYouNeed from "./Components/TheFoundationYouNeed/TheFoundationYouNeed";
import WeSpeakYourLanguage from "./Components/WeSpeakYourLanguage/WeSpeakYourLanguage";
import RemoveTheComplexity from "./Components/RemoveTheComplexity/RemoveTheComplexity";
import WhatMakesUsUnique from "./Components/WhatMakesUsUnique/WhatMakesUsUnique";
import DontStartFromScratch from "./Components/DontStartFromScratch/DontStartFromScratch";
import LowCodeBanner from "./Components/LowCodeBanner/LowCodeBanner";
import Help from "./Components/Help/Help";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LowCodeBanner />
      <DontStartFromScratch />
      <WhatMakesUsUnique />
      <RemoveTheComplexity />
      <WeSpeakYourLanguage />
      <TheFoundationYouNeed />
      <AppsYouCanBuild />
      <CommunitySupport />
      <TrustedBy />
      <Testimonials />
      <UnderTheHood />
      <StartBuildingNow />
      <Footer />
      <Help />
    </div>
  );
}

export default App;
