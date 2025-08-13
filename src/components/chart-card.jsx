'use client';

import { useState } from 'react';
import {
  Bar,
  BarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  Scatter,
  ScatterChart,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Sector,
  ZAxis,
} from 'recharts';
import { Lightbulb, X } from 'lucide-react';

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
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
} from '@/components/ui/chart';

export default function ChartCard({
  title,
  description,
  chartType,
  chartData,
  chartConfig,
  dataKeys,
  indexKey,
  analysis = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [insights, setInsights] = useState([]);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const fetchAnalysis = (e) => {
    e.preventDefault();
    setShowAnalysis(true);

    if (Array.isArray(analysis)) {
      setInsights(analysis);
    } else if (typeof analysis === 'string' && analysis.trim() !== '') {
      setInsights([analysis]);
    } else {
      setInsights([]);
    }
  };

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
        <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
        <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      </g>
    );
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <RechartsLineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
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
            <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
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
            <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Legend content={<ChartLegendContent />} />
            {dataKeys.map((key) => (
              <Bar key={key} dataKey={key} fill={`var(--color-${key})`} stackId="a" radius={2} />
            ))}
          </BarChart>
        );
      case 'pie':
      case 'donut':
        return (
          <RechartsPieChart>
            <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
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
      case 'scatter':
        return (
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey={dataKeys[0]} name="X Axis" />
            <YAxis dataKey={dataKeys[1]} name="Y Axis" />
            <ZAxis range={[60, 400]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
            <Legend />
            <Scatter name="Scatter Data" data={chartData} fill={`var(--color-${dataKeys[1]})`} />
          </ScatterChart>
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
      <CardFooter className="flex justify-start">
        <Button variant="outline" type='button' onClick={(e) => fetchAnalysis(e)}>
          Show Analysis
        </Button>
      </CardFooter>

      {showAnalysis && (
        <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 w-80 border z-50">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" /> Analysis
            </h4>
            <button onClick={() => setShowAnalysis(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          {insights.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              {insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-sm">No insights available.</p>
          )}
        </div>
      )}
    </Card>
  );
}
