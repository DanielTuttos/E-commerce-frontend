import BannerDiscount from '@/components/banner-discount';
import CarouselTextBanner from '@/components/carousel-text-banner';
import FeaturedProducts from '@/components/featured-products';

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
    </main>
  );
}
