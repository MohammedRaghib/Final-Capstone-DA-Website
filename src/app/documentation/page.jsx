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
          Everything you need to know about the E-Commerce Data Analysis Script.
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
                The E-Commerce Data Analysis Script is designed to collect and analyze product information from a single online marketplace. The script performs a one-time data scrape to capture a snapshot of current product prices, brands, discounts, and ratings. The primary goal is to use this data to perform a competitive analysis focused on brand pricing, discount patterns, and reliability, rather than tracking historical price changes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Questions to Answer</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li><b>Which brand has the lowest average product price?</b> This question helps identify low-price leaders in the marketplace, which is crucial for competitive positioning and understanding market segments.</li>
                  <li><b>What is the average discount percentage across all products in the dataset?</b> This provides a high-level view of the overall discount strategy on the marketplace, which can be used to gauge the market's price sensitivity.</li>
                  <li><b>Which brands have the highest average discount percentage?</b> This insight reveals which brands are most reliant on promotional pricing, which can be useful for developing a counter-strategy or for understanding a competitor's marketing approach.</li>
                  <li><b>Is a product's rating a good indicator of its price?</b> By plotting price against rating, we can determine if higher-priced items are generally perceived as higher quality or if there's a disconnect between price and customer satisfaction.</li>
                  <li><b>What is the reliability of each brand based on its average rating?</b> This provides a direct measure of customer sentiment and can highlight which brands are consistently delivering quality products, helping to inform purchasing or marketing decisions.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Methodology</AccordionTrigger>
              <AccordionContent>
                The analysis is performed using a Python script that leverages several popular libraries. The process can be broken down into the following steps:
                <ol className="list-decimal list-inside space-y-2 mt-4">
                  <li><b>Web Scraping with requests and BeautifulSoup:</b> The script uses the `requests` library to send an HTTP GET request to a specified Jumia URL, retrieving the HTML content of the main product listing page. This HTML is then parsed using `BeautifulSoup` to identify and isolate individual product items.</li>
                  <li><b>Nested Data Extraction:</b> For each product item found, the script extracts key details directly from the main listing page, such as the product name and current price. To get more granular information like the product rating, the script performs a nested scrape by following the product's unique link to its dedicated detail page. This approach ensures a comprehensive set of data points for each item.</li>
                  <li><b>Data Cleaning and Structuring:</b> As data is extracted, it undergoes a cleaning process. For example, numerical values like prices and ratings are converted from text strings into appropriate data types (int and float, respectively). The brand name is also extracted from the product title. All this information is then organized into a structured list of dictionaries.</li>
                  <li><b>Data Analysis and Visualization:</b> The final list of product dictionaries is converted into a `pandas` DataFrame. This DataFrame provides a robust structure for performing the required analyses. The `matplotlib` library is then used to generate a series of visualizations, including bar charts, a pie chart, and a scatter plot, to answer the project's core questions visually.</li>
                  <li><b>Output:</b> The script prints the resulting DataFrame to the console and can optionally save the structured data to a CSV file for further analysis or record-keeping.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Tech Stack</AccordionTrigger>
              <AccordionContent>
                This methodology is based on standard web scraping and data analysis techniques using the following open-source Python libraries:
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><b>requests:</b> A fundamental library for making HTTP requests.</li>
                  <li><b>Beautiful Soup:</b> A library designed for parsing HTML and XML documents.</li>
                  <li><b>pandas:</b> A fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation tool.</li>
                  <li><b>matplotlib:</b> A comprehensive library for creating static, animated, and interactive visualizations in Python.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
