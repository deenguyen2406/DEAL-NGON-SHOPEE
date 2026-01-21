# HƯỚNG DẪN ĐƯA WEBSITE LÊN MẠNG (GITHUB PAGES)

Chào bạn, đây là hướng dẫn chi tiết từng bước để bạn đưa website này lên mạng hoàn toàn miễn phí bằng GitHub.

---

## BƯỚC 1: Đăng ký tài khoản GitHub (nếu chưa có)
1. Truy cập [github.com](https://github.com).
2. Bấm **Sign Up** và làm theo hướng dẫn để tạo tài khoản.

## BƯỚC 2: Tạo Kho Chứa (Repository) Mới
1. Sau khi đăng nhập, nhìn góc trên bên phải, bấm vào dấu **+** và chọn **New repository**.
2. Tại ô **Repository name**: Đặt tên bất kỳ (ví dụ: `shopee-tool`).
3. Chọn **Public**.
4. Các phần khác để mặc định.
5. Bấm nút xanh **Create repository** ở cuối trang.

## BƯỚC 3: Upload Code Lên GitHub
1. Ở trang repository vừa tạo, tìm chữ **uploading an existing file**.
2. Kéo thả 7 file bạn đang có (`index.html`, `style.css`, `script.js`, `deals.html`, `deals_ipad.html`, `shopee-icon.png`, `links.js`) vào ô upload.
3. Chờ các file tải lên xong.
4. Bấm nút xanh **Commit changes** ở phía dưới.

---
## TÙY CHỈNH LINK (MỚI)
- Nếu muốn đổi link Shopee, bạn chỉ cần mở file `links.js` bằng Notepad.
- Sửa đường link trong đó -> Lưu lại -> Upload đè lên file cũ trên GitHub.
- Code sẽ tự động gắn Affiliate ID và IP vào, bạn không cần lo phần đó.

## BƯỚC 4: Bật GitHub Pages (Để website chạy được)
1. Trên thanh menu của repository, bấm vào **Settings** (bánh răng).
2. Ở cột bên trái, tìm và bấm vào mục **Pages**.
3. Tại phần **Build and deployment**:
   - Mục **Source**: Chọn `Deploy from a branch`.
   - Mục **Branch**: Chọn `main` (hoặc `master`) và folder là `/ (root)`.
4. Bấm **Save**.

⏳ **Chờ khoảng 1-2 phút**. Hãy tải lại trang (F5). Bạn sẽ thấy một đường link xuất hiện ở đầu trang (ví dụ: `https://ten-ban.github.io/shopee-tool/`).

👉 **Đó chính là link website của bạn!**

---

## CÁCH SỬ DỤNG & TEST
1. Truy cập vào link website vừa tạo.
2. Kiểm tra phần cuối trang (Footer): Xem dòng "IP của bạn" đã hiện số IP chưa (ví dụ: `113.23.xx.xx`). Nếu hiện, tức là web hoạt động tốt.
3. Thử bấm nút **"💾 Lưu Voucher Mới Nhất"** -> Xem có mở tab mới về Shopee không.
4. Dán thử một link Shopee vào ô và bấm **"🛒 Tạo Link Mua Hàng"** -> Kiểm tra tab mới mở ra có link chứa đuôi `mmp_pid=...` hay không.

## LƯU Ý
- Nếu bạn sửa code trên máy tính, hãy nhớ upload lại file lên GitHub để cập nhật.
- Website này chạy hoàn toàn trên trình duyệt của bạn, không lưu trữ thông tin gì cả (An toàn).
