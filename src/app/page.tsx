import { HeroSection } from '@/components/sections/HeroSection';
import { StrengthsShowcase } from '@/components/sections/StrengthsShowcase';
import { ProductsShowcase } from '@/components/sections/ProductsShowcase';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
      <div className="overflow-hidden">
        <HeroSection />
        <StrengthsShowcase />
        <ProductsShowcase />
        <ServicesOverview />
        <CTASection />
      </div>
  );
}