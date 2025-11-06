// src/pages/ThanhTuuDoiMoiPage.tsx

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaWarehouse,
  FaTimesCircle,
  FaChartLine,
  FaGlobeAmericas,
  FaShoppingCart,
  FaLightbulb,
  FaMapMarkedAlt,
  FaRocket,
  FaAward,
} from "react-icons/fa";

// Import các ảnh của bạn
import temphieu from "../assets/temphieu.png";
import xephang from "../assets/xephang.png";
import muahang from "../assets/muahang.png";
import landmark from "../assets/landmark.png";
import apec from "../assets/apec.png";

// Import các component chart
import GdpBarChart from "../components/GdpBarChart";
import GdpLineChart from "../components/GdpLineChart";

/**
 * Thẻ hiển thị thông số
 */
const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}> = ({ icon, value, label, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`bg-white shadow-xl rounded-xl p-6 flex items-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4 text-3xl">
        {icon}
      </div>
      <div>
        <p className="text-3xl font-extrabold text-blue-800">{value}</p>
        <p className="text-gray-600 font-semibold">{label}</p>
      </div>
    </motion.div>
  );
};

const ThanhTuuDoiMoiPage: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, type: "spring" as const },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 pt-24 pb-8 bg-gradient-to-br from-yellow-50 to-orange-100"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 mb-6">
            Thành tựu vĩ đại của công cuộc Đổi Mới
          </h1>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl italic text-gray-800 max-w-4xl mx-auto font-medium"
          >
            "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín
            quốc tế như ngày nay."
            <cite className="block text-right mt-2 not-italic font-semibold text-gray-600 text-lg">
              - Tổng Bí thư Nguyễn Phú Trọng
            </cite>
          </motion.blockquote>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* --- Phần 1: TƯƠNG PHẢN - TRƯỚC ĐỔI MỚI (BAO CẤP) --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-24 bg-gradient-to-b from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Bối cảnh (1975-1985): Khủng hoảng thời kỳ Bao cấp
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-700 space-y-4"
            >
              <p className="text-lg">
                Giai đoạn trước 1986, kinh tế kế hoạch hóa tập trung đã đẩy đất
                nước vào khủng hoảng trầm trọng:
              </p>
              <motion.ul variants={itemVariants} className="space-y-3">
                <li className="flex items-start">
                  <FaWarehouse className="text-3xl text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Sản xuất đình đốn:</span> Doanh
                    nghiệp nhà nước thua lỗ, hợp tác xã kém hiệu quả.
                  </div>
                </li>
                <li className="flex items-start">
                  <FaShoppingCart className="text-3xl text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Hàng hóa khan hiếm:</span> Phân
                    phối tem phiếu, chợ đen phức tạp.
                  </div>
                </li>
                <li className="flex items-start">
                  <FaTimesCircle className="text-3xl text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Đời sống khó khăn:</span> Lạm
                    phát cao, nhân dân thiếu thốn mọi mặt.
                  </div>
                </li>
              </motion.ul>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src={temphieu}
                alt="Tem phiếu thời bao cấp"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img
                src={xephang}
                alt="Cảnh xếp hàng mua nhu yếu phẩm"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img
                src={muahang}
                alt="Chợ đen thời bao cấp"
                className="rounded-xl shadow-lg w-full h-auto object-cover col-span-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>
        </motion.section>

        {/* --- Phần 2: LUẬN CỨ CHO NHẬN ĐỊNH (HIỆN TẠI) --- */}
        <section className="mb-16 bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">
            Luận cứ: "Cơ đồ, Tiềm lực, Vị thế, Uy tín" ngày nay
          </h2>

          {/* 1. CƠ ĐỒ & TIỀM LỰC (KINH TẾ) */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
            {/* --- CỘT TRÁI: Văn bản + Ảnh Landmark --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:order-1" // Sắp xếp lại thứ tự cột
            >
              {/* PHẦN VĂN BẢN */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaMapMarkedAlt className="text-blue-600 mr-3 text-3xl" />
                1. Cơ đồ & Tiềm lực (Phát triển kinh tế vượt bậc)
              </h3>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg">
                  Từ nền kinh tế khủng hoảng, Việt Nam vươn lên thành điểm sáng
                  tăng trưởng, hội nhập sâu rộng vào kinh tế toàn cầu.
                </p>
                <ul>
                  <li>
                    <strong>Thoát nghèo:</strong> Từ nước nhận viện trợ thành
                    nhà xuất khẩu nông sản hàng đầu.
                  </li>
                  <li>
                    <strong>Công nghiệp hóa:</strong> Thu hút FDI, phát triển
                    công nghệ cao (Samsung, Intel).
                  </li>
                  <li>
                    <strong>Hạ tầng hiện đại:</strong> Mạng lưới cầu, đường cao
                    tốc, sân bay, cảng biển đồng bộ.
                  </li>
                </ul>
              </div>

              {/* ẢNH LANDMARK (Đã di chuyển vào đây) */}
              <img
                src={landmark}
                alt="Landmark 81"
                className="rounded-xl shadow-lg w-full h-auto object-cover mt-8" // Thêm mt-8
              />
            </motion.div>

            {/* --- CỘT PHẢI: Biểu đồ + Thẻ Thông số --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4" // Chuyển thành grid
            >
              {/* PHẦN BIỂU ĐỒ (Đã di chuyển vào đây) */}
              <div className="bg-[#0d2a5a] p-6 rounded-xl shadow-2xl sm:col-span-2">
                <h2 className="text-3xl font-extrabold text-white text-center mb-4">
                  GDP 2024 TĂNG <span className="text-orange-400">7,09%</span>
                </h2>
                <GdpBarChart />
                <GdpLineChart />
              </div>

              {/* THẺ THÔNG SỐ (Đã di chuyển vào đây) */}
              <StatCard
                icon={<FaChartLine />}
                value="7,09%"
                label="Tăng trưởng GDP 2024"
              />
              <StatCard
                icon={<FaRocket />}
                value="Top 20"
                label="Thương mại toàn cầu"
              />
            </motion.div>
          </div>

          {/* 2. VỊ THẾ & UY TÍN (QUỐC TẾ) */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaGlobeAmericas className="text-green-600 mr-3 text-3xl" />
                2. Vị thế & Uy tín (Hội nhập và đóng góp quốc tế)
              </h3>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg">
                  Từ vị thế bị bao vây, cấm vận, Việt Nam đã trở thành đối tác
                  tin cậy, có trách nhiệm của cộng đồng quốc tế.
                </p>
                <ul>
                  <li>
                    <strong>Quan hệ ngoại giao:</strong> Thiết lập quan hệ với
                    193 quốc gia, đối tác chiến lược toàn diện với nhiều cường
                    quốc.
                  </li>
                  <li>
                    <strong>Hội nhập sâu rộng:</strong> Thành viên tích cực của
                    ASEAN, WTO, APEC và các FTA thế hệ mới.
                  </li>
                  <li>
                    <strong>Đóng góp toàn cầu:</strong> Tham gia Gìn giữ hòa
                    bình LHQ, tổ chức các sự kiện quốc tế lớn.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid gap-4"
            >
              <img
                src={apec}
                alt="Hội nghị APEC 2017"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <StatCard
                icon={<FaAward />}
                value="Đối tác CTTD"
                label="Với 6/6 cường quốc (P5+Ấn Độ)"
                className="bg-green-50"
              />
            </motion.div>
          </div>
        </section>

        {/* --- Phần 3: KẾT LUẬN --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white p-10 rounded-2xl shadow-2xl border-t-4 border-blue-500 max-w-4xl mx-auto mt-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <FaLightbulb className="text-yellow-500 text-4xl mr-3" />
            Kết luận
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Sự so sánh giữa thực tiễn khủng hoảng (1975-1985) và những thành tựu
            vượt bậc (1986-nay) chính là{" "}
            <span className="font-bold text-blue-700">
              luận cứ xác đáng nhất
            </span>
            . Công cuộc Đổi mới do Đảng khởi xướng và lãnh đạo đã mang lại "cơ
            đồ, tiềm lực, vị thế và uy tín" mà thế hệ trước không thể có được.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ThanhTuuDoiMoiPage;
