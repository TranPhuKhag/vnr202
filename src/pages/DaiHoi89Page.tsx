import React from "react";
import { motion } from "framer-motion";
import daihoiVIImage from "../assets/daihoiVI.png";
import aseanImage from "../assets/ASEAN.jpg";

const DaiHoi89Page: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 pt-32">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-600 mb-4">
            Đổi mới toàn diện, đưa đất nước ra khỏi khủng hoảng <br />  
            kinh tế - xã hội 1986 - 1996
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

        {/* Section 1: Bối cảnh cuối năm 1986 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">📅</span>
            1. Bối cảnh cuối năm 1986
          </h2>

          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Tổng quan: Đất nước đang trước những hoang kinh tế – xã hội, yêu cầu
              cấp bách phải đổi mới tư duy và phương thức quản lý.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">
                Đất nước lâm vào khủng hoảng kinh tế – xã hội nghiêm trọng
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Lạm phát cao, các hiện tượng tiêu cực, đời sống nhân dân vô cùng
                    khó khăn.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Cơ chế bao cấp kiềm hãm quá, phân phối bất hợp lý.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Hệ thống quản lý tập trung, quan liêu.</span>
                </li>
              </ul>

              <div className="mt-4 bg-blue-100 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900">
                  💡 Yêu cầu đổi mới
                </p>
                <p className="text-sm text-gray-700 mt-1">

                  Đổi mới toàn diện những thứ trong lĩnh vực kinh tế, chính trị, xã
                  hội và tập trung giải quyết mấu chốt tạo nền tảng phát triển.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Về mặt quốc tế</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Phong trào cải tổ ở Liên Xô và Đông Âu ngày càng rơi vào khủng hoảng kinh tế toàn diện(12-1991)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Bị các đế quốc và thế lực thù địch bao vây, cấm vận.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span> Mở rộng xu thế hợp tác và hội nhập kinh tế quốc tế.</span>
                </li>
              </ul>

              <div className="mt-4 bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={daihoiVIImage}
                  alt="Vietnam street scene"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Đại hội VI */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">🏛️</span>
            2. Đại hội VI (12/1986) – Khởi xướng Đường lối Đổi mới
          </h2>

          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Đại hội khẳng định yếu cầu đổi mới toàn tư duy, có chế quản lý, đề ra
              đường lối đổi mới toàn diện, trước hết là đổi mới kinh tế.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-700">1.129</div>
              <div className="text-xs text-gray-600">Đại biểu</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-700">~1,9 triệu</div>
              <div className="text-xs text-gray-600">Đảng viên</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-700">&gt;30</div>
              <div className="text-xs text-gray-600">Đoàn quốc tế</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-700">124</div>
              <div className="text-xs text-gray-600">Ủy viên T.Ư</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-700">Tổng Bí thư</div>
              <div className="text-xs text-gray-600">Trương Chính (đến 12/1986)</div>
              <div className="text-xs text-gray-600">+ Nguyễn Văn Linh</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Nội dung trọng đại hội lần này
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Đánh giá đúng sự thật, nói rõ sự thật, nghiêm túc kiểm điểm, chỉ rõ
                những sai lầm nghiêm trọng và kéo dài trong giai đoạn 1975-1986
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Khuynh hướng tư tưởng chủ yếu
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nhận mạnh khắc phục bệnh chủ quan duy ý chí, lối suy nghĩ và hành động giản đơn, nóng vội,chạy theo nguyện vọng chủ quan

              </p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Bốn bài học quý báu</h3>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
    1. Quán triệt tư tưởng "lấy dân làm gốc".
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
    2. Luôn luôn xuất phát từ thực tế, tôn trọng và hành động theo quy luật khách quan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
    3. Kết hợp sức mạnh dân tộc với sức mạnh thời đại trong điều kiện mới.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
    4. Chăm lo xây dựng Đảng ngang tầm với một đảng cầm quyền lãnh đạo nhân dân tiến hành cách mạng xã hội chủ nghĩa.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Nội dung cơ bản */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <span className="text-blue-600">📊</span>
            3. Nội dung cơ bản của công cuộc Đổi mới (1986-1996)
          </h2>

          {/* 3.1 */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-blue-800 mb-3">
              3.1. Đổi mới tư duy và chính sách kinh tế
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">☑</span>
                <span>Phát triển nhiều thành phần kinh tế.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">☑</span>
                <span>
                  Cơ chế quản lý: xóa bỏ tập trung quan liêu, hành chính, bao cấp.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">☑</span>
                <span>
                  Ba chương trình kinh tế lớn: lương thực – thực phẩm, hàng tiêu dùng, hàng xuất khẩu.
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                Điều chỉnh cơ cấu sản xuất theo hướng ưu tiên nông nghiệp, công nghiệp nhẹ và công nghiệp nặng.
              </p>
            </div>
          </div>

          {/* 3.2 - Three cards in a row */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-blue-900 mb-2">
                Nghị quyết 10 (4/1988) – Khoán 10
              </h4>
              <p className="text-sm text-gray-700">
                Giao quyền tự chủ cho hộ nông dân; khoán sản phẩm đến nhóm/hộ; tạo bước đột phá năng suất.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-blue-900 mb-2">
                Luật Đầu tư nước ngoài
              </h4>
              <p className="text-sm text-gray-700">
Lần đầu tiên Luật Đầu tư nước ngoài được Quốc hội thông qua và có hiệu lực từ ngày 1-1-1988, mở đường cho việc thu hút vốn đầu tư nước ngoài.              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-blue-900 mb-2">
                Giải quyết lưu thông phân phối
              </h4>
              <p className="text-sm text-gray-700">
                Thực hiện "bốn giảm": Giảm bội chi ngân sách, giảm nhịp độ tăng giá, giảm lạm phát, giảm khó khăn về đời sống của nhân dân.
              </p>
            </div>
          </div>

          {/* 3.3 and 3.4 side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {/* 3.3 */}
            <div>
              <h3 className="text-base font-bold text-blue-800 mb-3">
                3.3. Đổi mới hệ thống chính trị và tư tưởng
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Tư duy chính trị (Hội nghị Ương 6 (3/1989) ).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Cương lĩnh 1991 (Đại hội VII).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Xây dựng Nhà nước pháp quyền (Hội nghị giữa nhiệm kỳ (1/1994) ).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Xây dựng Đảng (Hội nghị Trung ương 3 (6/1992) ).</span>
                </li>
              </ul>
            </div>

            {/* 3.4 */}
            <div>
              <h3 className="text-base font-bold text-blue-800 mb-3">
                3.4. Mở rộng quan hệ đối ngoại
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Việt Nam – Trung Quốc bình thường hóa (1991).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span> Trở thành thành viên đầy đủ của ASEAN (1995).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Thiết lập quan hệ ngoại giao với Hoa Kỳ (11-7-1995).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Large ASEAN Image */}
          <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
            <img
              src={aseanImage}
              alt="Vietnam gia nhập ASEAN 1995"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Section 4: Kết thúc giai đoạn */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span className="text-2xl"> </span>
            4. Kết thúc giai đoạn 1986–1996: Những thành tựu đạt được
          </h2>

          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-900 leading-relaxed">
              Đất nước ra khỏi khủng hoảng kinh tế – xã hội, nhưng một số mặt còn chưa vững chắc. Con đường đi lên chủ nghĩa xã hội ngày càng được xác định rõ hơn.

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-3xl font-bold text-blue-700 mb-2">8,2%</div>
              <div className="text-base font-bold text-blue-900 mb-2">
                Kinh tế: tăng trưởng GDP; lạm phát giảm mạnh.
              </div>
              <div className="text-sm text-gray-700">
                Kinh tế tăng trưởng ổn, có xu hướng theo định hướng XHCN.
</div>
                              <div className="text-sm text-gray-700">
                Lạm phát từ mức 67,1% năm 1991 giảm xuống còn 12,7% năm 1995.
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-3xl font-bold text-blue-700 mb-2">Lương thực</div>
              <div className="text-base font-bold text-blue-900 mb-2">
                Từ thiếu sang dư, có dư trữ và xuất khẩu.
              </div>
              <div className="text-sm text-gray-700">
                Bước đầu bảo đảm an ninh lương thực quốc gia.
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-3xl font-bold text-blue-700 mb-2">Cơ chế thị trường</div>
              <div className="text-base font-bold text-blue-900 mb-2">
                Bước đầu hình thành, vẫn hành theo định hướng XHCN.
              </div>
              <div className="text-sm text-gray-700">
                Mở cửa, hội nhập kinh tế quốc tế.
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Tổng kết:</strong> Giai đoạn 1986-1996 đặt nền móng cho chuyển đổi sang kinh tế thị trường định hướng XHCN, tạo tiền đề hội nhập và phát triển bền vững các giai đoạn tiếp theo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaiHoi89Page;
