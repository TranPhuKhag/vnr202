import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  questionNumber: number;
  question: string;
  imageUrl?: string | null;
  answerOptions: {
    text: string;
    rationale: string; // nêu rõ vì sao đúng/sai
    isCorrect: boolean;
  }[];
  hint: string;
  source: string;
}

const questions: QuizQuestion[] = [
  {
    questionNumber: 1,
    question:
      "Nhiệm vụ đầu tiên, bức thiết nhất ngay sau Đại thắng mùa Xuân 1975 là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Hoàn thành thống nhất đất nước về mặt nhà nước.",
        rationale:
          "Đúng. Sau 30/4/1975, yêu cầu cấp bách là thống nhất về mặt nhà nước để hợp nhất bộ máy, pháp lý và chủ quyền.",
        isCorrect: true,
      },
      {
        text: "Tiến hành cải tạo xã hội chủ nghĩa ở miền Nam.",
        rationale:
          "Sai. Cải tạo xã hội chủ nghĩa là nhiệm vụ quan trọng nhưng không phải bước bức thiết đầu tiên.",
        isCorrect: false,
      },
      {
        text: "Khắc phục hậu quả nặng nề của chiến tranh.",
        rationale:
          "Sai. Đây là nhiệm vụ lớn, lâu dài; nhưng trước hết cần thống nhất nhà nước.",
        isCorrect: false,
      },
      {
        text: "Chuẩn bị cho Đại hội đại biểu toàn quốc lần thứ IV.",
        rationale:
          "Sai. Đại hội IV (12/1976) là mốc quan trọng nhưng diễn ra sau khi thống nhất nhà nước.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: thống nhất về mặt nhà nước sau 1975.",
    source: "Giáo trình VNR202 – Chương 3 (1975–1986): Thống nhất đất nước",
  },
  {
    questionNumber: 2,
    question:
      'Hội nghị nào của Ban Chấp hành Trung ương Đảng (khóa III) tháng 8-1975 chủ trương: "Hoàn thành thống nhất nước nhà, đưa cả nước tiến nhanh, tiến mạnh, tiến vững chắc lên Chủ nghĩa xã hội"?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Hội nghị lần thứ 24.",
        rationale:
          "Đúng. Hội nghị Trung ương 24 (8/1975) nêu rõ chủ trương hoàn thành thống nhất và đưa cả nước tiến lên Chủ nghĩa xã hội.",
        isCorrect: true,
      },
      {
        text: "Hội nghị lần thứ 21.",
        rationale:
          "Sai. Hội nghị Trung ương 21 (7/1973) tập trung vấn đề miền Nam sau Hiệp định Paris.",
        isCorrect: false,
      },
      {
        text: "Hội nghị lần thứ 25.",
        rationale: "Sai. Không phải mốc nêu chủ trương này.",
        isCorrect: false,
      },
      {
        text: "Hội nghị lần thứ 23.",
        rationale: "Sai. Không khớp với chủ trương trong câu hỏi.",
        isCorrect: false,
      },
    ],
    hint: "Con số '24' gắn với 8/1975.",
    source: "Giáo trình VNR202 – Chương 3: Hội nghị Trung ương 24 (8/1975)",
  },
  {
    questionNumber: 3,
    question:
      'Sự kiện nào đánh dấu hoàn thành thống nhất về mặt nhà nước và thông qua tên gọi "Cộng hòa Xã hội chủ nghĩa Việt Nam"?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Kỳ họp thứ nhất Quốc hội khóa VI (7/1976).",
        rationale:
          "Đúng. Quốc hội khóa VI đã quyết định tên nước, quốc kỳ, quốc huy, quốc ca, thủ đô…",
        isCorrect: true,
      },
      {
        text: "Tổng tuyển cử bầu Quốc hội chung cho cả nước (4/1976).",
        rationale:
          "Sai. Tổng tuyển cử là tiền đề; tên nước được thông qua tại kỳ họp 7/1976.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Hiệp thương chính trị (11/1975).",
        rationale:
          "Sai. Hiệp thương tạo cơ sở chính trị–pháp lý, chưa hoàn tất tên nước.",
        isCorrect: false,
      },
      {
        text: "Đại hội đại biểu toàn quốc lần thứ IV (12/1976).",
        rationale:
          "Sai. Đại hội IV tổng kết và đề ra đường lối; tên nước đã được Quốc hội thông qua trước đó.",
        isCorrect: false,
      },
    ],
    hint: "Nhớ mốc tháng 7/1976 của Quốc hội khóa VI.",
    source:
      "Giáo trình VNR202 – Chương 3: Quốc hội khóa VI, kỳ họp 1 (7/1976)",
  },
  {
    questionNumber: 4,
    question:
      "Đại hội đại biểu toàn quốc lần thứ IV (12-1976) quyết định đổi tên Đảng Lao động Việt Nam thành gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Đảng Cộng sản Đông Dương.",
        rationale: "Sai. Tên lịch sử thời kỳ trước 1945.",
        isCorrect: false,
      },
      {
        text: "Đảng Cộng sản Việt Nam.",
        rationale: "Đúng. Đại hội IV khôi phục tên Đảng Cộng sản Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Đảng Công Nông Việt Nam.",
        rationale: "Sai. Không có quyết định đổi tên như vậy.",
        isCorrect: false,
      },
      {
        text: "Đảng Xã hội Việt Nam.",
        rationale: "Sai. Không phải tổ chức cầm quyền.",
        isCorrect: false,
      },
    ],
    hint: "Tên Đảng hiện hành.",
    source: "Giáo trình VNR202 – Chương 3: Đại hội IV (12/1976)",
  },
  {
    questionNumber: 5,
    question:
      "Về đường lối kinh tế tại Đại hội IV (12-1976), Đảng xác định ưu tiên nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Ưu tiên công nghiệp nhẹ trên cơ sở nông nghiệp.",
        rationale: "Sai. Đây không phải trọng tâm Đại hội IV.",
        isCorrect: false,
      },
      {
        text: "Ưu tiên nông nghiệp là mặt trận hàng đầu.",
        rationale:
          "Sai một phần bối cảnh. Đại hội IV nhấn mạnh công nghiệp nặng trên cơ sở nông nghiệp & công nghiệp nhẹ.",
        isCorrect: false,
      },
      {
        text: "Ưu tiên công nghiệp nặng hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ.",
        rationale:
          "Đúng. Mục tiêu xây dựng cơ sở vật chất kỹ thuật, lấy công nghiệp nặng làm trọng tâm (một cách hợp lý).",
        isCorrect: true,
      },
      {
        text: "Phát triển kinh tế tư nhân và kinh tế quốc doanh.",
        rationale:
          "Sai về cách diễn đạt trọng tâm trong văn kiện Đại hội IV thời điểm đó.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: công nghiệp nặng (hợp lý).",
    source: "Giáo trình VNR202 – Chương 3: Đường lối Đại hội IV",
  },
  {
    questionNumber: 6,
    question:
      "Một hạn chế lớn của Đại hội IV (1976) khi xác định mục tiêu kinh tế là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Xác định nông nghiệp là mặt trận hàng đầu chưa hợp lý.",
        rationale:
          "Sai. Đại hội IV không đặt nông nghiệp là mặt trận hàng đầu như Đại hội V sau này nhấn mạnh.",
        isCorrect: false,
      },
      {
        text: "Coi nhẹ nhiệm vụ củng cố quốc phòng an ninh.",
        rationale: "Sai. Đại hội IV không coi nhẹ Quốc phòng – An ninh.",
        isCorrect: false,
      },
      {
        text: "Nóng vội dự kiến hoàn thành cơ bản chuyển từ sản xuất nhỏ lên sản xuất lớn xã hội chủ nghĩa trong ~20 năm.",
        rationale:
          "Đúng. Đây là biểu hiện duy ý chí, dự báo thời gian quá ngắn so với thực tế.",
        isCorrect: true,
      },
      {
        text: "Chưa chú trọng phát triển khoa học – kỹ thuật.",
        rationale:
          "Sai. Văn kiện có đề cập Khoa học – Kỹ thuật, hạn chế chính nằm ở dự báo duy ý chí.",
        isCorrect: false,
      },
    ],
    hint: "Điểm 'duy ý chí' về mốc thời gian.",
    source: "Giáo trình VNR202 – Chương 3: Đánh giá Đại hội IV",
  },
  {
    questionNumber: 7,
    question:
      'Sự kiện nào được coi là "bước đột phá đầu tiên" trong quá trình tìm tòi đổi mới kinh tế (1975–1986)?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Chỉ thị 100 Trung ương (1/1981).",
        rationale:
          "Sai. Chỉ thị 100 rất quan trọng nhưng 'đột phá đầu' thường gắn với Hội nghị Trung ương 6 khóa IV (1979).",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương 6 khóa IV (8/1979).",
        rationale:
          "Đúng. Hội nghị Trung ương 6 (1979) chủ trương tháo gỡ để 'sản xuất bung ra'.",
        isCorrect: true,
      },
      {
        text: "Hội nghị Trung ương 8 khóa V (6/1985).",
        rationale:
          "Sai. Đây thường được coi là 'đột phá thứ hai' về giá–lương–tiền.",
        isCorrect: false,
      },
      {
        text: "Đại hội V (3/1982).",
        rationale: "Sai. Đại hội V tổng kết và điều chỉnh, không là 'đột phá đầu'.",
        isCorrect: false,
      },
    ],
    hint: "Nhớ mốc 1979 và cụm 'bung ra'.",
    source: "Giáo trình VNR202 – Chương 3: Hội nghị Trung ương 6 (8/1979)",
  },
  {
    questionNumber: 8,
    question:
      "Mục đích chủ yếu của Hội nghị Trung ương 6 (8/1979) khi khắc phục khuyết điểm trong quản lý kinh tế là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Tập trung vốn cho công trình trọng điểm.",
        rationale:
          "Sai. Không phải ý chính được nhấn mạnh như một 'đột phá'.",
        isCorrect: false,
      },
      {
        text: "Phá bỏ rào cản để cho 'sản xuất bung ra'.",
        rationale:
          "Đúng. Trọng tâm là tháo gỡ cơ chế kìm hãm để thúc đẩy sản xuất.",
        isCorrect: true,
      },
      {
        text: "Hoàn thành cải tạo xã hội chủ nghĩa ở miền Nam.",
        rationale: "Sai. Không phải mục đích trọng tâm của Hội nghị Trung ương 6 (1979).",
        isCorrect: false,
      },
      {
        text: "Đổi mới công tác cán bộ.",
        rationale: "Sai. Đây không phải trục chính của quyết sách kinh tế Hội nghị.",
        isCorrect: false,
      },
    ],
    hint: "Cụm từ 'sản xuất bung ra'.",
    source: "Giáo trình VNR202 – Chương 3: Nội dung Hội nghị Trung ương 6 (1979)",
  },
  {
    questionNumber: 9,
    question:
      "Chỉ thị 100 Trung ương (1/1981) về khoán sản phẩm trong Hợp tác xã nông nghiệp quy định trọng tâm nào?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Xã viên được giao khoán và tự do định giá sản phẩm.",
        rationale:
          "Sai. Cơ chế giá còn chịu quản lý; không 'tự do định giá' đầy đủ.",
        isCorrect: false,
      },
      {
        text: "Xã viên nhận mức khoán theo diện tích, tự làm các khâu cấy, chăm sóc, thu hoạch.",
        rationale:
          "Đúng. Khoán đến nhóm/người lao động gắn với diện tích, sản lượng và trách nhiệm.",
        isCorrect: true,
      },
      {
        text: "Hợp tác xã chỉ làm đất và thủy lợi.",
        rationale:
          "Sai. Hợp tác xã vẫn giữ nhiều khâu tổ chức – dịch vụ, không chỉ 2 khâu.",
        isCorrect: false,
      },
      {
        text: "Sản lượng vượt khoán phải nộp lại 50% cho Hợp tác xã.",
        rationale:
          "Sai. Quy định vượt khoán được hưởng khuyến khích, không phải mẫu số 50% cố định.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: khoán đến nhóm/người và diện tích.",
    source: "Giáo trình VNR202 – Chương 3: Chỉ thị 100 (1/1981)",
  },
  {
    questionNumber: 10,
    question:
      "Đại hội V (3-1982) bổ sung nhận thức nào về thời kỳ quá độ lên Chủ nghĩa xã hội ở Việt Nam?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Khẳng định đã cơ bản hoàn thành thời kỳ quá độ.",
        rationale: "Sai. Việt Nam còn ở giai đoạn đầu.",
        isCorrect: false,
      },
      {
        text: "Khẳng định đang ở chặng đường đầu tiên của thời kỳ quá độ lên Chủ nghĩa xã hội.",
        rationale:
          "Đúng. Đại hội V xác định rõ ta đang ở chặng đầu của thời kỳ quá độ.",
        isCorrect: true,
      },
      {
        text: "Nhiệm vụ chính là thực hiện khoán sản phẩm trong nông nghiệp.",
        rationale:
          "Sai. Khoán sản phẩm quan trọng nhưng không phải 'nhận thức mới' trung tâm.",
        isCorrect: false,
      },
      {
        text: "Nhiệm vụ chính là xóa bỏ cơ chế bao cấp ngay lập tức.",
        rationale:
          "Sai. Đường lối chuyển đổi từng bước, chưa 'ngay lập tức'.",
        isCorrect: false,
      },
    ],
    hint: "Cụm: 'chặng đường đầu tiên'.",
    source: "Giáo trình VNR202 – Chương 3: Đại hội V (3/1982)",
  },
  {
    questionNumber: 11,
    question:
      "Trong chặng đường đầu tiên (Đại hội V), mặt trận hàng đầu cần tập trung phát triển mạnh mẽ là gì?",
    imageUrl: null,
    answerOptions: [
      {
        text: "Công nghiệp nặng và giao thông vận tải.",
        rationale:
          "Sai. Khác với định hướng Đại hội IV; Đại hội V điều chỉnh trọng tâm ngắn hạn.",
        isCorrect: false,
      },
      {
        text: "Quốc phòng và an ninh.",
        rationale: "Sai. Không phải 'mặt trận hàng đầu' kinh tế ở chặng đầu.",
        isCorrect: false,
      },
      {
        text: "Sản xuất nông nghiệp, hàng tiêu dùng và xuất khẩu.",
        rationale:
          "Đúng. Đại hội V nhấn mạnh 3 chương trình: nông nghiệp, hàng tiêu dùng, xuất khẩu.",
        isCorrect: true,
      },
      {
        text: "Văn hóa, giáo dục và y tế.",
        rationale:
          "Sai. Đây là lĩnh vực quan trọng nhưng không là 'mặt trận hàng đầu' kinh tế lúc đó.",
        isCorrect: false,
      },
    ],
    hint: "Ba trụ: nông nghiệp – tiêu dùng – xuất khẩu.",
    source: "Giáo trình VNR202 – Chương 3: Chủ trương Đại hội V",
  },
  {
    questionNumber: 12,
    question:
      'Sự kiện nào được coi là "đột phá thứ hai" trong tìm tòi đổi mới kinh tế (khóa V)?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Hội nghị Trung ương 6 khóa IV (8/1979).",
        rationale: "Sai. Đó là đột phá thứ nhất.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương 7 khóa V (12/1984).",
        rationale: "Sai. Không phải mốc 'đột phá thứ hai'.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương 8 khóa V (6/1985).",
        rationale:
          "Đúng. Đột phá về xoá bỏ cơ chế tập trung quan liêu bao cấp, lấy giá–lương–tiền làm khâu đột phá.",
        isCorrect: true,
      },
      {
        text: "Hội nghị Bộ Chính trị khóa V (8/1986).",
        rationale:
          "Sai. Thường được coi là đột phá thứ ba, mở đường Đại hội VI.",
        isCorrect: false,
      },
    ],
    hint: "Nhớ mốc 6/1985 và 'giá–lương–tiền'.",
    source: "Giáo trình VNR202 – Chương 3: Hội nghị Trung ương 8 (6/1985)",
  },
  {
    questionNumber: 13,
    question:
      'Nội dung cốt lõi của "đột phá thứ hai" (Hội nghị Trung ương 8, 6-1985) là gì?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Tiếp tục đẩy mạnh cải tạo xã hội chủ nghĩa ở miền Nam.",
        rationale: "Sai. Trọng tâm là cải cách cơ chế quản lý kinh tế.",
        isCorrect: false,
      },
      {
        text: "Tập trung vốn cho ba chương trình kinh tế lớn.",
        rationale:
          "Sai. Ba chương trình là định hướng, không phải 'khâu đột phá' về cơ chế.",
        isCorrect: false,
      },
      {
        text: "Xoá bỏ cơ chế tập trung quan liêu bao cấp, lấy giá–lương–tiền làm khâu đột phá.",
        rationale:
          "Đúng. Đây là bước chuyển quan trọng về cơ chế quản lý kinh tế.",
        isCorrect: true,
      },
      {
        text: "Xóa hết trạm kiểm soát hàng hóa trên các tuyến.",
        rationale:
          "Sai. Biện pháp hành chính không phải nội dung cốt lõi của đột phá.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: cơ chế & giá–lương–tiền.",
    source: "Giáo trình VNR202 – Chương 3: Cải cách 'giá–lương–tiền' 1985",
  },
  {
    questionNumber: 14,
    question:
      'Hội nghị nào được coi là "đột phá thứ ba" và bước quyết định dẫn tới đường lối Đổi mới (Đại hội VI)?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Hội nghị Trung ương 6 khóa IV (8/1979).",
        rationale: "Sai. Đột phá thứ nhất.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Trung ương 8 khóa V (6/1985).",
        rationale: "Sai. Đột phá thứ hai.",
        isCorrect: false,
      },
      {
        text: "Hội nghị Bộ Chính trị khóa V (8/1986).",
        rationale:
          "Đúng. Họp 8/1986 được xem là bước quyết định chín muồi tư duy đổi mới.",
        isCorrect: true,
      },
      {
        text: "Hội nghị Trung ương 6 khóa V (7/1984).",
        rationale: "Sai. Không phải 'đột phá thứ ba'.",
        isCorrect: false,
      },
    ],
    hint: "Mốc 8/1986 ngay trước Đại hội VI (12/1986).",
    source: "Giáo trình VNR202 – Chương 3: Bối cảnh tiền Đại hội VI",
  },
  {
    questionNumber: 15,
    question:
      'Chủ trương quan trọng nhất của "đột phá thứ ba" (Bộ Chính trị khóa V, 8/1986) liên quan tới cơ cấu sản xuất là gì?',
    imageUrl: null,
    answerOptions: [
      {
        text: "Ưu tiên đầu tư lớn cho công nghiệp nặng.",
        rationale:
          "Sai. Quan điểm lúc này điều chỉnh để giải quyết thiếu đói, hàng tiêu dùng.",
        isCorrect: false,
      },
      {
        text: "Điều chỉnh lớn cơ cấu theo hướng lấy nông nghiệp là mặt trận hàng đầu, phát triển mạnh công nghiệp nhẹ; công nghiệp nặng có chọn lọc.",
        rationale:
          "Đúng. Đây là chuyển hướng quan trọng để thực tế hóa mục tiêu ổn định – phát triển.",
        isCorrect: true,
      },
      {
        text: "Hoàn thành cải tạo xã hội chủ nghĩa ở miền Nam trong 5 năm.",
        rationale: "Sai. Không phản ánh trọng tâm cơ cấu sản xuất của đột phá.",
        isCorrect: false,
      },
      {
        text: "Chuyển hẳn ngân hàng sang hạch toán kinh doanh xã hội chủ nghĩa.",
        rationale:
          "Sai. Hạch toán là nội dung cải cách, nhưng câu hỏi hỏi về cơ cấu sản xuất.",
        isCorrect: false,
      },
    ],
    hint: "Nông nghiệp – công nghiệp nhẹ, công nghiệp nặng có chọn lọc.",
    source:
      "Giáo trình VNR202 – Chương 3: Điều chỉnh cơ cấu 8/1986 và tiền Đổi mới",
  },
];

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<null | number>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answers[current] !== null) return;
    setSelected(idx);
    setShowFeedback(true);
    setAnswers((prev) => {
      const arr = [...prev];
      arr[current] = idx;
      return arr;
    });
    if (questions[current].answerOptions[idx].isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.min(c + 1, questions.length));
  };

  const handlePrev = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const isAnswered = answers[current] !== null;
  const isCorrectAnswer =
    answers[current] !== null &&
    questions[current]?.answerOptions[answers[current] as number]?.isCorrect;

  const findCorrectAnswerIndex = (q: QuizQuestion) =>
    q.answerOptions.findIndex((opt) => opt.isCorrect);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2">
      <motion.div
        className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e6e] via-[#6e7fdc] to-[#3a3f8f] mb-8 text-center drop-shadow">
          Quiz ôn tập lý thuyết
        </h2>

        {current < questions.length ? (
          <>
            <div className="text-lg font-medium mb-6 text-gray-800 text-center">
              Câu {current + 1}/{questions.length}:<br />
              <span className="font-semibold">
                {questions[current].question}
              </span>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {questions[current].answerOptions.map((opt, idx) => {
                const isSelected = selected === idx || answers[current] === idx;
                const isCorrect = opt.isCorrect;
                const showResult = showFeedback || isAnswered;
                let btnClass = "";
                if (showResult) {
                  if (isSelected && isCorrect)
                    btnClass = "bg-green-500 text-white border-green-600";
                  else if (isSelected && !isCorrect)
                    btnClass = "bg-red-500 text-white border-red-600";
                  else if (isCorrect)
                    btnClass = "bg-green-100 border-green-400 text-green-700";
                  else btnClass = "bg-blue-100 border-blue-300 text-blue-700";
                } else {
                  btnClass = isSelected
                    ? "bg-blue-200 border-blue-400 text-blue-900"
                    : "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200";
                }
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-4 py-3 rounded-lg text-lg font-medium border-2 shadow transition-all text-left ${btnClass}`}
                    disabled={showResult}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {opt.text}
                  </motion.button>
                );
              })}
            </div>

            {/* FEEDBACK: Vì sao đúng & vì sao sai */}
            {(showFeedback || isAnswered) && (
              <motion.div
                className="text-left mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const chosenIdx = answers[current] as number | null;
                  const correctIdx = findCorrectAnswerIndex(questions[current]);
                  const opts = questions[current].answerOptions;

                  if (chosenIdx === null) return null;

                  return (
                    <div className="space-y-4">
                      <div
                        className={`text-lg font-semibold ${
                          isCorrectAnswer ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isCorrectAnswer ? "Chính xác!" : "Chưa đúng!"}
                      </div>

                      {!isCorrectAnswer && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                          <div className="font-semibold text-red-700 mb-1">
                            Vì sao bạn chọn sai:
                          </div>
                          <div className="text-gray-800">
                            {opts[chosenIdx].rationale}
                          </div>
                        </div>
                      )}

                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <div className="font-semibold text-green-700 mb-1">
                          Đáp án đúng:&nbsp;
                          {String.fromCharCode(65 + correctIdx)}.{" "}
                          {opts[correctIdx].text}
                        </div>
                        <div className="text-gray-800">
                          {opts[correctIdx].rationale}
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 p-3 rounded">
                        <div className="font-semibold text-gray-800 mb-2">
                          Vì sao các phương án khác sai:
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800">
                          {opts.map((op, i) => {
                            if (i === correctIdx) return null; // bỏ đáp án đúng
                            if (!op.rationale) return null;
                            // nếu đã nêu “vì sao bạn chọn sai” ở trên thì bỏ qua phương án đã chọn,
                            // tránh lặp lại cùng một rationale
                            if (!isCorrectAnswer && i === chosenIdx)
                              return null;
                            return (
                              <li key={i}>
                                <span className="font-medium">
                                  {String.fromCharCode(65 + i)}. {op.text}:
                                </span>{" "}
                                {op.rationale}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}

            <div className="flex justify-between items-center mt-6">
              <button
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Câu trước
              </button>
              <button
                className="px-5 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
                onClick={() => setShowHint(!showHint)}
              >
                Gợi ý
              </button>
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Câu tiếp
              </button>
            </div>

            <motion.div
              className="mt-4 p-4 text-center bg-yellow-50 text-yellow-800 border-l-4 border-yellow-400 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showHint ? 1 : 0,
                height: showHint ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-semibold mb-2">Gợi ý:</div>
              <div className="text-sm italic">{questions[current].hint}</div>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-blue-700 mb-2">
              Hoàn thành!
            </div>
            <div className="text-lg mb-4">
              Bạn đúng <span className="text-green-600 font-bold">{score}</span>
              /{questions.length} câu.
            </div>

            {answers.some(
              (ans, idx) =>
                idx < questions.length &&
                ans !== null &&
                !questions[idx]?.answerOptions[ans]?.isCorrect
            ) && (
              <div className="mt-6 text-left max-w-xl mx-auto">
                <div className="font-semibold text-red-600 mb-2">
                  Các câu bạn trả lời sai, hãy lưu ý:
                </div>
                <ul className="space-y-4">
                  {questions.map((q, idx) =>
                    answers[idx] !== null &&
                    !q.answerOptions[answers[idx] as number].isCorrect ? (
                      <li
                        key={idx}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded"
                      >
                        <div className="font-medium text-gray-800 mb-1">
                          Câu {idx + 1}: {q.question}
                        </div>
                        <div className="text-gray-700 mb-1">
                          <span className="font-semibold">Đáp án đúng:</span>{" "}
                          {String.fromCharCode(65 + findCorrectAnswerIndex(q))}.{" "}
                          {q.answerOptions[findCorrectAnswerIndex(q)].text}
                        </div>
                        <div className="text-gray-600 text-sm italic">
                          {`Giải thích: ` +
                            q.answerOptions[
                              findCorrectAnswerIndex(q)
                            ].rationale.substring(5)}
                        </div>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}

            <button
              className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={resetQuiz}
            >
              Làm lại Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;
