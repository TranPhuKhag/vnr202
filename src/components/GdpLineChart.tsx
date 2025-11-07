// src/components/GdpLineChart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dữ liệu từ ảnh (đã chia cho 1,000,000 để ra "triệu tỷ")
const lineData = [
  { year: "2014", value: 2.685 },
  { year: "2015", value: 2.875 },
  { year: "2016", value: 3.054 },
  { year: "2017", value: 3.262 },
  { year: "2018", value: 3.493 },
  { year: "2019", value: 3.738 },
  { year: "2020", value: 3.847 },
  { year: "2021", value: 5.115 },
  { year: "2022", value: 5.545 },
  { year: "2023", value: 5.83 },
  { year: "2024", value: 6.269 },
];

// Custom Tooltip cho đẹp
const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg border border-gray-700">
        <p className="font-bold">{`Năm ${label}`}</p>
        <p className="text-yellow-400">{`Tổng SP: ${payload[0].value} triệu tỷ đồng`}</p>
      </div>
    );
  }
  return null;
};

const GdpLineChart: React.FC = () => {
  return (
    <div className="text-white font-sans mt-8">
      <h3 className="text-xl font-bold mb-2 uppercase text-center text-gray-100">
        Tổng sản phẩm quốc nội qua các năm
      </h3>
      <p className="text-sm mb-4 text-center text-gray-400">
        (Đơn vị: triệu tỷ đồng, Giá so sánh 2010)
      </p>
      {/* Cần bọc ResponsiveContainer trong
       một div có chiều cao cố định */}
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart
            data={lineData}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            {/* Lưới mờ */}
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

            {/* Trục X (Năm) */}
            <XAxis dataKey="year" stroke="#e5e7eb" dy={5} />

            {/* Trục Y (Triệu tỷ) */}
            <YAxis
              domain={[0, 7]} // 0 đến 7 triệu tỷ
              stroke="#e5e7eb"
              tickCount={8}
            />

            {/* Tooltip khi hover */}
            <Tooltip content={<CustomTooltip />} />

            {/* Đường line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f2c144" // Màu vàng cam
              strokeWidth={3}
              dot={{ r: 4, fill: "#f2c144" }}
              activeDot={{ r: 6, fill: "#fff", stroke: "#f2c144" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GdpLineChart;
