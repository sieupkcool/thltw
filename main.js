function toggleInfo() {
  var adminCard = document.getElementById("adminCard");
  adminCard.classList.toggle("show_card");
}

// function validForm() {
//   var hoTen = document.getElementById("hoTen").value;
//   var ngaySinh = document.getElementById("ngaySinh").value;
//   var cccd = document.getElementById("cccd").value;
//   var diaChi = document.getElementById("diaChi").value;

//   if (hoTen === "" || ngaySinh === "" || cccd === "" || diaChi === "") {
//     alert("Vui lòng điền đầy đủ thông tin.");
//   } else {
//     document.getElementById("myForm").onsubmit();
//     window.location.href = "./baiThi.html";
//   }
// }

// questions
const questions = {
  group1: [
    { question: "Mặt Trời có thể tròn. (Đúng/Sai)", answer: "Đúng" },
    {
      question: "Đại dương lớn nhất thế giới là Đại Tây Dương. (Đúng/Sai)",
      answer: "Đúng",
    },
    { question: "Cầu vồng có 7 màu. (Đúng/Sai)", answer: "Đúng" },
    { question: "Con người chỉ sử dụng 10% não bộ. (Đúng/Sai)", answer: "Sai" },
    { question: "Cá voi không bao giờ ngủ. (Đúng/Sai)", answer: "Sai" },
    {
      question:
        "Người hâm mộ bóng đá thường được gọi là 'những con nhóc'. (Đúng/Sai)",
      answer: "Sai",
    },
    {
      question:
        "Đồng hồ đoán thời gian từ cỏ mặt trời được gọi là đồng hồ nước. (Đúng/Sai)",
      answer: "Đúng",
    },
    { question: "Con ngựa cái có răng nước. (Đúng/Sai)", answer: "Đúng" },
    {
      question: "Cổ điển là thể loại âm nhạc của thế kỷ 20. (Đúng/Sai)",
      answer: "Sai",
    },
    {
      question:
        "Những con kangaroo có thể nhảy lên cao nhất là 3 mét. (Đúng/Sai)",
      answer: "Sai",
    },
  ],
  group2: [
    {
      question: "Ai là người đầu tiên đặt chân lên mặt Trăng?",
      options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
      answer: "Neil Armstrong",
    },
    {
      question: "Đất nước nào có diện tích lớn nhất thế giới?",
      options: ["Nga", "Trung Quốc", "Mỹ", "Ấn Độ"],
      answer: "Nga",
    },
    {
      question: "Dãy núi cao nhất thế giới là gì?",
      options: ["Himalaya", "Andes", "Rocky", "Alps"],
      answer: "Himalaya",
    },
    {
      question: "Thủ đô của Pháp là gì?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      answer: "Paris",
    },
    {
      question: "Sông nào dài nhất thế giới?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Amazon",
    },
    {
      question: "Ai là người sáng tạo ra máy tính?",
      options: ["Steve Jobs", "Bill Gates", "Alan Turing", "Charles Babbage"],
      answer: "Charles Babbage",
    },
    {
      question: "Bảo tàng Louvre nằm ở thành phố nào?",
      options: ["New York", "London", "Berlin", "Paris"],
      answer: "Paris",
    },
    {
      question: "Nước nào là quốc gia đông dân nhất thế giới?",
      options: ["Trung Quốc", "Ấn Độ", "Mỹ", "Indonesia"],
      answer: "Trung Quốc",
    },
    {
      question: "Bộ phim Titanic do đạo diễn nào thực hiện?",
      options: [
        "Steven Spielberg",
        "James Cameron",
        "Christopher Nolan",
        "Quentin Tarantino",
      ],
      answer: "James Cameron",
    },
    {
      question:
        "Mặt Trời chiếu sáng cho bao nhiêu hành tinh trong Hệ Mặt Trời?",
      options: ["7", "8", "9", "10"],
      answer: "8",
    },
  ],
  group3: [
    {
      question: "Chọn những chất từ dưới đây có màu vàng.",
      options: ["Bananas", "Sunflowers", "Blueberries", "Grapes"],
      answer: ["Bananas", "Sunflowers"],
    },
    {
      question: "Chọn các ngày trong tuần.",
      options: ["Monday", "February", "August", "Saturday"],
      answer: ["Monday", "August", "Saturday"],
    },
    {
      question: "Chọn những thành phố lớn nhất thế giới.",
      options: ["Tokyo", "Sydney", "Los Angeles", "Berlin"],
      answer: ["Tokyo", "Los Angeles"],
    },
    {
      question: "Chọn những ngôn ngữ lập trình.",
      options: ["Java", "Banana", "Python", "Cucumber"],
      answer: ["Java", "Python"],
    },
    {
      question: "Chọn những loại hoa.",
      options: ["Tulip", "Pumpkin", "Lily", "Cactus"],
      answer: ["Tulip", "Lily"],
    },
    {
      question: "Chọn những môn học ở trường đại học.",
      options: [
        "Basket Weaving",
        "Quantum Physics",
        "Esperanto",
        "Underwater Basket Weaving",
      ],
      answer: ["Quantum Physics", "Underwater Basket Weaving"],
    },
    {
      question: "Chọn các loại động vật có vú.",
      options: ["Fish", "Kangaroo", "Snake", "Elephant"],
      answer: ["Kangaroo", "Elephant"],
    },
    {
      question: "Chọn các mùa trong năm.",
      options: ["Spring", "Moon", "Winter", "Sunshine"],
      answer: ["Spring", "Winter"],
    },
    {
      question: "Chọn các phương tiện giao thông.",
      options: ["Car", "Rainbow", "Train", "Cloud"],
      answer: ["Car", "Train"],
    },
    {
      question: "Chọn các loại thức ăn.",
      options: ["Pizza", "Star", "Chair", "Computer"],
      answer: ["Pizza"],
    },
  ],
  group4: [
    {
      question: "Mô tả quá trình trôi lệch (plate tectonics) trên trái đất.",
      answer: "",
    },
    {
      question: "Nêu ý nghĩa lịch sử của Cuộc Cách mạng Công nghiệp.",
      answer: "",
    },
    {
      question: "Hãy viết một đoạn văn ngắn về tác động của biến đổi khí hậu.",
      answer: "",
    },
    {
      question: "Nêu ý nghĩa của bản Tuyên ngôn Quốc tế Nhân quyền.",
      answer: "",
    },
    {
      question: "Mô tả cơ sở lý luận của lý thuyết tư duy của Jean Piaget.",
      answer: "",
    },
    {
      question:
        "Viết một bài văn ngắn về tác động của công nghệ trong cuộc sống hàng ngày.",
      answer: "",
    },
    {
      question:
        "Nêu ý nghĩa và tác động của Cuộc Cách mạng Công nghiệp đối với nền kinh tế và xã hội.",
      answer: "",
    },
    {
      question:
        "Hãy mô tả một sự kiện lịch sử quan trọng và ảnh hưởng của nó đến thế giới hiện đại.",
      answer: "",
    },
    {
      question:
        "Nêu ý nghĩa và tác động của cuộc Cách mạng Pháp đối với chính trị thế giới.",
      answer: "",
    },
    {
      question:
        "Viết một đoạn văn ngắn về tầm quan trọng của giáo dục trong xã hội.",
      answer: "",
    },
  ],
};

export default questions;

displayQuestions();

function displayQuestions() {}
