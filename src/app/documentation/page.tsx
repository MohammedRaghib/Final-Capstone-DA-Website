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
                story.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
