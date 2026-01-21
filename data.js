const DEAL_DATA = {
    iphone: {
        title: "🍎 List iPhone/Apple",
        subtitle: "Các dòng thường đang về đúng giá đáy",
        items: [
            {
                title: "📌 iPhone 13",
                price: "Giá: 9tr8 - 10tr2",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/8pfPTWNtiO" },
                    { name: "Viettel", url: "https://s.shopee.vn/8fLzHDOX3N" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/9AIFs8Md2U" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/8zypfpNGNT" }
                ]
            },
            {
                title: "📌 iPhone 14",
                price: "Giá: 10tr8 - 11tr1",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/9Uv6GkLMMa" },
                    { name: "Viettel", url: "https://s.shopee.vn/9Kbg4RLzhZ" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/9pXwfMK5gg" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/9fEWT3Kj1f" }
                ]
            },
            {
                title: "📌 iPhone 15",
                price: "Giá: 13tr - 13tr3",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/AAAn3yIp0m" },
                    { name: "Viettel", url: "https://s.shopee.vn/9zrMrfJSLl" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/AUndSaHYKs" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/AKUDGHIBfr" }
                ]
            },
            {
                title: "📌 iPhone 15 Plus",
                price: "Giá: 16tr4 - 16tr7",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/6AeeIcY388" },
                    { name: "Viettel", url: "https://s.shopee.vn/60LE6JYgT7" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/6VHUhEWmSE" }
                ],
                note: "Shopdunk (hết hàng)"
            },
            {
                title: "📌 iPhone 16",
                price: "Giá: 16tr2 - 16tr6",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/5VOxVOaaTw" },
                    { name: "Viettel", url: "https://s.shopee.vn/5L5XJ5bDov" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/5q1nu0ZJo2" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/5fiNhhZx91" }
                ]
            },
            {
                title: "📌 iPhone 16 Plus",
                price: "Giá: 19tr8 - 20tr",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/6Ky4UvXPnD" },
                    { name: "Viettel", url: "https://s.shopee.vn/6puL5qVVmK" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/6fautXW97J" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/7AXBUSUF6Q" }
                ]
            },
            {
                title: "📌 iPhone 16 Pro",
                price: "Giá: 22tr4 - 22tr6",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/70DlI9UsRP" },
                    { name: "Viettel", url: "https://s.shopee.vn/7VA1t4SyQW" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/7KqbglTblV" }
                ],
                note: "Shopdunk (hết hàng)"
            },
            {
                title: "📌 iPhone 16 Pro Max 256GB",
                price: "Giá: 27tr9 - 28tr2",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/7pmsHgRhkc" },
                    { name: "Viettel", url: "https://s.shopee.vn/7fTS5NSL5b" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/2qOCKUkjtg" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/2g4m8BlNEf" }
                ]
            },
            {
                title: "📌 iPhone 16E 128GB",
                price: "Giá: 12tr7 - 13tr",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/3B12j6jTDm" }
                ]
            },
            {
                title: "📌 iPhone 17 (Dự Kiến/Order)",
                price: "Giá: 22tr - 35tr+",
                customContent: `
                    <p class="shop-name">iPhone 17 256GB (22-23tr)</p>
                    <a href="https://s.shopee.vn/8pfPThWipi" class="shop-link" target="_blank">- Viettel</a>
                    <a href="https://s.shopee.vn/8fLzHOXMAh" class="shop-link" target="_blank">- Shopdunk</a>
                    <a href="https://s.shopee.vn/9pXwfXSunw" class="shop-link" target="_blank">- Apple Flagship</a>

                    <p class="shop-name" style="margin-top:10px">iPhone 17 Pro 256GB (31-32tr)</p>
                    <a href="https://s.shopee.vn/9fEWTETY8v" class="shop-link" target="_blank">- Shopdunk</a>
                    <a href="https://s.shopee.vn/9Uv6GvUBTu" class="shop-link" target="_blank">- Apple Flagship</a>
                    <a href="https://s.shopee.vn/9Kbg4cUoot" class="shop-link" target="_blank">- Minh Tuan Mobile</a>

                    <p class="shop-name" style="margin-top:10px">iPhone 17 Pro 512GB</p>
                    <a href="https://s.shopee.vn/AUndSlQNS8" class="shop-link" target="_blank">- Apple Flagship</a>
                    <a href="https://s.shopee.vn/AKUDGSR0n7" class="shop-link" target="_blank">- Viettel</a>
                    <a href="https://s.shopee.vn/AAAn49Re86" class="shop-link" target="_blank">- Minh Tuan Mobile</a>

                    <p class="shop-name" style="margin-top:10px">iPhone 17 Pro Max 256GB/512GB</p>
                    <a href="https://s.shopee.vn/9zrMrqSHT5" class="shop-link" target="_blank">- Shopdunk</a>
                    <a href="https://s.shopee.vn/5q1nuBi8vI" class="shop-link" target="_blank">- Apple Flagship</a>
                    <a href="https://s.shopee.vn/5fiNhsimGH" class="shop-link" target="_blank">- Viettel</a>
                    <a href="https://s.shopee.vn/5VOxVZjPbG" class="shop-link" target="_blank">- Minh Tuan (512GB)</a>
                `
            },
            {
                title: "📌 iPhone Air",
                price: "Giá: ~25tr",
                links: [
                    { name: "Minh Tuấn", url: "https://s.shopee.vn/6Ky4V6gEuT" },
                    { name: "Apple", url: "https://s.shopee.vn/6AeeIngsFS" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/60LE6UhVaR" }
                ]
            },
            {
                header: "💻 MacBook & Khác"
            },
            {
                title: "📌 MacBook Air",
                customContent: `
                    <p class="shop-name">MacBook Air M4 (23-24tr)</p>
                    <a href="https://s.shopee.vn/7AXBUdd4Dg" class="shop-link" target="_blank">Link Shopee</a>
                    <p class="shop-name" style="margin-top:10px">MacBook Air M2 (17-18tr)</p>
                    <a href="https://s.shopee.vn/70DlIKdhYf" class="shop-link" target="_blank">Link Shopee</a>
                `
            },
            {
                title: "📌 Deal Khác (256GB - Ít hàng)",
                links: [
                    { name: "iPhone 15 256GB (16tr-16tr4)", url: "https://s.shopee.vn/1LZOYDngFu" },
                    { name: "iPhone 16 Plus 256GB (22tr-22tr3)", url: "https://s.shopee.vn/1VsokWn2ux" }
                ]
            },
            {
                title: "📌 Phụ Kiện Apple & iPad",
                links: [
                    { name: "👉 Airpod 4 (2tr6-2tr7)", url: "https://s.shopee.vn/2LRvk3jsE8" },
                    { name: "👉 Bút Pencil Pro (2tr6-2tr7)", url: "https://s.shopee.vn/2VlLwMjEtB" },
                    { name: "👉 Cường lực iPad", url: "https://s.shopee.vn/20p5LRl8u6" },
                    { name: "👉 Miếng dán Paperlike", url: "https://s.shopee.vn/2B8VXkkVZ9" },
                    { name: "👉 Ốp lưng iPad", url: "https://s.shopee.vn/30hcXHhKsK" },
                    { name: "👉 Bút Pencil 1 Real likenew", url: "https://s.shopee.vn/3B12jaghXN" },
                    { name: "👉 Bút Stylus 2", url: "https://s.shopee.vn/2g4m8fibYI" },
                    { name: "👉 Bút Goojodog", url: "https://s.shopee.vn/2qOCKyhyDL" },
                    { name: "👉 Phím ZAGG iPad A16", url: "https://s.shopee.vn/3fxJKVenWW" },
                    { name: "👉 Phím Goojodog", url: "https://s.shopee.vn/3qGjWoeABZ" },
                    { name: "👉 Phím Astromazing Magic", url: "https://s.shopee.vn/3LKSvtg4CU" }
                ]
            }
        ]
    },
    ipad: {
        title: "📱 List iPad",
        subtitle: "Tổng hợp deal iPad giá tốt",
        items: [
            {
                title: "📌 iPad A16",
                price: "Giá: 7tr - 7tr5",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/9AIFqG4B7w" },
                    { name: "Viettel", url: "https://s.shopee.vn/8zypdx4oSv" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/8pfPRe5Rnu" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/8fLzFL658t" }
                ]
            },
            {
                title: "📌 iPad Mini 7",
                price: "Giá: ~10.2",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/8V2Z326iTs" },
                    { name: "Viettel", url: "https://s.shopee.vn/8Kj8qj7Lor" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/8APieQ7z9q" }
                ],
                note: "Shopdunk (hết hàng)"
            },
            {
                title: "📌 iPad Air M3",
                price: "Giá: 11tr - 12tr (Canh Viettel)",
                links: [
                    { name: "Apple", url: "https://s.shopee.vn/806IS78cUp" },
                    { name: "Viettel", url: "https://s.shopee.vn/2LRvhhUBzk" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/2VlLu0TYen" },
                    { name: "Minh Tuấn Mobile", url: "https://s.shopee.vn/20p5J5VSfi" }
                ]
            },
            {
                title: "📌 iPad Pro M5 256GB",
                price: "Giá: 26tr9",
                links: [
                    { name: "Viettel", url: "https://s.shopee.vn/2B8VVOUpKl" }
                ]
            },
            {
                title: "📌 iPad A16 256GB",
                price: "Giá: 9tr5 - 9tr7",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/1gCEuTWjLg" }]
            },
            {
                title: "📌 iPad A16 128GB 5G",
                price: "Giá: 10tr8 - 11tr1",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/1qVf6mW60j" }]
            },
            {
                title: "📌 iPad Mini 7 5G",
                price: "Giá: 14tr4 - 14tr7",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/1LZOVrY01e" }]
            },
            {
                title: "📌 iPad Mini 7 256GB",
                price: "Giá: 13tr5 - 13tr8",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/1VsoiAXMgh" }]
            },
            {
                title: "📌 iPad Air M3 256GB",
                price: "Giá: 14tr - 14tr6",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/10wY7FZGhc" }]
            },
            {
                title: "📌 iPad Air M3 128GB 13inch",
                price: "Giá: 18tr",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/1BFyJYYdMf" }]
            }
        ]
    },
    android: {
        title: "🤖 List Android Nội Địa",
        subtitle: "List Android nội địa (cập nhật mã 20-25% tại đây)",
        items: [
            {
                title: "📌 Redmi Turbo 4 Pro New",
                price: "Giá: 5tr5 - 5tr7",
                links: [
                    { name: "Media 123", url: "https://s.shopee.vn/7AXL65Aecx" },
                    { name: "World Phone", url: "https://s.shopee.vn/8fM8sq4waG" },
                    { name: "Mi Media", url: "https://s.shopee.vn/8pfZ9vCbky" }
                ]
            },
            {
                title: "📌 iQoo Neo 10",
                price: "Giá: 6tr2 - 6tr5",
                links: [
                    { name: "Media 123", url: "https://s.shopee.vn/8zyzHS3fuM" },
                    { name: "World Phone", url: "https://s.shopee.vn/9AIPTl32ZP" },
                    { name: "Mi Media", url: "https://s.shopee.vn/806S5c7TwC" }
                ]
            },
            {
                title: "📌 Oneplus Ace5",
                price: "Giá: 6tr5 - 6tr7",
                links: [
                    { name: "Media 123", url: "https://s.shopee.vn/8APsHv6qbF" },
                    { name: "World Phone", url: "https://s.shopee.vn/8KjIUE6DGI" },
                    { name: "Mi Media", url: "https://s.shopee.vn/8V2igX5ZvL" }
                ]
            },
            { title: "📌 Oneplus Ace 6T", price: "Giá: 8tr1 - 8tr5", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9zrWTHzrse?lp=aff" }] },
            { title: "📌 Oneplus Ace 6", price: "Giá: 8tr5 - 9tr", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/AAAwfazEXh?lp=aff" }] },
            {
                title: "📌 iQoo Z10 Turbo Pro",
                price: "Giá: 5tr8 - 6tr2",
                links: [
                    { name: "Media 123", url: "https://s.shopee.vn/AKUMrtybCk" },
                    { name: "World Phone", url: "https://s.shopee.vn/AUnn4Cxxrn" },
                    { name: "Mi Media", url: "https://s.shopee.vn/9Kbpg42PEa" }
                ]
            },
            {
                title: "📌 iQoo Z10 Turbo Plus",
                price: "Giá: 6tr6 - 7tr2",
                links: [
                    { name: "Media 123", url: "https://s.shopee.vn/9UvFsN1ltd" },
                    { name: "World Phone", url: "https://s.shopee.vn/9fEg4g18Yg" },
                    { name: "Mi Media", url: "https://s.shopee.vn/9pY6Gz0VDj" }
                ]
            },
            {
                title: "📌 Oppo K13 Turbo Pro",
                price: "Giá: 5tr6 - 6tr2",
                links: [
                    { name: "Media 123", url: "https://s.shopee.vn/gJrM8ZOoy" },
                    { name: "World Phone", url: "https://s.shopee.vn/qdHYRYlU1" },
                    { name: "Mi Media", url: "https://s.shopee.vn/10whkkY894" }
                ]
            },
            { title: "📌 Redmi K90", price: "Giá: 8tr5 - 9tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/1BG7x3XUo7?lp=aff" }] },
            { title: "📌 Redmi K90 Promax", price: "Giá: 13tr8 - 14tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8zyzLdmVOs?lp=aff" }] },
            { title: "📌 iQoo Neo 10 Pro Plus", price: "Giá: 8tr6 - 8tr8", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9AIPXwls3v?lp=aff" }] },
            { title: "📌 iQoo Neo 11", price: "Giá: 8tr6 - 9tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/806S9nqJQi?lp=aff" }] },
            { title: "📌 iQOO 13", price: "Giá: 11tr8 - 12tr5", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8APsM6pg5l?lp=aff" }] },
            { title: "📌 iQOO 15", price: "Giá: 13tr - 14tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8KjIYPp2ko?lp=aff" }] },
            { title: "📌 Oneplus 13T", price: "Giá: 9tr8 - 10tr4", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8V2ikioPPr" }] },
            {
                title: "📌 Oneplus 13",
                price: "Giá: 11tr5 - 12tr2",
                links: [
                    { name: "Link Shopee", url: "https://s.shopee.vn/9zrWXTihNA" },
                    { name: "Link Shopee 2", url: "https://s.shopee.vn/AAAwjmi42D?lp=aff" }
                ]
            },
            {
                title: "📌 Oneplus 15",
                price: "Giá: 13tr8 - 14tr5",
                links: [
                    { name: "Shop 1", url: "https://s.shopee.vn/AKUMw5hQhG?lp=aff" },
                    { name: "Shop 2", url: "https://s.shopee.vn/AKUMw5hQhG?lp=aff" },
                    { name: "Shop 3", url: "https://s.shopee.vn/AUnn8OgnMJ?lp=aff" }
                ]
            },
            { title: "📌 Vivo X200 Pro Mini", price: "Giá: 11tr6 - 12tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9KbpkFlEj6" }] },
            { title: "📌 Vivo X200 Pro", price: "Giá: 13tr6 - 14tr5", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9KbpkFlEj6" }] },
            { title: "📌 Vivo X300", price: "Giá: 14tr - 15tr", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9UvFwYkbO9?lp=aff" }] },
            {
                title: "📌 Vivo X300 Pro",
                price: "Giá: 17tr - 18tr",
                links: [
                    { name: "Link Shopee 1", url: "https://s.shopee.vn/9fEg8rjy3C?lp=aff" },
                    { name: "Link Shopee 2", url: "https://s.shopee.vn/9pY6LAjKiF?lp=aff" }
                ]
            },
            {
                title: "📌 Oppo Find X9 ND",
                price: "Giá: 12tr8 - 13tr2",
                note: "(Likenew có bảo hành toàn cầu)",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/gJrQKIEJU?lp=aff" }]
            },
            {
                title: "📌 Oppo Find X9 Pro ND",
                price: "Giá: 18tr - 19tr",
                note: "(Likenew có bảo hành toàn cầu)",
                links: [{ name: "Link Shopee", url: "https://s.shopee.vn/gJrQKIEJU?lp=aff" }]
            },
            { title: "📌 Honor Magic 8 Pro", price: "Giá: 19tr5 - 19tr9", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/qdHcdHayX?lp=aff" }] }
        ]
    },
    tablet_android: {
        title: "📱 List Tablet Android",
        subtitle: "List tablet Android bảo hành 12-18 tháng (cập nhật mã 20-25% tại đây)",
        items: [
            { title: "📌 Samsung Tab A9 Plus", price: "Giá: 2tr8 - 3tr", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/806SAOFmRl?lp=aff" }] },
            { title: "📌 Redmi Pad SE", price: "Giá: 2tr - 2tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8V2ilJDsQs?lp=aff" }] },
            { title: "📌 Redmi Pad 2", price: "Giá: 3tr5 - 3tr7", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8KjIZ0EVlr?lp=aff" }] },
            { title: "📌 Redmi Pad Pro", price: "Giá: 4tr7 - 4tr9", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8pfZ9vCbky?lp=aff" }] },
            { title: "📌 Redmi Pad 2 Pro", price: "Giá: 5tr5 - 5tr7", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8fM8xcDF5x?lp=aff" }] },
            { title: "📌 Redmi Pad 2 Pro 5G", price: "Giá: 6tr5 - 6tr7", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9AIPYXBL54?lp=aff" }] },
            { title: "📌 Poco Pad M1", price: "Giá: 5tr3 - 5tr5", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8zyzMEByQ3?lp=aff" }] },
            { title: "📌 Xiaomi Pad 7 128gb", price: "Giá: 6tr4 - 6tr9", links: [{ name: "Xiami Mall", url: "https://s.shopee.vn/9UvFx9A4PA" }] },
            { title: "📌 Xiami Pad 7 Pro 256gb", price: "Giá: 9tr2 - 9tr8", links: [{ name: "Xiaomi Mall", url: "https://s.shopee.vn/9KbpkqAhk9?lp=aff" }] },
            { title: "📌 Xiaomi Pad Mini", price: "Giá: 12tr - 12tr4", links: [{ name: "Xiaomi Mall", url: "https://s.shopee.vn/9pY6Ll8njG?lp=aff" }] },
            { title: "📌 Huawei Matepad 11.5 Papermatte 2025", price: "Giá: 7tr2 - 7tr6", links: [{ name: "Huawei Mall", url: "https://s.shopee.vn/9fEg9S9R4F?lp=aff" }] },
            { title: "📌 Huawei Mate 12X", price: "Giá: 11tr - 12tr", links: [{ name: "Huawei Mall", url: "https://s.shopee.vn/AAAwkN7X3M?lp=aff" }] },
            {
                title: "📌 Samsung Tab S10 Fe",
                price: "Giá: 6tr6 - 7tr",
                links: [
                    { name: "SamCenter", url: "https://s.shopee.vn/9zrWY48AOL?lp=aff" },
                    { name: "SZone", url: "https://s.shopee.vn/AUnn8z6GNS?lp=aff" },
                    { name: "Cửa hàng SPS", url: "https://s.shopee.vn/AKUMwg6tiR?lp=aff" }
                ]
            },
            { title: "📌 Samsung Tab S10 Lite", price: "Giá: 5tr - 5tr4", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/5VP7BnPIWW?lp=aff" }] },
            {
                title: "📌 Samsung Tab S11 128gb",
                price: "Giá: 13tr - 13tr6",
                links: [
                    { name: "Samcenter", url: "https://s.shopee.vn/5L5gzUPvrV?lp=aff" },
                    { name: "S Zone", url: "https://s.shopee.vn/5q1xaPO1qc?lp=aff" },
                    { name: "FPT Shop", url: "https://s.shopee.vn/5fiXO6OfBb?lp=aff" },
                    { name: "Galaxy Store", url: "https://s.shopee.vn/6Aenz1MlAi?lp=aff" },
                    { name: "Galaxy Center", url: "https://s.shopee.vn/60LNmiNOVh?lp=aff" },
                    { name: "Di Động Việt", url: "https://s.shopee.vn/6VHeNdLUUo?lp=aff" }
                ]
            },
            { title: "📌 Huawei Matepad 11.5", price: "Giá: 5tr4 - 5tr6", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/6KyEBKM7pn?lp=aff" }] },
            { title: "📌 Huawei Matepad SE", price: "Giá: 3tr5 - 3tr7", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/6puUmFKDou?lp=aff" }] }
        ]
    },
    android_vn: {
        title: "🇻🇳 List Android Chính Hãng VN",
        subtitle: "List Android VN bảo hành 1-2 năm (cập nhật mã 20-25% tại đây)",
        items: [
            {
                title: "📌 Samsung A16 128gb",
                price: "Giá: 2tr3 - 2tr7",
                links: [
                    { name: "Shop 1", url: "https://s.shopee.vn/50SqaQyVgQ?lp=aff" },
                    { name: "Shop 2", url: "https://s.shopee.vn/5AmGmjxsLT?lp=aff" },
                    { name: "Shop 3", url: "https://s.shopee.vn/40aJOb2JiG?lp=aff" }
                ]
            },
            {
                title: "📌 Redmi Note 14 128gb",
                price: "Giá: 3tr - 3tr4",
                links: [
                    { name: "Shop 1", url: "https://s.shopee.vn/4Atjau1gNJ?lp=aff" },
                    { name: "Shop 2", url: "https://s.shopee.vn/4LD9nD132M?lp=aff" },
                    { name: "Shop 3", url: "https://s.shopee.vn/4VWZzW0PhP?lp=aff" },
                    { name: "Shop 4", url: "https://s.shopee.vn/3LKcbN4r4C?lp=aff" }
                ]
            },
            { title: "📌 Redmi Note 15 128gb", price: "Giá: 4tr - 4tr2", links: [{ name: "Shop 1", url: "https://s.shopee.vn/3Ve2ng4DjF?lp=aff" }] },
            { title: "📌 Redmi Note 15 5G 128gb", price: "Giá: 5tr2 - 5tr4", links: [{ name: "Shop 1", url: "https://s.shopee.vn/3fxSzz3aOI?lp=aff" }] },
            { title: "📌 Redmi Note 15 Pro 256gb", price: "Giá: 7tr6 - 8tr", links: [{ name: "Shop 1", url: "https://s.shopee.vn/3qGtCI2x3L?lp=aff" }] },
            { title: "📌 Poco X7 256gb", price: "Giá: 5tr - 5tr3", links: [{ name: "Xiaomi mall", url: "https://s.shopee.vn/2g4vo97OQ8?lp=aff" }] },
            { title: "📌 Poco X7 Pro 256gb", price: "Giá: 6tr - 6tr2", links: [{ name: "Xiaomi mall", url: "https://s.shopee.vn/2qOM0S6l5B?lp=aff" }] },
            {
                title: "📌 Samsung A36 128gb",
                price: "Giá: 5tr - 5tr2",
                links: [
                    { name: "Samsung Mall", url: "https://s.shopee.vn/30hmCl67kE?lp=aff" },
                    { name: "Cửa hàng SPS", url: "https://s.shopee.vn/3B1CP45UPH?lp=aff" },
                    { name: "Tablet Plaza", url: "https://s.shopee.vn/20pF0v9vm4?lp=aff" },
                    { name: "S Zone", url: "https://s.shopee.vn/2B8fDE9IR7?lp=aff" },
                    { name: "Long Hưng", url: "https://s.shopee.vn/2LS5PX8f6A?lp=aff" },
                    { name: "FPT Shop", url: "https://s.shopee.vn/2VlVbq81lD?lp=aff" }
                ]
            },
            {
                title: "📌 Samsung A56 128gb",
                price: "Giá: 5tr8 - 6tr2",
                links: [
                    { name: "Tablet Palaza", url: "https://s.shopee.vn/3qGtCRTdIJ" },
                    { name: "Sam Center", url: "https://s.shopee.vn/2g4voIY4f6" },
                    { name: "Cửa hàng SPS", url: "https://s.shopee.vn/2qOM0bXRK9" },
                    { name: "S Zone Store", url: "https://s.shopee.vn/30hmCuWnzC" },
                    { name: "Happy Phone", url: "https://s.shopee.vn/3B1CPDWAeF?lp=aff" },
                    { name: "Long Hưng", url: "https://s.shopee.vn/4fq0ByQSbY?lp=aff" },
                    { name: "FPT Shop", url: "https://s.shopee.vn/4q9QOHPpGb?lp=aff" }
                ]
            },
            { title: "📌 Honor X9D 256gb", price: "Giá: 7tr - 7tr5", links: [{ name: "Honor mall", url: "https://s.shopee.vn/50SqaaPBve?lp=aff" }] },
            {
                title: "📌 Samsung S25 FE 128gb",
                price: "Giá: 10tr5 - 11tr2",
                links: [
                    { name: "Samcenter", url: "https://s.shopee.vn/5AmGmtOYah?lp=aff" },
                    { name: "S Zone Store", url: "https://s.shopee.vn/40aJOkSzxU?lp=aff" }
                ]
            },
            {
                title: "📌 Samsung S25 256gb",
                price: "Giá: 13tr - 13tr8",
                links: [
                    { name: "Samvina mall", url: "https://s.shopee.vn/4Atjb3SMcX?lp=aff" },
                    { name: "Samsung mall", url: "https://s.shopee.vn/4LD9nMRjHa?lp=aff" },
                    { name: "Sam Center", url: "https://s.shopee.vn/4VWZzfR5wd?lp=aff" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/60LNmQLNtw?lp=aff" }
                ]
            },
            {
                title: "📌 Samsung S25 Plus 256gb",
                price: "Giá: 16tr3 - 17tr",
                links: [
                    { name: "S Zone Store", url: "https://s.shopee.vn/6AenyjKkYz?lp=aff" },
                    { name: "Galaxy Store", url: "https://s.shopee.vn/6KyEB2K7E2?lp=aff" },
                    { name: "Galaxy Center", url: "https://s.shopee.vn/6VHeNLJTt5?lp=aff" },
                    { name: "Tech Zone", url: "https://s.shopee.vn/5L5gzCNvFs?lp=aff" },
                    { name: "Galaxy mall", url: "https://s.shopee.vn/5VP7BVNHuv?lp=aff" }
                ]
            },
            {
                title: "📌 Samsung S24 Ultra 256gb",
                price: "Giá: 17tr8 - 18tr6",
                links: [
                    { name: "Clickbuy", url: "https://s.shopee.vn/5fiXNoMeZy?lp=aff" },
                    { name: "Sam Media", url: "https://s.shopee.vn/5q1xa7M1F1?lp=aff" }
                ]
            },
            {
                title: "📌 Samsung S25 Ultra 256gb",
                price: "Giá: 19tr6 - 20tr6",
                links: [
                    { name: "Cửa hàng SPS", url: "https://s.shopee.vn/7KqlMsGJCK" },
                    { name: "S Zone Store", url: "https://s.shopee.vn/7VABZBFfrN" },
                    { name: "Sam Center", url: "https://s.shopee.vn/7fTblUF2WQ" },
                    { name: "Galaxy Center", url: "https://s.shopee.vn/7pn1xnEPBT?lp=aff" },
                    { name: "SamStudio", url: "https://s.shopee.vn/6fb4ZeIqYG?lp=aff" },
                    { name: "Shopdunk", url: "https://s.shopee.vn/6puUlxIDDJ?lp=aff" },
                    { name: "Tablet Plaza", url: "https://s.shopee.vn/70DuyGHZsM?lp=aff" },
                    { name: "Happy Phone", url: "https://s.shopee.vn/7AXLAZGwXP?lp=aff" },
                    { name: "Galaxy Zone", url: "https://s.shopee.vn/8fM8xKBEUi?lp=aff" },
                    { name: "Galaxy Store", url: "https://s.shopee.vn/8pfZ9dAb9l?lp=aff" },
                    { name: "SamZone VN", url: "https://s.shopee.vn/8zyzLw9xoo?lp=aff" },
                    { name: "FPT Shop (New chưa active nhưng cao hơn)", url: "https://s.shopee.vn/9AIPYF9KTr?lp=aff" }
                ]
            },
            {
                title: "📌 S25 Ultra 512gb",
                price: "Giá: ~26tr",
                note: "(Chỉ bên này còn hàng)",
                links: [{ name: "Samsung Mall", url: "https://s.shopee.vn/9fEg9J8ffa?lp=aff" }]
            },
            { title: "📌 Honor 400 256gb", price: "Giá: 9tr - 9tr2", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/9pY6Lc82Kd" }] },
            { title: "📌 Honor 400 Pro 512gb", price: "Giá: 12tr2 - 12tr8", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/8fM8xTCThQ" }] },
            { title: "📌 Poco F8 Pro", price: "Giá: 12tr - 12tr6", links: [{ name: "Xiaomi Mall", url: "https://s.shopee.vn/8pfZ9mBqMT?lp=aff" }] },
            {
                title: "📌 Xiaomi Mi 15 256gb",
                price: "Giá: 13tr5 - 14tr2",
                links: [
                    { name: "Xiaomi Flagship", url: "https://s.shopee.vn/8zyzM5BD1W?lp=aff" },
                    { name: "Xiaomi Offical", url: "https://s.shopee.vn/9AIPYOAZgZ?lp=aff" }
                ]
            },
            {
                title: "📌 Xiaomi Mi 15T 512gb",
                price: "Giá: 8tr9 - 9tr2",
                links: [
                    { name: "Happy Phone", url: "https://s.shopee.vn/806SAFF13M?lp=aff" },
                    { name: "Clickbuy", url: "https://s.shopee.vn/8APsMYENiP?lp=aff" },
                    { name: "Hồng Hạnh Mobile", url: "https://s.shopee.vn/8KjIYrDkNS?lp=aff" },
                    { name: "Trần Ngọc Mobile", url: "https://s.shopee.vn/8V2ilAD72V?lp=aff" },
                    { name: "FPT Shop", url: "https://s.shopee.vn/7KqlN1HYPI?lp=aff" },
                    { name: "Dienthoaigiakho", url: "https://s.shopee.vn/7VABZKGv4L?lp=aff" }
                ]
            },
            {
                title: "📌 Xiaomi Mi 15T Pro 512gb",
                price: "Giá: 11tr9 - 12tr4",
                links: [
                    { name: "Hồng Hạnh Mobile", url: "https://s.shopee.vn/7fTbldGHjO" },
                    { name: "Trần Ngọc Mobile", url: "https://s.shopee.vn/7pn1xwFeOR" },
                    { name: "Clickbuy", url: "https://s.shopee.vn/6fb4ZnK5lE" },
                    { name: "Happy Phone", url: "https://s.shopee.vn/6puUm6JSQH?lp=aff" },
                    { name: "FPT Shop (cao hơn)", url: "https://s.shopee.vn/70DuyPIp5K?lp=aff" }
                ]
            },
            { title: "📌 Xiaomi Mi 15 Ultra 512gb", price: "Giá: 24tr490", links: [{ name: "Link Shopee", url: "https://s.shopee.vn/7AXLAiIBkN?lp=aff" }] },
            {
                title: "📌 Oppo Find X9 256gb",
                price: "Giá: 14tr890 - 16tr2",
                links: [
                    { name: "Viphone", url: "https://s.shopee.vn/60LNmZMd7A?lp=aff" },
                    { name: "Happy Phone", url: "https://s.shopee.vn/6AenysLzmD?lp=aff" },
                    { name: "Media 123", url: "https://s.shopee.vn/6KyEBBLMRG?lp=aff" },
                    { name: "FPT Shop", url: "https://s.shopee.vn/6VHeNUKj6J?lp=aff" },
                    { name: "Didongso1", url: "https://s.shopee.vn/5L5gzLPAT6?lp=aff" },
                    { name: "Dienthoaigiakho", url: "https://s.shopee.vn/5VP7BeOX89?lp=aff" }
                ]
            }
        ]
    }
};
