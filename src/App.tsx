import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Features } from './components/Features';
import { MarketPulse } from './components/MarketPulse';
import { WhySnipersVerse } from './components/WhySnipersVerse';
import { PoweredBy } from './components/PoweredBy';
import { Pricing } from './components/Pricing';
import { Finicons } from './components/Finicons';
import { FiniconBanner } from './components/FiniconBanner';
import { HowItWorks } from './components/HowItWorks';
import { SniperMarket } from './components/SniperMarket';
import { ConnectWallet } from './components/ConnectWallet';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black font-sans">
      <Header />
      <Banner />
      <Features />
      <MarketPulse />
      <WhySnipersVerse />
      <PoweredBy />
      <Pricing />
      <Finicons />
      <FiniconBanner />
      <HowItWorks />
      <SniperMarket />
      <ConnectWallet />
      <Footer />
    </div>
  )
}

