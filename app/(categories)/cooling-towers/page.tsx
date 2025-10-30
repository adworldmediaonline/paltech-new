import { CoolingTowersContent } from "@/components/landing/cooling-towers-content";
import { CategoryHero } from "@/components/landing/category-hero";

export default function CoolingTowersPage() {
  return (
    <>
      <CategoryHero title="Cooling Towers" imageSrc="/categories/cooling-towers.png" />
      <CoolingTowersContent />
    </>
  );
}
