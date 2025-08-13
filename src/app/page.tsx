import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, PieChart, Search, TrendingUp } from 'lucide-react';
import data_visualization from './data visualisation.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  E-Commerce Data Analysis
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A Python-powered project that scrapes, cleans, and visualizes marketplace data to uncover brand pricing, discount strategies, and product reliability.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    View Analysis Dashboard
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/documentation">
                    Read Project Docs
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src={data_visualization}
              width="600"
              height="400"
              alt="Data Visualization Example"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                From Raw Data to Actionable Insights
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our methodology transforms messy e-commerce product listings into clear, visual answers to real business questions.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Web Scraping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Retrieves live marketplace listings using Requests and BeautifulSoup, including nested product details for richer datasets.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Data Cleaning & Structuring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Converts raw scraped data into a structured DataFrame with clean numeric fields for prices, discounts, and ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generates bar charts, pie charts, and scatter plots in Matplotlib to clearly answer brand and product performance questions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Competitive Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identifies low-price leaders, top discount brands, and the most reliable products based on customer ratings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}