import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function DocumentationPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <div className="space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
          Documentation
        </h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about the Data Insights Viewer project.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Project Overview</AccordionTrigger>
              <AccordionContent>
                The Data Insights Viewer is a web application designed to provide
                interactive visualizations and AI-powered analysis of complex
                datasets. Our goal is to make data exploration intuitive and
                insightful for users of all technical backgrounds. This project
                leverages modern web technologies to deliver a fast,
                responsive, and visually appealing experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Data Sources</AccordionTrigger>
              <AccordionContent>
                The data used in this project is synthetically generated to
                model common business metrics. This includes sales figures, user
                engagement statistics, and customer satisfaction scores. While
                the data is not real, it is structured to be realistic and
                provide meaningful demonstrations of the platform's
                capabilities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Analysis Methods</AccordionTrigger>
              <AccordionContent>
                Our analysis is twofold. First, we provide standard data
                visualization through various chart types like line, bar, and
                pie charts. Second, we employ a generative AI model to analyze
                the data presented in each chart. The AI identifies key trends,
                anomalies, and patterns, summarizing them in natural language.
                This provides users with a quick understanding of the data's
...
        </content>
    </content>
  </change>
  <change>
    <file>src/app/dashboard/page.tsx</file>
    <description>Created the main dashboard page to display five interactive charts. This page defines mock data and configurations for each chart (line, bar, pie, donut, stacked-bar) and renders them using a new `ChartCard` component in a responsive grid layout.</description>
    <content><![CDATA[import ChartCard from '@/components/charts/chart-card';
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
