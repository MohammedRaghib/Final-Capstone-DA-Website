import ChartCard from '@/components/chart-card';
import { BarChart as BarChartIcon } from 'lucide-react';

// Question 1: Lowest Average Product Price by Brand
const lowestAvgPriceByBrandData = [
  { brand: 'rashnik', avg_price: 2500 },
  { brand: 'mika', avg_price: 2600 },
  { brand: 'ramtons', avg_price: 4500 },
  { brand: 'haier', avg_price: 4700 },
  { brand: 'midea', avg_price: 7000 },
  { brand: 'ecomax', avg_price: 8500 },
];
const lowestAvgPriceByBrandConfig = {
  avg_price: { label: 'Average Price (KES)', color: 'hsl(var(--chart-1))' },
};
const lowestAvgPriceByBrandAnalysis =
  "The provided chart reveals a tiered market where brands compete on different fronts. The lowest-priced brands like rashnik and mika dominate the entry-level segment by offering affordability, while the mid-range brands such as ramtons and haier are locked in tight competition for the value-conscious customer. At the highest end, premium brands like midea and the outlier ecomax compete on perceived quality and brand status rather than price, with ecomax potentially targeting a luxury niche.";

// Question 2: Overall Average Discount Percentage
const overallAvgDiscountData = [
  { label: 'Average Discount', value: 27.1, fill: 'var(--color-chart-1)' },
  { label: 'Remaining Value', value: 72.9, fill: 'var(--color-chart-2)' },
];
const overallAvgDiscountAnalysis =
  "The Overall Average Discount Percentage pie chart shows that, on average, products in the dataset are discounted by 27.1%. This means that roughly a quarter of the total product value is being discounted at the time of the scrape. The large Remaining Value slice of 72.9% simply represents the portion of the price that is not being discounted, providing context for the discounts magnitude. This analysis confirms that discounts are a significant factor across the marketplace, but the majority of the product value remains undiscounted.";

// Question 3: Highest Average Discount Percentage by Brand
const highestAvgDiscountByBrandData = [
  { brand: 'aillyons', avg_discount: 45 },
  { brand: 'em', avg_discount: 42 },
  { brand: 'von', avg_discount: 41 },
  { brand: 'rashnik', avg_discount: 15 },
  { brand: 'ecomax', avg_discount: 14 },
];
const highestAvgDiscountByBrandConfig = {
  avg_discount: { label: 'Average Discount (%)', color: 'hsl(var(--chart-2))' },
};
const highestAvgDiscountByBrandAnalysis =
  "Based on the 'Average Discount Percentage by Brand' chart, there is a clear inverse relationship between a brand's average price and its average discount. Brands in the entry-level price tier, like aillyons, em, and von, offer the highest average discounts, all over 40%, indicating a strategy focused on attracting customers with aggressive promotions. Conversely, the more expensive brands like rashnik and ecomax, which were at the higher end of the price chart, offer the lowest average discounts, at around 15%. This suggests that these premium brands rely on their brand value rather than price promotions to drive sales.";

// Question 4: Product Rating vs Price (Scatter Plot)
const ratingVsPriceData = [
  { price: 2500, rating: 4.5 },
  { price: 3000, rating: 4.2 },
  { price: 5000, rating: 4.8 },
  { price: 7000, rating: 4.6 },
  { price: 8500, rating: 3.2 },
];
const ratingVsPriceConfig = {
  price: { label: 'Price (KES)', color: 'hsl(var(--chart-3))' },
  rating: { label: 'Rating', color: 'hsl(var(--chart-4))' },
};
const ratingVsPriceAnalysis =
  "The scatter plot shows no strong correlation between product rating and price. Most products, regardless of their cost, are highly rated between 4.0 and 5.0 stars. This suggests that price isn't a primary indicator of customer satisfaction on this marketplace. There are a few outliers, including a product with a low rating at a high price, indicating a potential mismatch between a product's cost and its perceived value.";

// Question 5: Average Rating by Brand
const avgRatingByBrandData = [
  { brand: 'maxmo', avg_rating: 4.8 },
  { brand: 'mika', avg_rating: 4.6 },
  { brand: 'haier', avg_rating: 4.5 },
  { brand: 'ramtons', avg_rating: 4.4 },
  { brand: 'roch', avg_rating: 3.8 },
  { brand: 'vision', avg_rating: 3.7 },
  { brand: 'aillyons', avg_rating: 3.5 },
];
const avgRatingByBrandConfig = {
  avg_rating: { label: 'Average Rating', color: 'hsl(var(--chart-5))' },
};
const avgRatingByBrandAnalysis =
  "Based on the 'Average Rating by Brand' chart, there is a very high level of customer satisfaction across most of the brands. The majority of brands, including the highest-rated brand maxmo, fall within a tight average rating band of 4.3 to 4.8 stars. This suggests that the marketplace is populated with reliable products, and that the differences in average ratings are minor. The brands with lower average ratings, such as roch, vision, and aillyons, may have a small number of poorly rated products, which slightly pulls down their overall average, but they are still generally well-regarded with ratings above 3.0.";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
          Jumia Products Analysis
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
          chartData={lowestAvgPriceByBrandData}
          chartConfig={lowestAvgPriceByBrandConfig}
          dataKeys={['avg_price']}
          indexKey="brand"
          analysis={lowestAvgPriceByBrandAnalysis}
        />
        <ChartCard
          title="Overall Average Discount Percentage"
          description="Proportion of average discount vs remaining value."
          chartType="pie"
          chartData={overallAvgDiscountData}
          dataKeys={['value']}
          indexKey="label"
          analysis={overallAvgDiscountAnalysis}
        />
        <ChartCard
          title="Highest Average Discount by Brand"
          description="Brands with the largest average discounts."
          chartType="bar"
          chartData={highestAvgDiscountByBrandData}
          chartConfig={highestAvgDiscountByBrandConfig}
          dataKeys={['avg_discount']}
          indexKey="brand"
          analysis={highestAvgDiscountByBrandAnalysis}
        />
        <ChartCard
          title="Product Rating vs Price"
          description="Scatter plot showing relationship between price and rating."
          chartType="scatter"
          chartData={ratingVsPriceData}
          chartConfig={ratingVsPriceConfig}
          dataKeys={['price', 'rating']}
          indexKey="price"
          analysis={ratingVsPriceAnalysis}
        />
        <ChartCard
          title="Average Rating by Brand"
          description="Ranking of brands based on their average ratings."
          chartType="bar"
          chartData={avgRatingByBrandData}
          chartConfig={avgRatingByBrandConfig}
          dataKeys={['avg_rating']}
          indexKey="brand"
          analysis={avgRatingByBrandAnalysis}
        />
      </div>
    </div>
  );
}
