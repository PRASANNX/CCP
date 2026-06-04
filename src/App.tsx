import { Loader } from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { GlassCardsRandom } from "./components/GlassCardsRandom/GlassCardsRandom";
import { Partners } from "./components/Partners/Partners";
import { FeatureCards } from "./components/FeatureCards/FeatureCards";
import { TableNumbers } from "./components/TableNumbers/TableNumbers";
import { Cases } from "./components/Cases/Cases";
import { GlassCards } from "./components/GlassCards/GlassCards";
import { Composition } from "./components/Composition/Composition";
import { Footer } from "./components/Footer/Footer";
import { Offcanvas } from "./components/Offcanvas/Offcanvas";
import { useLenis } from "./hooks/useLenis";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import './styles/globals.scss';

function App() {
  useLenis();
  useScrollAnimations();

  return (
    <>
      <Loader />
      <Header />

      <main id="top">
        <Hero />
        <GlassCardsRandom />
        <Partners />
        <FeatureCards />
        <TableNumbers />
        <Cases />
        <GlassCards />
        <Composition />
      </main>

      <Footer />
      <Offcanvas />
    </>
  );
}

export default App;
