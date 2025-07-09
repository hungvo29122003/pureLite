# pureLite

Trang web thương mại điện tử chuyên bán bia rượu, được xây dựng với các công nghệ web hiện đại, hỗ trợ trải nghiệm người dùng thân thiện và quản lý sản phẩm hiệu quả.

---

## 🚀 Tính năng chính

- Hiển thị danh mục sản phẩm bia, rượu đa dạng.
- Quản lý giỏ hàng, đặt hàng trực tuyến.
- Giao diện responsive, thân thiện với thiết bị di động và desktop.
- Tích hợp backend với microservices để quản lý dữ liệu hiệu quả.
- Hỗ trợ đăng nhập, đăng ký người dùng (nếu có triển khai).
- Quản lý người dùng và đơn hàng.

---

## 💻 Công nghệ sử dụng

- HTML, CSS, JavaScript (Front-end)
- Java (Back-end, Spring Boot)
- Microservices kiến trúc cho backend
- MySQL làm hệ quản trị cơ sở dữ liệu

---

## 📂 Cấu trúc dự án

- `microservice/` - Mã nguồn microservices backend.
- `userPage/` - Giao diện người dùng frontend.
- `ck_springboot.sql` - File cấu trúc cơ sở dữ liệu MySQL.
- Các file cấu hình và tài nguyên khác.

---

## ⚙️ Hướng dẫn cài đặt và chạy dự án

### Yêu cầu

- Java JDK 11 trở lên
- Maven hoặc Gradle (tùy theo cấu hình dự án)
- MySQL Server
- Node.js (nếu frontend dùng build tool)

### Các bước cài đặt

1. Clone repository:

git clone https://github.com/hungvo29122003/pureLite.git  
cd pureLite  


2. Thiết lập cơ sở dữ liệu MySQL:

- Tạo database mới.
- Import file `ck_springboot.sql` để tạo bảng và dữ liệu mẫu.

3. Cấu hình kết nối database trong các service backend (thường trong file `application.properties` hoặc `application.yml`).

4. Build và chạy backend microservices:

- Vào thư mục từng microservice, chạy lệnh build và start (ví dụ với Maven: `mvn clean install` và `mvn spring-boot:run`).

5. Chạy frontend userPage:

- Vào thư mục `userPage`, nếu có file `package.json`, chạy `npm install` và `npm start` hoặc build tùy theo hướng dẫn.

6. Mở trình duyệt và truy cập địa chỉ frontend (thường là `http://localhost:3000` hoặc cổng được cấu hình).

---

## 🤝 Đóng góp

Mọi đóng góp, góp ý hoặc báo lỗi, vui lòng tạo Pull Request hoặc Issue trên GitHub.

---

## 📞 Liên hệ

- **Võ Phi Hùng**  
- Email: acczinsv5@gmail.com  
- GitHub: [hungvo29122003](https://github.com/hungvo29122003)  
- Facebook: [vo.phi.hung.256500](https://www.facebook.com/vo.phi.hung.256500)

---

_Cảm ơn bạn đã quan tâm đến dự án pureLite!_
