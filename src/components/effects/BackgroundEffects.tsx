import DatasphereParticles from "./DatasphereParticles";
import GradientBlurs from "./GradientBlurs";
import MouseSpotlight from "./MouseSpotlight";

const BackgroundEffects = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#121212]" aria-hidden="true" />
    <DatasphereParticles />
    <GradientBlurs />
    <MouseSpotlight />
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,0,0,0.07)_0%,_transparent_55%)]"
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#121212_100%)]"
      aria-hidden="true"
    />
  </div>
);

export default BackgroundEffects;
