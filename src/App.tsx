import "./styles.css";

import React from "react";
import { Brush, ComposedChart } from "recharts";

const MAX_BRUSH_INDEX = 20;

const BRUSH_DATA = Array(MAX_BRUSH_INDEX + 1)
  .fill(true)
  .map((_, index) => ({
    value: index,
  }));

export default function App() {
  console.log(BRUSH_DATA.length);

  return (
    <div>
      <ComposedChart
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        data={BRUSH_DATA}
        height={80}
        width={500}
      >
        <Brush
          dataKey="value"
          tickFormatter={(params) => params}
          onChange={(value) => console.log(value)}
        />
      </ComposedChart>
    </div>
  );
}
