import ChartCard from '@/components/chart-card';
import { BarChart as BarChartIcon } from 'lucide-react';
import chartData from './chartData.json';

// Analysis strings are hardcoded as they don't change
const lowestAvgPriceByBrandAnalysis = [
  "The chart shows a tiered market where brands compete in different price segments.",
  "Entry-level brands (e.g., rashnik, mika) dominate by offering affordability.",
  "Mid-range brands (e.g., ramtons, haier) target value-conscious customers and compete closely.",
  "Premium brands (e.g., midea, ecomax) compete on perceived quality and brand prestige rather than price.",
  "Ecomax appears to target a luxury niche."
];

const overallAvgDiscountAnalysis = [
  "Products in the dataset have an average discount of 27.1%.",
  "This means roughly a quarter of the total product value is discounted at the time of the scrape.",
  "The remaining 72.9% represents the portion of the price that is not discounted.",
  "Discounts are a significant factor in the marketplace, but most of the product value remains undiscounted."
];

const highestAvgDiscountByBrandAnalysis = [
  "There is a clear inverse relationship between average price and average discount.",
  "Entry-level brands (e.g., aillyons, em, von) offer high average discounts of over 40%, focusing on aggressive promotions.",
  "Premium brands (e.g., rashnik, ecomax) offer low average discounts of about 15%, relying on brand value rather than promotions."
];

const ratingVsPriceAnalysis = [
  "The scatter plot shows no strong correlation between product rating and price.",
  "Most products, regardless of price, are rated between 4.0 and 5.0 stars.",
  "Some outliers exist, including a high-priced product with a low rating, indicating possible mismatch between cost and perceived value."
];

const avgRatingByBrandAnalysis = [
  "Most brands have very high customer satisfaction, with average ratings between 4.3 and 4.8 stars.",
  "The highest-rated brand is maxmo.",
  "Lower-rated brands (e.g., roch, vision, aillyons) may have a few poorly rated products pulling their average down.",
  "Even the lowest-rated brands still have ratings above 3.0, indicating generally good marketplace quality."
];

const recommendations = {
  lowestAvgPriceByBrand: `Rashnik leads with the lowest average product price at 1,445. This suggests they are strongly positioned in the budget segment. Brands like Ecomax and Midea, with much higher averages, may want to explore entry-level offerings to compete in lower price brackets.`,

  overallAvgDiscount: `The marketplace-wide average discount is 27.1%. This indicates a moderate reliance on discounts to drive sales. Sellers should align promotional strategies around this benchmark, offering slightly higher-than-average discounts during campaigns to stand out.`,

  highestAvgDiscountByBrand: `Ailyons leads with a striking 46% average discount, indicating a heavy promotional pricing strategy. Brands with lower averages, like Ecomax (14%), might not be leveraging discounting as aggressively—potentially missing out on deal-driven customers.`,

  ratingVsPrice: `The price-to-rating scatter plot shows no strong linear relationship—high ratings appear across both low- and high-priced products. This means quality perception is not strictly tied to price, so budget-friendly brands can still compete on reputation if they maintain high customer satisfaction.`,

  avgRatingByBrand: `Maxmo tops the list with an impressive 4.83 average rating, showing strong customer trust. Brands below 4.0, like Rashnik (3.9) and Roch (3.5), should focus on improving product quality and post-sale service to boost ratings and market credibility.`
};

// Chart configurations
const lowestAvgPriceByBrandConfig = {
  avg_price: { label: 'Average Price (KES)', color: 'hsl(var(--chart-1))' },
};
const highestAvgDiscountByBrandConfig = {
  avg_discount: { label: 'Average Discount (%)', color: 'hsl(var(--chart-2))' },
};
const ratingVsPriceConfig = {
  price: { label: 'Price (KES)', color: 'hsl(var(--chart-3))' },
  rating: { label: 'Rating', color: 'hsl(var(--chart-4))' },
};
const avgRatingByBrandConfig = {
  avg_rating: { label: 'Average Rating', color: 'hsl(var(--chart-5))' },
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
          Charts and Analysis
        </h1>
        <p className="text-muted-foreground text-lg">
          Key marketplace metrics and brand comparisons.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <ChartCard
          title="Lowest Average Product Price by Brand"
          description="Brands ranked by their average product price."
          chartType="bar"
          chartData={chartData.lowestAvgPriceByBrandData}
          chartConfig={lowestAvgPriceByBrandConfig}
          dataKeys={['avg_price']}
          indexKey="brand"
          analysis={lowestAvgPriceByBrandAnalysis}
          recommendations={recommendations.lowestAvgPriceByBrand}
          xAxisLabel="Brand"
          yAxisLabel="Average Price"
        />
        <ChartCard
          title="Overall Average Discount Percentage"
          description="Proportion of average discount vs remaining value."
          chartType="pie"
          chartData={chartData.overallAvgDiscountData}
          dataKeys={['value']}
          indexKey="label"
          analysis={overallAvgDiscountAnalysis}
          recommendations={recommendations.overallAvgDiscount}
          customNames={["Average Discount", "Remaining Value"]}
        />
        <ChartCard
          title="Highest Average Discount by Brand"
          description="Brands with the largest average discounts."
          chartType="bar"
          chartData={chartData.highestAvgDiscountByBrandData}
          chartConfig={highestAvgDiscountByBrandConfig}
          dataKeys={['avg_discount']}
          indexKey="brand"
          analysis={highestAvgDiscountByBrandAnalysis}
          recommendations={recommendations.highestAvgDiscountByBrand}
          xAxisLabel="Brand"
          yAxisLabel="Average Discount (%)"
        />
        <ChartCard
          title="Product Rating vs Price"
          description="Scatter plot showing relationship between price and rating."
          chartType="scatter"
          chartData={chartData.ratingVsPriceData}
          chartConfig={ratingVsPriceConfig}
          dataKeys={['price', 'rating']}
          indexKey="price"
          analysis={ratingVsPriceAnalysis}
          recommendations={recommendations.ratingVsPrice}
          xAxisLabel="Price"
          yAxisLabel="Rating"
        />
        <ChartCard
          title="Average Rating by Brand"
          description="Ranking of brands based on their average ratings."
          chartType="bar"
          chartData={chartData.avgRatingByBrandData}
          chartConfig={avgRatingByBrandConfig}
          dataKeys={['avg_rating']}
          indexKey="brand"
          analysis={avgRatingByBrandAnalysis}
          recommendations={recommendations.avgRatingByBrand}
          xAxisLabel="Brand"
          yAxisLabel="Average Rating"
        />
      </div>
    </div>
  );
}
