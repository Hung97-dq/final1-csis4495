import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';
import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ graphData }) => { return (
    <ResponsiveLine
        data={graphData}
        margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
        xScale={{ type: 'linear' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Payment Period',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'USD',
            legendOffset: -50,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[
            {
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: -20,
                translateY: -30,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)}

export default LineChart;