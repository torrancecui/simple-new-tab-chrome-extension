/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Inspired by Mike Bostock's Streamgraph & Lee Byron’s test data generator:
 * https://bl.ocks.org/mbostock/4060954
 */
import { Stack } from '@visx/shape';
import { scaleLinear, scaleOrdinal } from '@visx/scale';
import { transpose } from '@visx/vendor/d3-array';
import { animated, useSpring } from '@react-spring/web';

import useForceUpdate from './useForceUpdate';
import generateData from './generateData';
import generateRandomColorArray from './generateColorPalette';

// constants
const NUM_LAYERS = 20;
const SAMPLES_PER_LAYER = 200;
const BUMPS_PER_LAYER = 10;

// utils
const range = (n: number) => Array.from(new Array(n), (_, i) => i);
const keys = range(NUM_LAYERS);

// scales
const xScale = scaleLinear<number>({
    domain: [0, SAMPLES_PER_LAYER - 1],
});
const yScale = scaleLinear<number>({
    domain: [-30, 50],
});
const colorScale = scaleOrdinal<number, string>({
    domain: keys,
    range: generateRandomColorArray(),
});
const patternScale = scaleOrdinal<number, string>({
    domain: keys,
    range: [''],
});

// accessors
type Datum = number[];
const getY0 = (d: Datum) => yScale(d[0]) ?? 0;
const getY1 = (d: Datum) => yScale(d[1]) ?? 0;

export type StreamGraphProps = {
    width: number;
    height: number;
    animate?: boolean;
    backgroundColor?: string;
};

export default function Streamgraph({ width, height, animate = true, backgroundColor = "#fff" }: StreamGraphProps) {
    const forceUpdate = useForceUpdate();
    const handlePress = () => forceUpdate();

    if (width < 10) return null;

    xScale.range([0, width]);
    yScale.range([height, 0]);

    // generate layers in render to update on touch
    const layers = transpose<number>(
        keys.map(() => generateData(SAMPLES_PER_LAYER, BUMPS_PER_LAYER)),
    );

    return (
        <svg width={width} height={height}>
            <g onClick={handlePress} onTouchStart={handlePress}>
                <rect x={0} y={0} width={width} height={height} fill={backgroundColor} rx={14} />
                <Stack<number[], number>
                    data={layers}
                    keys={keys}
                    offset="wiggle"
                    color={colorScale}
                    x={(_, i) => xScale(i) ?? 0}
                    y0={getY0}
                    y1={getY1}
                >
                    {({ stacks, path }) =>
                        stacks.map((stack) => {
                            // Alternatively use renderprops <Spring to={{ d }}>{tweened => ...}</Spring>
                            const pathString = path(stack) || '';
                            const tweened = animate ? useSpring({ pathString }) : { pathString };
                            const color = colorScale(stack.key);
                            const pattern = patternScale(stack.key);
                            return (
                                <g key={`series-${stack.key}`}>
                                    <animated.path d={tweened.pathString} fill={color} />
                                    <animated.path d={tweened.pathString} fill={`url(#${pattern})`} />
                                </g>
                            );
                        })
                    }
                </Stack>
            </g>
        </svg>
    );
}