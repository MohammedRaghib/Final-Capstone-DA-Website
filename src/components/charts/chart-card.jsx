'use client';

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  Bar,
  BarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Sector,
} from 'recharts';
import { Bot, Lightbulb, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { analyzeChartDataAction } from '@/app/dashboard/_actions';


const initialState = {
  insights: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="outline">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Analyze Chart
    </Button>
  );
}

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  
  return (
    <g>
      <text x={cx} y={cy} dy={-10} textAnchor="middle" fill={fill} className="font-headline text-lg">
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={10} textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-sm">
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

export default function ChartCard({
  title,
  description,
  chartType,
  chartData,
  chartConfig,
  dataKeys,
  indexKey,
}) {
  const [state, formAction] = useActionState(analyzeChartDataAction, initialState);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <RechartsLineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Legend content={<ChartLegendContent />} />
            {dataKeys.map((key) => (
              <Line key={key} type="monotone" dataKey={key} stroke={`var(--color-${key})`} strokeWidth={2} dot={false} />
            ))}
          </RechartsLineChart>
        );
      case 'bar':
        return (
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Legend content={<ChartLegendContent />} />
            {dataKeys.map((key) => (
                <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
            ))}
          </BarChart>
        );
      case 'stacked-bar':
        return (
            <BarChart data={chartData} layout="vertical" stackOffset="expand">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} width={80} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Legend content={<ChartLegendContent />} />
                {dataKeys.map((key) => (
                    <Bar key={key} dataKey={key} fill={`var(--color-${key})`} stackId="a" radius={2} />
                ))}
            </BarChart>
        )
      case 'pie':
      case 'donut':
        return (
          <RechartsPieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={chartType === 'pie' ? 100 : 80}
              innerRadius={chartType === 'donut' ? 60 : 0}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Legend content={<ChartLegendContent nameKey="name" />} />
          </RechartsPieChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig || {}} className="min-h-[300px] w-full">
            {renderChart()}
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 text-sm">
        <form action={formAction} className="w-full">
          <input type="hidden" name="chartDataDescription" value={`${title}: ${description}`} />
          <input type="hidden" name="chartData" value={JSON.stringify(chartData)} />
          <div className="flex justify-start items-center w-full">
            <SubmitButton />
          </div>
        </form>
        {state.insights && state.insights.length > 0 && (
          <div className="w-full pt-4 border-t">
            <h4 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb className="w-4 h-4 text-primary" /> AI Insights</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {state.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
