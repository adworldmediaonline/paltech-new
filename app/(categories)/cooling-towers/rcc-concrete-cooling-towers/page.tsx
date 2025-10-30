import { RCCConcreteCoolingTowersContent } from "@/components/landing/rcc-concrete-cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";

export default function RCCConcreteCoolingTowersPage() {
  return (
    <>
      <CategoryHero title="RCC Concrete Cooling Towers" imageSrc="/categories/rcc-concrete-cooling-towers.png" />
      <RCCConcreteCoolingTowersContent />
    </>
  );
}
