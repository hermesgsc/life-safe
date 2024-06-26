import "./reset.css";
import Banner from './Components/Banner-firstscreen';
import AboutUs from "./Components/About-us";
import Assists from "./Components/Assists";
import WeCare from "./Components/We-care";
import LeadCaption from "./Components/Lead-caption";
import End from "./Components/End";

function App() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Assists />
      <WeCare />
      <LeadCaption />
      <End />
    </div>
  );
}

export default App;
