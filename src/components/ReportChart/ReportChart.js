import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  LabelList,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
  CartesianAxis,
  YAxis,
} from 'recharts';
import { Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const COLORS = ['#FF751D', '#FFDAC0', '#FFDAC0'];
const paperStyles = {
  maxWidth: '1060px',
  padding: '20px 0',
  borderRadius: '30px',
  borderShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
  backgroundColor: '#FFFFFF',
  margin: '40px 0',
};

const data = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 1800,
  },
  {
    name: 'Page D',
    pv: 3908,
  },
  {
    name: 'Page E',
    pv: 4800,
  },
  {
    name: 'Page F',
    pv: 3800,
  },
  {
    name: 'Page G',
    pv: 4300,
  },
];

const renderCustomizedLabel = props => {
  const { x, y, width, value } = props;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - 10}
        fill="#071F41"
        textAnchor="middle"
        fontSize={12}
      >
        {value}
      </text>
    </g>
  );
};

const renderCustomizedLabel1 = props => {
  const { y, x, value } = props;

  return (
    <g>
      <text y={y - 5} x={x + 1} fill="#071F41" textAnchor="start" fontSize={10}>
        {value}
      </text>
    </g>
  );
};

export default function ReportChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <>
      {isMobile ? (
        <div
          style={{
            margin: '35 auto 0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BarChart
            layout="vertical"
            width={300}
            height={400}
            data={data}
            margin={{
              top: 30,
              right: 5,
              bottom: 5,
              left: 5,
            }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" hide type="category" />
            <Tooltip />
            <Bar
              dataKey="pv"
              barSize={15}
              radius={[0, 10, 10, 0]}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <LabelList
                dataKey="pv"
                position="insideTopRight"
                offset={-12}
                fill="#071F41"
                fontSize={10}
              />
              <LabelList
                dataKey="name"
                content={renderCustomizedLabel1}
                position="insideTopLeft"
                offset={-12}
              />
            </Bar>
          </BarChart>
        </div>
      ) : (
        <Paper sx={paperStyles}>
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ResponsiveContainer width="100%" height={330}>
              <BarChart
                maxWidth="100%"
                height={330}
                data={data}
                maxBarSize={40}
                barCategoryGap="1%"
                margin={{
                  top: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} />
                <CartesianAxis width={10} height={10} />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="pv" minPointSize={5} radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <LabelList dataKey="pv" content={renderCustomizedLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Paper>
      )}
    </>
  );
}
