import React from "react";
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaChartLine,
  FaUsers,
  FaGavel,
  FaArrowRight,
  FaBook,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";

import dh8 from "../assets/ĐH8.png";
import dh9 from "../assets/ĐH9.jpg";

const Card = ({ icon, title, children, className }: { icon: React.ReactNode; title: string; children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`bg-white rounded-xl shadow-lg overflow-hidden h-full ${className}`}
  >
    <div className="p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 text-blue-800 rounded-full mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-2 flex-grow">{children}</div>
    </div>
  </motion.div>
);

const GiaiDoan1Page: React.FC = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 50, duration: 1 } },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 pt-32">
            {/* Header Timeline */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600" style={{height: "50px"}}>
                           Giai đoạn 1: CNH & Mô hình kinh tế (1996 – 2006)
                  </h1>
        
          {/* Timeline */}
          <div className="relative flex justify-between items-center max-w-5xl mx-auto py-12">
            {/* Đường kẻ chính */}
            <div className="absolute top-1/2 left-0 w-full h-[6px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full -translate-y-1/2 shadow-lg"></div>
            {/* Mốc năm */}
            {[{ year: 1996, label: "Đại hội VIII" }, { year: 2006, label: "Đại hội IX" }].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="relative flex flex-col items-center z-10"
              >
                {/* Điểm tròn lớn */}
                <div className="w-10 h-10 bg-white border-4 border-blue-600 rounded-full shadow-xl flex items-center justify-center">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                {/* Năm */}
                <span className="mt-4 text-lg md:text-xl font-extrabold text-blue-800 drop-shadow-lg">
                  {item.year}
                </span>
                {/* Nhãn sự kiện */}
                <span className="text-sm text-cyan-700 mt-1 font-semibold bg-cyan-50 px-3 py-1 rounded-full shadow">
                  {item.label}
                </span>
              </motion.div>
            ))}
            {/* Hiệu ứng ánh sáng */}
            <div className="absolute left-1/4 top-1/2 w-24 h-24 bg-cyan-300 opacity-30 rounded-full blur-2xl -translate-y-1/2"></div>
            <div className="absolute right-1/4 top-1/2 w-24 h-24 bg-blue-300 opacity-30 rounded-full blur-2xl -translate-y-1/2"></div>
          </div>
        </motion.header>

        {/* Section: Đại hội VIII - 2 columns layout */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <FaLandmark className="text-4xl text-blue-800 mr-4 drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-gray-900 drop-shadow">1. Đại hội VIII (1996-2001)</h2>
              </div>
              <div className="space-y-6">
                <Card icon={<FaChartLine />} title="Bối cảnh & Đánh giá">
                  <p>
                    Sau 10 năm đổi mới, Việt Nam đã <span className="font-semibold">thoát khỏi khủng hoảng kinh tế-xã hội</span>. GDP năm 1995 tăng 300% so với năm 1985, lạm phát giảm từ 774% xuống 12,7%.
                  </p>
                </Card>
                <Card icon={<FaStar />} title="Bài học & Đường lối tổng quát">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Kiên trì mục tiêu độc lập dân tộc và chủ nghĩa xã hội</li>
                    <li>Đổi mới kinh tế làm trọng tâm</li>
                    <li>Xây dựng Đảng ngang tầm nhiệm vụ</li>
                    <li>Kết hợp sức mạnh dân tộc với sức mạnh thời đại</li>
                  </ol>
                </Card>
                <Card icon={<FaUsers />} title="Phát triển kinh tế - xã hội">
                  <p>
                    Phát triển kinh tế là nhiệm vụ trung tâm. Duy trì tăng trưởng ổn định (7%/năm), vượt qua khủng hoảng tài chính châu Á.
                  </p>
                </Card>
                <Card icon={<FaGavel />} title="Xây dựng Đảng & hệ thống chính trị">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Xây dựng, củng cố bộ máy hệ thống chính trị</li>
                    <li>Tăng cường kiểm tra, giám sát</li>
                    <li>Đẩy mạnh phòng, chống tham nhũng, lãng phí</li>
                  </ul>
                </Card>
              </div>
            </div>
            <div className="flex justify-center items-stretch" style={{marginTop: '70px'}}>
              <img src={dh8} alt="Đại hội VIII" className="rounded-3xl shadow-2xl w-full max-w-xl object-cover border-4 border-blue-200 h-full min-h-[700px]" style={{height: '780px', minWidth: '700px', objectFit: 'fill'}} />
            </div>
          </div>
        </motion.section>

        {/* Section: Đại hội IX - 2 columns layout */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center" style={{marginTop: '70px'}}>
              <img src={dh9} alt="Đại hội IX" className="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-blue-200" style={{height: '890px', minWidth: '700px', objectFit: 'fill'}}/>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <FaBook className="text-4xl text-blue-800 mr-4 drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-gray-900 drop-shadow">2. Đại hội IX (2001-2006)</h2>
              </div>
              <div className="space-y-6">
                <Card icon={<FaChartLine />} title="Bối cảnh & Đánh giá">
                  <p>
                    Đại hội IX diễn ra trong bối cảnh thế giới biến động phức tạp. Đạt nhiều thành tựu nhưng kinh tế còn hạn chế về cơ cấu, hiệu suất, sức cạnh tranh.
                  </p>
                </Card>
                <Card icon={<FaLightbulb />} title="Đường lối & Quan điểm">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Tiếp tục công cuộc đổi mới, đưa đất nước vào kỷ nguyên phát triển mới</li>
                    <li>Kiên trì mục tiêu độc lập dân tộc và chủ nghĩa xã hội</li>
                    <li>Quá độ lên CNXH là sự nghiệp lâu dài, nhiều chặng đường</li>
                  </ul>
                </Card>
                <Card icon={<FaArrowRight />} title="Nhiệm vụ trọng tâm & Triển khai">
                  <ul className="list-disc ml-4 space-y-1">
                    <li>Phát triển kinh tế nhanh, bền vững</li>
                    <li>Cải cách doanh nghiệp Nhà nước</li>
                    <li>Giải quyết vấn đề đất đai</li>
                    <li>Tăng cường đại đoàn kết toàn dân tộc</li>
                    <li>Tăng cường quốc phòng, an ninh</li>
                  </ul>
                </Card>
                <Card icon={<FaUsers />} title="Kết quả">
                  <div className="bg-green-50 p-2 rounded-lg mb-2">
                    <span className="font-semibold">Thành tựu:</span> Việt Nam ra khỏi nhóm nước nghèo, GDP bình quân đầu người đạt 1.168 USD, ổn định chính trị, tăng cường hội nhập quốc tế.
                  </div>
                  <div className="bg-yellow-50 p-2 rounded-lg">
                    <span className="font-semibold">Hạn chế:</span> Cơ chế, chính sách chưa đồng bộ, chất lượng cán bộ còn hạn chế, tham nhũng, lãng phí nghiêm trọng.
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GiaiDoan1Page;
