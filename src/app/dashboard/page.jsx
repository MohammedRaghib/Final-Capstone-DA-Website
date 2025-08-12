import ChartCard from '@/components/charts/chart-card';
import { BarChart as BarChartIcon } from 'lucide-react';

const monthlyRevenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];
const monthlyRevenueConfig = {
  revenue: { label: 'Revenue', color: 'hsl(var(--chart-1))' },
};

const salesByCategoryData = [
  { category: 'Electronics', sales: 12000 },
  { category: 'Clothing', sales: 9000 },
  { category: 'Groceries', sales: 7500 },
  { category: 'Books', sales: 4500 },
  { category: 'Home Goods', sales: 10500 },
];
const salesByCategoryConfig = {
  sales: { label: 'Sales', color: 'hsl(var(--chart-2))' },
};

const userDemographicsData = [
  { name: '18-24', value: 400, fill: 'var(--color-chart-1)' },
  { name: '25-34', value: 300, fill: 'var(--color-chart-2)' },
  { name: '35-44', value: 300, fill: 'var(--color-chart-3)' },
  { name: '45+', value: 200, fill: 'var(--color-chart-4)' },
];

const trafficSourcesData = [
    { name: 'Organic', value: 55, fill: 'var(--color-chart-1)' },
    { name: 'Direct', value: 25, fill: 'var(--color-chart-2)' },
    { name: 'Referral', value: 15, fill: 'var(--color-chart-3)' },
    { name: 'Social', value: 5, fill: 'var(--color-chart-4)' },
];

const customerSatisfactionData = [
    { month: 'Jan', satisfied: 80, neutral: 15, dissatisfied: 5 },
    { month: 'Feb', satisfied: 82, neutral: 13, dissatisfied: 5 },
    { month: 'Mar', satisfied: 75, neutral: 20, dissatisfied: 5 },
    { month: 'Apr', satisfied: 85, neutral: 10, dissatisfied: 5 },
    { month: 'May', satisfied: 88, neutral: 8, dissatisfied: 4 },
];
const customerSatisfactionConfig = {
    satisfied: { label: 'Satisfied', color: 'hsl(var(--chart-1))' },
    neutral: { label: 'Neutral', color: 'hsl(var(--chart-2))' },
    dissatisfied: { label: 'Dissatisfied', color: 'hsl(var(--chart-4))' },
};


export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
          Data Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          An overview of key metrics with AI-powered analysis.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <ChartCard
          title="Monthly Revenue"
          description="Tracking revenue on a monthly basis."
          chartType="line"
          chartData={monthlyRevenueData}
          chartConfig={monthlyRevenueConfig}
          dataKeys={['revenue']}
          indexKey="month"
        />
        <ChartCard
          title="Sales by Category"
          description="Breakdown of sales across product categories."
          chartType="bar"
          chartData={salesByCategoryData}
          chartConfig={salesByCategoryConfig}
          dataKeys={['sales']}
          indexKey="category"
        />
        <ChartCard
          title="User Demographics"
          description="Age distribution of our user base."
          chartType="pie"
          chartData={userDemographicsData}
          dataKeys={['value']}
          indexKey="name"
        />
        <ChartCard
          title="Website Traffic Sources"
          description="Sources driving traffic to our website."
          chartType="donut"
          chartData={trafficSourcesData}
          dataKeys={['value']}
          indexKey="name"
        />
        <ChartCard
          title="Customer Satisfaction"
          description="Monthly customer satisfaction trends."
          chartType="stacked-bar"
          chartData={customerSatisfactionData}
          chartConfig={customerSatisfactionConfig}
          dataKeys={['satisfied', 'neutral', 'dissatisfied']}
          indexKey="month"
        />
        <div className="lg:col-span-2 p-8 border-2 border-dashed rounded-lg flex items-center justify-center bg-card">
            <div className="text-center">
                <BarChartIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-medium text-muted-foreground">More charts coming soon</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
