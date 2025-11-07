// src/components/GdpBarChart.tsx
import React from "react";
import { motion } from "framer-motion";

const gdpData = [
  { year: "2011", value: 6.41 },
  { year: "2012", value: 5.5 },
  { year: "2013", value: 5.55 },
  { year: "2014", value: 6.42 },
  { year: "2015", value: 6.99 },
  { year: "2016", value: 6.69 },
  { year: "2017", value: 6.94 },
  { year: "2018", value: 7.47 },
  { year: "2019", value: 7.36 },
  { year: "2020", value: 2.87 },
  { year: "2021", value: 2.55 },
  { year: "2022", value: 8.54 },
  { year: "2023", value: 5.07 },
  { year: "2024", value: 7.09 },
];

// Định nghĩa variants cho container để các children
// được animate tuần tự
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Thời gian delay giữa mỗi child
    },
  },
};

// Variants cho từng hàng
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const GdpBarChart: React.FC = () => {
  // Tìm giá trị lớn nhất để tính toán tỷ lệ,
  // làm tròn lên 10 để có khoảng đệm đẹp
  const maxValue = Math.ceil(Math.max(...gdpData.map((d) => d.value)) / 2) * 2; // Sẽ là 10

  return (
    <div className="text-white font-sans">
      <h3 className="text-xl font-bold mb-4 uppercase text-center text-gray-100">
        Tăng trưởng GDP qua các năm (%)
      </h3>
      <motion.ul
        className="space-y-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {gdpData.map((item) => (
          <motion.li
            key={item.year}
            className="flex items-center text-sm"
            variants={itemVariants}
          >
            {/* Cột 1: Năm */}
            <span className="w-12 font-semibold text-gray-300">
              {item.year}
            </span>

            {/* Cột 2: Thanh bar */}
            <div className="flex-1 mx-2 bg-gray-700 rounded-sm h-6 overflow-hidden">
              <motion.div
                className="bg-orange-500 h-6"
                // Dùng style thay vì animate cho hiệu ứng
                // mượt mà hơn khi cuộn vào
                initial={{ width: 0 }}
                whileInView={{
                  width: `${(item.value / maxValue) * 100}%`,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </div>

            {/* Cột 3: Giá trị */}
            <span className="w-16 text-right font-bold text-orange-400">
              {item.value.toFixed(2)}%
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default GdpBarChart;
