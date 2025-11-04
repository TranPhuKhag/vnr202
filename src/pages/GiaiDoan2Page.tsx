import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaGlobeAmericas,
  FaBook,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import daihoi5 from "../assets/daihoi5.png";
import wtoVideo from "../assets/wto.mp4";
import cuonglinh2011 from "../assets/cuonglinh2011.png";

const GiaiDoan2Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 50, duration: 1 },
    },
  };

  const Card = ({
    icon,
    title,
    children,
    className,
  }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden h-full ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="p-6 h-full flex flex-col"
      >
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 text-blue-800 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="text-gray-600 space-y-2 flex-grow">{children}</div>
      </motion.div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600 mb-4">
            Giai đoạn 2: Hội nhập & Hoàn thiện Lý luận (2006–2011)
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Thời kỳ bản lề với những bước tiến vượt bậc trong hội nhập quốc tế
            và sự phát triển, hoàn thiện tư duy lý luận của Đảng.
          </motion.p>
        </motion.header>

        {/* Section 1: Đại hội X */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center mb-8">
            <FaLandmark className="text-4xl text-blue-800 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              1. Đại hội X (2006): Dấu mốc 20 năm đổi mới
            </h2>
          </div>
          <motion.blockquote
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border-l-4 border-blue-500 italic text-gray-700 p-4 bg-white rounded-r-lg shadow-md mb-8"
          >
            "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức
            mạnh toàn dân tộc, đẩy mạnh công cuộc đổi mới, sớm đưa nước ta ra
            khỏi tình trạng kém phát triển."
            <cite className="block text-right mt-2 not-italic">
              - Chủ đề Đại hội X
            </cite>
          </motion.blockquote>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Card icon={<FaStar />} title="Nhiệm vụ trọng tâm">
              <p>
                Tổng kết, đánh giá 20 năm đổi mới, chỉ rõ thành tựu và yếu kém.
              </p>
              <p className="mt-2 font-semibold text-blue-800">
                Lần đầu tiên đặt nhiệm vụ then chốt là xây dựng, chỉnh đốn Đảng
                ngay trong hàng ngũ nhiệm vụ chiến lược.
              </p>
            </Card>
            <Card icon={<FaChartLine />} title="Kinh tế & Đổi mới">
              <p>
                Tiếp tục đường lối kinh tế nhiều thành phần, cho phép thí điểm
                bán, khoán, cho thuê DNNN nhưng vẫn giữ vai trò chủ đạo của kinh
                tế nhà nước.
              </p>
              <p className="mt-2 font-semibold">
                Xác định "đẩy mạnh toàn diện công cuộc đổi mới" trong công
                nghiệp hóa, hiện đại hóa.
              </p>
            </Card>
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-1 rounded-xl shadow-lg flex flex-col justify-center items-center text-center overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={daihoi5}
                alt="Đại hội X của Đảng"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section 2: Hội nhập quốc tế */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-24 p-8 bg-white rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-100 rounded-full opacity-30 blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <FaGlobeAmericas className="text-4xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                2. Điểm nhấn: Hội nhập quốc tế sâu rộng
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400"
                >
                  <h4 className="font-bold text-xl text-blue-900 mb-2">
                    Gia nhập WTO (11/2006)
                  </h4>
                  <p className="text-gray-700">
                    Việt Nam chính thức trở thành{" "}
                    <span className="font-bold text-blue-800">
                      thành viên thứ 150
                    </span>{" "}
                    của Tổ chức Thương mại Thế giới, mở ra kỷ nguyên mới cho hội
                    nhập kinh tế toàn cầu.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-400"
                >
                  <h4 className="font-bold text-xl text-cyan-900 mb-2">
                    Đường lối đối ngoại, quốc phòng
                  </h4>
                  <p className="text-gray-700">
                    <span className="font-bold">Nghị quyết TW 4 (khóa X)</span>{" "}
                    xác định: Giữ vững độc lập, chủ quyền, hội nhập vì lợi ích
                    quốc gia và kết hợp kinh tế với quốc phòng, an ninh.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="p-4 bg-green-50 rounded-lg text-center"
                >
                  <p className="font-bold text-green-800 text-lg">
                    Thành tựu đối ngoại (2006-2010)
                  </p>
                  <p className="text-2xl font-extrabold text-green-600">~230</p>
                  <p className="text-sm text-gray-600">
                    Nước và vùng lãnh thổ có quan hệ thương mại đầu tư
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <video
                  src={wtoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Đại hội XI */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <FaBook className="text-4xl text-blue-800 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              3. Hoàn thiện Lý luận: Đại hội XI (2011) & Cương lĩnh 2011
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <div className="mb-4 border-b border-gray-200">
                  <nav
                    className="flex space-x-1 sm:space-x-4"
                    aria-label="Tabs"
                  >
                    <button
                      onClick={() => setActiveTab("tab1")}
                      className={`px-3 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                        activeTab === "tab1"
                          ? "border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Mô hình & Đặc trưng
                    </button>
                    <button
                      onClick={() => setActiveTab("tab2")}
                      className={`px-3 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                        activeTab === "tab2"
                          ? "border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Phương hướng
                    </button>
                    <button
                      onClick={() => setActiveTab("tab3")}
                      className={`px-3 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                        activeTab === "tab3"
                          ? "border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Xây dựng Đảng
                    </button>
                  </nav>
                </div>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="prose max-w-none"
                >
                  {activeTab === "tab1" && (
                    <div>
                      <h4>Kế thừa Cương lĩnh 1991, làm rõ mô hình XHCN:</h4>
                      <p className="font-semibold italic text-blue-700">
                        "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"
                      </p>
                      <p>Bổ sung 2 đặc trưng bao trùm, tổng quát:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Mục tiêu: "Dân giàu, nước mạnh, dân chủ, công bằng,
                          văn minh".
                        </li>
                        <li>
                          Thể chế: "Nhà nước pháp quyền XHCN của nhân dân, do
                          nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo".
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "tab2" && (
                    <div>
                      <h4>Bổ sung và phát triển các phương hướng cơ bản:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-bold">Về kinh tế:</span> Phát
                          triển kinh tế gắn với tri thức, tài nguyên, môi
                          trường; xây dựng cơ cấu kinh tế hợp lý, hiện đại.
                        </li>
                        <li>
                          <span className="font-bold">
                            Về các mối quan hệ lớn:
                          </span>{" "}
                          Xác định và giải quyết tốt 3 mối quan hệ lớn (giữa đổi
                          mới, ổn định và phát triển; đổi mới kinh tế và chính
                          trị; kinh tế thị trường và định hướng XHCN).
                        </li>
                      </ul>
                    </div>
                  )}
                  {activeTab === "tab3" && (
                    <div>
                      <h4>Tiếp tục khẳng định vai trò lãnh đạo của Đảng:</h4>
                      <p>
                        Đại hội XI tiếp tục khẳng định vai trò lãnh đạo tuyệt
                        đối, trực tiếp và toàn diện của Đảng đối với Nhà nước và
                        toàn xã hội. Đây là nhân tố quyết định thắng lợi của
                        công cuộc đổi mới.
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="p-6 bg-white rounded-xl shadow-lg flex justify-center items-center"
            >
              <motion.img
                whileHover={{ rotate: 3, scale: 1.1 }}
                src={cuonglinh2011}
                alt="Cương lĩnh 2011"
                className="max-h-64 rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GiaiDoan2Page;
