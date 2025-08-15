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
import { Lightbulb, Target, X, ArrowLeftRight } from 'lucide-react';

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
  xAxisLabel = '',
  yAxisLabel = '',
  analysis = '',
  recommendations = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [insights, setInsights] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendationList, setRecommendationList] = useState([]);
  const [panelPosition, setPanelPosition] = useState('right'); // 'right' or 'left'

  const colors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff8042',
    '#8dd1e1',
    '#d0ed57',
    '#a4de6c',
    '#d88884',
  ];

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

  const fetchRecommendations = (e) => {
    e.preventDefault();
    setShowRecommendations(true);
    if (Array.isArray(recommendations)) {
      setRecommendationList(recommendations);
    } else if (typeof recommendations === 'string' && recommendations.trim() !== '') {
      setRecommendationList([recommendations]);
    } else {
      setRecommendationList([]);
    }
  };

  const togglePanelPosition = () => {
    setPanelPosition((prev) => (prev === 'right' ? 'left' : 'right'));
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
            <XAxis dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }} />
            <YAxis tickLine={false} axisLine={false} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} />
            <Tooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            {/* <Legend content={<ChartLegendContent />} /> */}
            {dataKeys.map((key) => (
              <Line key={key} type="monotone" dataKey={key} stroke={`var(--color-${key})`} strokeWidth={2} dot={false} />
            ))}
          </RechartsLineChart>
        );
      case 'bar':
        return (
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }} />
            <YAxis tickLine={false} axisLine={false} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} />
            <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            {/* <Legend content={<ChartLegendContent />} /> */}
            {dataKeys.map((key) => (
              <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
            ))}
          </BarChart>
        );
      case 'stacked-bar':
        return (
          <BarChart data={chartData} layout="vertical" stackOffset="expand">
            <XAxis type="number" hide label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }} />
            <YAxis type="category" dataKey={indexKey} tickLine={false} axisLine={false} tickMargin={8} width={80} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} />
            <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            {/* <Legend content={<ChartLegendContent />} /> */}
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
            // label={(entry) => `${entry.name} (${entry.value})`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            {/* <Legend content={<ChartLegendContent nameKey="name" />} /> */}
          </RechartsPieChart>
        );
      case 'scatter':
        return (
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey={dataKeys[0]} label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }} name={xAxisLabel || 'Price'} />
            <YAxis dataKey={dataKeys[1]} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }} name={yAxisLabel || 'Brand'} />
            <ZAxis range={[60, 400]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
            {/* <Legend /> */}
            <Scatter name="Scatter Data" data={chartData} fill={`var(--color-${dataKeys[1]})`} />
          </ScatterChart>
        );
      default:
        return null;
    }
  };

  const Panel = ({ title, icon: Icon, list, onClose }) => (
    <div className={`fixed bottom-4 ${panelPosition}-4 bg-white shadow-lg rounded-lg p-4 w-80 border z-50 transition-all`}>
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary" /> {title}
        </h4>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={togglePanelPosition}>
            <ArrowLeftRight className="w-4 h-4" />
          </Button>
          <button onClick={onClose}>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      {list.length > 0 ? (
        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground text-sm">No data available.</p>
      )}
    </div>
  );

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
      <CardFooter className="flex gap-2">
        <Button variant="outline" type='button' onClick={fetchAnalysis}>
          Show Analysis
        </Button>
        <Button variant="outline" type='button' onClick={fetchRecommendations}>
          Show Recommendations
        </Button>
      </CardFooter>

      {showAnalysis && (
        <Panel
          title="Analysis"
          icon={Lightbulb}
          list={insights}
          onClose={() => setShowAnalysis(false)}
        />
      )}
      {showRecommendations && (
        <Panel
          title="Recommendations"
          icon={Target}
          list={recommendationList}
          onClose={() => setShowRecommendations(false)}
        />
      )}
    </Card>
  );
}
