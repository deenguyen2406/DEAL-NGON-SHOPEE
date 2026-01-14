// ==========================================
// CẤU HÌNH CHUNG
// ==========================================
const AFFILIATE_ID = 'an_17345950423'; // ID Affiliate cố định
let currentIP = 'unknown'; // Biến lưu IP người dùng

// ==========================================
// 1. LẤY IP NGƯỜI DÙNG KHI TRANG WEB TẢI XONG
// ==========================================
// Chúng ta lấy IP ngay từ đầu để sẵn sàng khi người dùng click
document.addEventListener('DOMContentLoaded', () => {
    fetchUserIP();
});

async function fetchUserIP() {
    const statusEl = document.getElementById('userIP');
    try {
        // Gọi API miễn phí ipify để lấy IP
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();

        if (data.ip) {
            currentIP = data.ip;
            statusEl.textContent = currentIP; // Hiển thị IP lên footer
            statusEl.style.color = '#28a745'; // Màu xanh lá báo thành công
            console.log('Đã lấy được IP:', currentIP);
        }
    } catch (error) {
        console.error('Lỗi lấy IP:', error);
        statusEl.textContent = 'Không lấy được IP';
        statusEl.style.color = '#dc3545'; // Màu đỏ báo lỗi
    }
}

// ==========================================
// 2. XỬ LÝ SỰ KIỆN CLICK NÚT
// ==========================================

// --- NÚT 1: LƯU VOUCHER MỚI NHẤT ---
document.getElementById('btnSaveVoucher').addEventListener('click', () => {
    // Tạo link đích
    // Cấu trúc: https://shopee.vn/m/ma-giam-gia?mmp_pid=ID&utm_content=IP
    const targetUrl = `https://shopee.vn/m/ma-giam-gia?mmp_pid=${AFFILIATE_ID}&utm_content=${currentIP}`;

    // Mở tab mới
    window.open(targetUrl, '_blank');
});

// --- NÚT 2: LƯU VOUCHER SHOPEE VIP ---
document.getElementById('btnSaveVIP').addEventListener('click', () => {
    // Tạo link đích
    // Cấu trúc: https://shopee.vn/m/goi-ShopeeVIP?mmp_pid=ID
    const targetUrl = `https://shopee.vn/m/goi-ShopeeVIP?mmp_pid=${AFFILIATE_ID}`;

    // Mở tab mới
    window.open(targetUrl, '_blank');
});

// --- NÚT 3: DEAL 1K ---
document.getElementById('btnDeal1k').addEventListener('click', () => {
    // URL cố định cho Deal 1k
    const targetUrl = `https://shopee.vn/m/shopee-sieu-re?mmp_pid=${AFFILIATE_ID}&uls_trackid=54m4cv8v01po&utm_campaign=id_m58VJTuonR&utm_content=deal1k----&utm_medium=affiliates&utm_source=an_17345950423&utm_term=ea73uzxgo7xc`;

    // Mở tab mới
    window.open(targetUrl, '_blank');
});

// --- NÚT 4: DEAL IPHONE/ANDROID ---
document.getElementById('btnDealIphone').addEventListener('click', () => {
    // Mở trang deals.html (Cùng tab)
    window.location.href = 'deals.html';
});

// --- NÚT 5: DEAL IPAD ---
document.getElementById('btnDealIpad').addEventListener('click', () => {
    // Mở trang deals_ipad.html (Cùng tab)
    window.location.href = 'deals_ipad.html';
});

// --- NÚT 3: TẠO LINK MUA HÀNG ---
document.getElementById('btnConvert').addEventListener('click', () => {
    const inputEl = document.getElementById('originalLink');
    const msgEl = document.getElementById('statusMessage');
    const originalLink = inputEl.value.trim();

    // 1. Kiểm tra nếu link trống
    if (!originalLink) {
        msgEl.textContent = '❌ Vui lòng dán link Shopee vào ô trống!';
        msgEl.style.color = '#dc3545';
        return;
    }

    // 2. Xử lý link (Thêm tham số affiliate)
    let finalLink = originalLink;

    // Kiểm tra xem link gốc đã có dấu ? chưa để dùng & hay ?
    if (originalLink.includes('?')) {
        // Đã có tham số khác -> nối tiếp bằng &
        finalLink += `&mmp_pid=${AFFILIATE_ID}&utm_content=${currentIP}`;
    } else {
        // Chưa có tham số nào -> bắt đầu bằng ?
        finalLink += `?mmp_pid=${AFFILIATE_ID}&utm_content=${currentIP}`;
    }

    // 3. Thông báo và mở link
    msgEl.textContent = '✅ Đang mở link...';
    msgEl.style.color = '#28a745';

    console.log('Link gốc:', originalLink);
    console.log('Link sau chuyển đổi:', finalLink);

    // Mở ngay lập tức
    window.open(finalLink, '_blank');
});
