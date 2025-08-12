import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, FileText, Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Unlock Insights from Your Data
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our platform provides an interactive way to visualize and understand your data, with AI-powered analysis to uncover key trends and patterns.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/documentation">
                    Read Docs
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              data-ai-hint="data visualization abstract"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Tools for Data Analysis
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've built a suite of features to help you get the most out of your data, from beautiful charts to intelligent analysis.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Card className="bg-background">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">Interactive Charts</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Visualize your data with a variety of interactive chart types. Drill down, filter, and explore your datasets with ease.</p>
                </CardContent>
            </Card>
            <Card className="bg-background">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Go beyond the visuals. Our AI analyzes your chart data to provide you with actionable insights and summaries.</p>
                </CardContent>
            </Card>
            <Card className="bg-background">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">Clear Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Comprehensive documentation helps you understand our data sources, methods, and how to interpret the charts.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
