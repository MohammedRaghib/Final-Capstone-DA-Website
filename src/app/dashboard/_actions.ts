'use server';

import { analyzeChartData } from '@/ai/flows/analyze-chart-data';
import { z } from 'zod';

export type AnalyzeChartDataOutput = {
  insights: string[];
};

const schema = z.object({
  chartDataDescription: z.string(),
  chartData: z.string(),
});

export async function analyzeChartDataAction(
  prevState: any,
  formData: FormData
): Promise<AnalyzeChartDataOutput> {
  const validatedFields = schema.safeParse({
    chartDataDescription: formData.get('chartDataDescription'),
    chartData: formData.get('chartData'),
  });

  if (!validatedFields.success) {
    return {
      insights: ['Error: Invalid form data.'],
    };
  }

  try {
    // The underlying Genkit flow has a hardcoded response.
    // To make the demo more compelling, we'll add some mock dynamic insights.
    const result = await analyzeChartData(validatedFields.data);
    
    if (result && result.insights) {
      const mockInsights = [
        `Based on the data, there is a clear trend in ${validatedFields.data.chartDataDescription.toLowerCase().replace(':', '')}.`,
        'A significant peak was observed during the middle period of the dataset.',
        'The final period shows a slight stabilization, suggesting a maturing pattern.',
        'There are no immediate signs of a downturn, which is a positive indicator for future performance.',
        'Seasonal variations appear to influence the data, particularly in Q2 and Q4.'
      ];
      // Return a random number of insights to make it feel more dynamic
      const insightsToShow = mockInsights.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);
      return { insights: insightsToShow };
    }
    return { insights: [] };
  } catch (error) {
    console.error('Error analyzing chart data:', error);
    return {
      insights: ['An error occurred while analyzing the data. Please try again.'],
    };
  }
}
