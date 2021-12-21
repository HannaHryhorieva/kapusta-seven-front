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
import getDataForReportChart from '../../helpers/getDataForReportChart';
import formatterForAmount from '../../helpers/formatterForAmount';

const COLORS = ['#FF751D', '#FFDAC0', '#FFDAC0'];
const paperStyles = {
  maxWidth: '1060px',
  padding: '20px 0',
  borderRadius: '30px',
  borderShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
  backgroundColor: '#FFFFFF',
  margin: '40px 0',
};

const renderCustomizedLabel = props => {
  const { x, y, width, value } = props;
  const formattedValue = formatterForAmount(value);
  return (
    <g>
      <text
        x={x + width / 2}
        y={y - 10}
        fill="#071F41"
        textAnchor="middle"
        fontSize={12}
      >
        {formattedValue}
      </text>
    </g>
  );
};

const renderCustomizedLabel1 = props => {
  const { y, x, value } = props;
  return (
    <g>
      <text
        y={y + 14}
        x={x + 3}
        fill="#071F41"
        textAnchor="start"
        fontSize={10}
      >
        {value}
      </text>
    </g>
  );
};

const renderCustomizedLabel2 = props => {
  const { y, x, width, value } = props;
  const formattedValue = formatterForAmount(value);
  return (
    <g>
      <text
        y={y - 5}
        x={x + width - 25}
        fill="#071F41"
        textAnchor="start"
        fontSize={10}
      >
        {formattedValue}
      </text>
    </g>
  );
};

export default function ReportChart({ transactions, category }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const transactionsData = transactions[category];
  const data = getDataForReportChart(transactionsData?.data);
  return (
    <>
      {isMobile ? (
        <div
          style={{
            paddingTop: '15px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BarChart
            layout="vertical"
            width={300}
            height={300}
            data={data}
            margin={{
              top: 30,
              right: 20,
              bottom: 5,
              left: 15,
            }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" hide type="category" />
            <Tooltip />
            <Bar
              dataKey="sum"
              barSize={20}
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
                dataKey="sum"
                position="insideTopRight"
                fill="#071F41"
                content={renderCustomizedLabel2}
              />
              <LabelList
                dataKey="name"
                content={renderCustomizedLabel1}
                position="insideTopLeft"
              />
            </Bar>
          </BarChart>
        </div>
      ) : (
        <Paper sx={paperStyles}>
          <div
            style={{
              maxWidth: '630px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ResponsiveContainer width="100%" height={430}>
              <BarChart
                maxWidth="100%"
                height={430}
                data={data}
                maxBarSize={40}
                barCategoryGap="1%"
                margin={{
                  top: 25,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} />
                <CartesianAxis width={10} height={10} />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="sum" minPointSize={5} radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <LabelList dataKey="sum" content={renderCustomizedLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Paper>
      )}
    </>
  );
}
