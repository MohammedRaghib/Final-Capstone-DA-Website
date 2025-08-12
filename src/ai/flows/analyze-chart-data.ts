'use server';

/**
 * @fileOverview Analyzes chart data and provides AI-powered insights.
 *
 * - analyzeChartData - A function that analyzes chart data and returns insights.
 * - AnalyzeChartDataInput - The input type for the analyzeChartData function.
 * - AnalyzeChartDataOutput - The return type for the analyzeChartData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeChartDataInputSchema = z.object({
  chartDataDescription: z
    .string()
    .describe('A description of the data shown in the chart.'),
  chartData: z.string().describe('The data from the chart in JSON format.'),
});
export type AnalyzeChartDataInput = z.infer<typeof AnalyzeChartDataInputSchema>;

const AnalyzeChartDataOutputSchema = z.object({
  insights: z.array(z.string()).describe('Key insights from the chart data.'),
});
export type AnalyzeChartDataOutput = z.infer<typeof AnalyzeChartDataOutputSchema>;

const chartInsightsTool = ai.defineTool({
  name: 'getChartInsights',
  description: 'This tool analyzes the provided chart data and extracts key insights.',
  inputSchema: z.object({
    chartDataDescription: z
      .string()
      .describe('A detailed description of the chart data.'),
    chartData: z
      .string()
      .describe('The data from the chart in JSON format.'),
  }),
  outputSchema: z.array(z.string()).describe('Key insights from the chart data.'),
  async resolve(input) {
    // Placeholder implementation for extracting chart insights
    // Replace this with actual data analysis logic
    return [
      `The data shows a trend.`, // Sample insight 1
      `Insight`, // Sample insight 2
    ];
  },
});

const analyzeChartDataPrompt = ai.definePrompt({
  name: 'analyzeChartDataPrompt',
  tools: [chartInsightsTool],
  input: {schema: AnalyzeChartDataInputSchema},
  output: {schema: AnalyzeChartDataOutputSchema},
  prompt: `You are an expert data analyst. Analyze the following chart data and provide key insights. Use the getChartInsights tool to get the insights.\n\nChart Data Description: {{{chartDataDescription}}}\nChart Data: {{{chartData}}}`,
});

const analyzeChartDataFlow = ai.defineFlow(
  {
    name: 'analyzeChartDataFlow',
    inputSchema: AnalyzeChartDataInputSchema,
    outputSchema: AnalyzeChartDataOutputSchema,
  },
  async input => {
    const {output} = await analyzeChartDataPrompt(input);
    return output!;
  }
);

export async function analyzeChartData(input: AnalyzeChartDataInput): Promise<AnalyzeChartDataOutput> {
  return analyzeChartDataFlow(input);
}
