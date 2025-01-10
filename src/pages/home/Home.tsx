import HeroSection from "../../components/hero-section/HeroSection";
import TrendingCollections from "../../components/trending-collection/TrendingCollection";
import BrowseCategories from "../../components/browse-categories/BrowseCategories";
import DiscoverMoreNfts from "../../components/discover-more-nfts/DiscoverMoreNfts";
import MagicMushroom from "../../components/magic-mashroom/MagicMashroom";
import HowItWorks from "../../components/how-it-works/HowItWorks";
import WeeklyDigest from "../../components/weekly-digest/WeeklyDigest";

function Home() {
  return (
    <div>
      <HeroSection />
      <TrendingCollections />
      <BrowseCategories />
      <DiscoverMoreNfts />
      <MagicMushroom />
      <HowItWorks />
      <WeeklyDigest />
    </div>
  );
}

export default Home;
