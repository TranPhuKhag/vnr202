import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaUsers,
  FaGavel,
  FaBookOpen,
  FaShieldAlt,
  FaCogs,
  FaUserTie,
} from "react-icons/fa";

// Thêm 3 ảnh của bạn
import caunhattan from "../assets/caunhattan.png";
import hoasen from "../assets/hoasen.png";
import samsung from "../assets/samsung.png";

// --- Reusable Components (ĐỊNH NGHĨA BÊN NGOÀI) ---

// Thêm lại variants cho ảnh
const itemScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

/**
 * Component cho bố cục xen kẽ (Ảnh trái / Text phải hoặc ngược lại)
 */
const FeatureSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  imageSlot: React.ReactNode; // Thay vì gợi ý, truyền thẳng ảnh vào
  reverse?: boolean;
}> = ({
  title,
  icon,
  children,
  imageSlot, // Nhận component ảnh
  reverse = false,
}) => (
  <section className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
    <div className={`w-full ${reverse ? "md:order-2" : "md:order-1"}`}>
      {imageSlot} {/* Hiển thị ảnh ở đây */}
    </div>
    <div className={`w-full ${reverse ? "md:order-1" : "md:order-2"}`}>
      <div className="flex items-center mb-4">
        <span className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4">
          {icon}
        </span>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="prose prose-lg max-w-none text-gray-700">{children}</div>
    </div>
  </section>
);

// --- Main Page Component ---
const GiaiDoan3Page: React.FC = () => {
  return (
    // Đảm bảo có padding top để không bị Header che
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-100 text-gray-800 font-sans pt-24">
      <main className="max-w-7xl mx-auto p-4 sm:p-8">
       <motion.header
                         initial={{ opacity: 0, y: -40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                         className="text-center mb-20"
                       >
                         <h1 className="text-xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600" style={{height: "50px"}}>
                           Giai đoạn 3: Đột phá Chiến lược và Chỉnh đốn Đảng (2011 - 2018)
                         </h1>
                       
                         {/* Timeline */}
                         <div className="relative flex justify-between items-center max-w-5xl mx-auto py-12">
                           {/* Đường kẻ chính */}
                           <div className="absolute top-1/2 left-0 w-full h-[6px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full -translate-y-1/2 shadow-lg"></div>
                           {/* Mốc năm */}
                           {[{ year: 2011, label: "Đại hội XI" }, { year: 2016, label: "Đại hội XII" }, { year: "2018" , label: "Tiếp diễn" }].map((item, index) => (
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

        {/* --- 2. Khái quát --- */}
        {/* Gỡ bỏ toàn bộ `variants`, `initial`, `whileInView`, `viewport` */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center italic text-xl text-gray-700 border-t-4 border-blue-500 mb-24 max-w-4xl mx-auto">
          <p>
            Đây là giai đoạn Đảng tiếp tục đẩy mạnh công cuộc đổi mới toàn diện,
            đồng bộ, xây dựng Đảng trong sạch, vững mạnh, và phát huy sức mạnh
            toàn dân tộc.
          </p>
        </div>

        {/* --- 3. Đại hội XI (2011) --- */}
        <FeatureSection
          title="Đại hội XI (2011)"
          icon={<FaBookOpen className="text-2xl" />}
          // Thay thế ImagePlaceholder bằng ảnh thật
          imageSlot={
            <motion.div
              variants={itemScaleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full h-full min-h-[350px] rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={caunhattan}
                alt="Cầu Nhật Tân, biểu tượng cho phát triển hạ tầng"
                className="object-cover w-full h-full"
              />
            </motion.div>
          }
        >
          <p>
            Đại hội XI (1/2011) đã thông qua{" "}
            <strong>Cương lĩnh 2011 (bổ sung, phát triển)</strong>, kiên định
            nền tảng chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh.
          </p>
          <p>
            Đại hội cũng thông qua{" "}
            <strong>Chiến lược phát triển KT-XH 2011-2020</strong>, nhấn mạnh
            phát triển nhanh gắn liền với bền vững.
          </p>
        </FeatureSection>

        {/* --- 3.1. Ba Đột phá Chiến lược --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            3 Đột phá Chiến lược (2011-2020)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Đột phá 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
              <FaGavel className="text-5xl text-blue-500 mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thể chế
              </h3>
              <p className="text-gray-600">
                Hoàn thiện thể chế kinh tế thị trường định hướng XHCN.
              </p>
            </div>
            {/* Đột phá 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-teal-500 hover:shadow-2xl transition-shadow duration-300">
              <FaUserTie className="text-5xl text-teal-500 mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nguồn nhân lực
              </h3>
              <p className="text-gray-600">
                Phát triển nguồn nhân lực chất lượng cao.
              </p>
            </div>
            {/* Đột phá 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-indigo-500 hover:shadow-2xl transition-shadow duration-300">
              <FaCogs className="text-5xl text-indigo-500 mx-auto mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hạ tầng
              </h3>
              <p className="text-gray-600">
                Xây dựng kết cấu hạ tầng đồng bộ (đặc biệt là giao thông).
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. Chỉnh đốn Đảng (2011-2016) --- */}
        <FeatureSection
          title="Chỉnh đốn Đảng (2011-2016)"
          icon={<FaShieldAlt className="text-2xl" />}
          // Thay thế ImagePlaceholder bằng ảnh thật
          imageSlot={
            <motion.div
              variants={itemScaleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full h-full min-h-[350px] rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={hoasen}
                alt="Hoa sen trắng, biểu tượng cho sự trong sạch"
                className="object-cover w-full h-full"
              />
            </motion.div>
          }
          reverse={true} // Đảo bố cục
        >
          <p>
            Xây dựng Đảng trong sạch, vững mạnh được coi là nhiệm vụ quan trọng,
            thường xuyên.
          </p>
          <p>
            <strong>Nghị quyết TW 4, khóa XI (2012)</strong> đã chỉ rõ các vấn
            đề cấp bách, trọng tâm là ngăn chặn, đẩy lùi tình trạng suy thoái về
            tư tưởng chính trị, đạo đức, lối sống.
          </p>
          <p>
            Kiên quyết chống các biểu hiện{" "}
            <strong>"tự diễn biến," "tự chuyển hóa"</strong> trong nội bộ.
          </p>
        </FeatureSection>

        {/* --- 5. Đại hội XII (2016) --- */}
        <FeatureSection
          title="Đại hội XII (2016)"
          icon={<FaUsers className="text-2xl" />}
          // Thay thế ImagePlaceholder bằng ảnh thật
          imageSlot={
            <motion.div
              variants={itemScaleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full h-full min-h-[350px] rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={samsung}
                alt="Nhà máy Samsung, biểu tượng cho công nghiệp hiện đại"
                className="object-cover w-full h-full"
              />
            </motion.div>
          }
        >
          <p>
            Đại hội XII (1/2016) đề ra chủ đề: "Tăng cường xây dựng Đảng trong
            sạch, vững mạnh; phát huy sức mạnh toàn dân tộc..."
          </p>
          <p>
            Mục tiêu tổng quát là phấn đấu sớm đưa nước ta cơ bản trở thành{" "}
            <strong>nước công nghiệp theo hướng hiện đại</strong>.
          </p>
          <p>
            Đại hội tiếp tục nhấn mạnh chỉnh đốn Đảng, ngăn chặn suy thoái, và
            xây dựng bộ máy tinh gọn, hiệu lực, hiệu quả.
          </p>
        </FeatureSection>

        {/* --- 6. Trích dẫn kết luận --- */}
        <div className="relative max-w-4xl mx-auto text-center py-10">
          <blockquote className="relative italic text-xl md:text-2xl font-medium text-gray-800 p-8">
            <span className="absolute top-0 left-0 text-8xl text-blue-100 font-serif transform -translate-x-4 -translate-y-6 -z-10">
              “
            </span>
            Đại hội đã khẳng định Đảng có quyền tự hào về những thành tựu vĩ đại
            trong suốt quá trình lãnh đạo cách mạng.
            <span className="absolute bottom-0 right-0 text-8xl text-blue-100 font-serif transform translate-x-4 translate-y-6 -z-10">
              ”
            </span>
          </blockquote>
        </div>
      </main>
    </div>
  );
};

export default GiaiDoan3Page;
