import { FrpCoolingTowersContent } from "@/components/landing/frp-cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";

export default function Page() {
  return (
    <>
      <CategoryHero title="FRP Cooling Towers" imageSrc="/categories/frp-cooling-towers.png" />
      <FrpCoolingTowersContent />
    </>
  );
}


