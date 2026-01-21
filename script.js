// ==========================================
// CẤU HÌNH CHUNG
// ==========================================
const AFFILIATE_ID = 'an_17345950423';
let currentIP = 'unknown';

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            if (data.ip) {
                currentIP = data.ip;
                document.getElementById('userIP').textContent = currentIP;
                document.getElementById('userIP').style.color = '#28a745';
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById('userIP').textContent = 'Error';
        });
});

// Helper: Hàm lấy link (Không thêm param theo yêu cầu mới)
function getAffiliateLink(baseUrl) {
    // Nếu biến SHOPEE_LINKS chưa được load
    if (typeof SHOPEE_LINKS === 'undefined') {
        console.error('Không tìm thấy file links.js');
        return baseUrl;
    }
    return baseUrl;
}

// ==========================================
// XỬ LÝ SỰ KIỆN CLICK NÚT
// ==========================================

// --- NÚT 1: LƯU VOUCHER MỚI NHẤT ---
document.getElementById('btnSaveVoucher').addEventListener('click', () => {
    // Sử dụng link từ file links.js
    const targetUrl = getAffiliateLink(SHOPEE_LINKS.voucher_new);
    window.open(targetUrl, '_blank');
});

// --- NÚT 2: LƯU VOUCHER SHOPEE VIP ---
document.getElementById('btnSaveVIP').addEventListener('click', () => {
    const targetUrl = getAffiliateLink(SHOPEE_LINKS.voucher_vip);
    window.open(targetUrl, '_blank');
});

// --- NÚT 1.5: VOUCHER KHÁCH HÀNG THÂN THIẾT ---
document.getElementById('btnSaveMember').addEventListener('click', () => {
    const targetUrl = getAffiliateLink(SHOPEE_LINKS.voucher_member);
    window.open(targetUrl, '_blank');
});

// --- NÚT 3: DEAL 1K ---
document.getElementById('btnDeal1k').addEventListener('click', () => {
    const targetUrl = getAffiliateLink(SHOPEE_LINKS.deal_1k);
    window.open(targetUrl, '_blank');
});

// --- NÚT 4: DEAL IPHONE/ANDROID ---
// --- NÚT 4: DEAL IPHONE/ANDROID ---
document.getElementById('btnDealIphone').addEventListener('click', () => {
    window.location.href = 'category.html?id=iphone';
});

// --- NÚT 5: DEAL IPAD ---
document.getElementById('btnDealIpad').addEventListener('click', () => {
    window.location.href = 'category.html?id=ipad';
});

// --- NÚT 7: DEAL ANDROID ---
document.getElementById('btnDealAndroid').addEventListener('click', () => {
    window.location.href = 'category.html?id=android';
});

// --- NÚT 8: DEAL TABLET ANDROID ---
document.getElementById('btnDealTabletAndroid').addEventListener('click', () => {
    window.location.href = 'category.html?id=tablet_android';
});

// --- NÚT 9: DEAL ANDROID VN ---
document.getElementById('btnDealAndroidVN').addEventListener('click', () => {
    window.location.href = 'category.html?id=android_vn';
});

// --- NÚT 6: TẠO LINK MUA HÀNG ---
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

    // 2. Link gốc (Không thêm tham số nữa)
    let finalLink = originalLink;

    // 3. Thông báo và mở link
    msgEl.textContent = '✅ Đang mở link...';
    msgEl.style.color = '#28a745';

    // Mở ngay lập tức
    window.open(finalLink, '_blank');
});
