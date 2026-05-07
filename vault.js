// ECCENCE SHARED LOGIC & INVENTORY
const inventory = [
    { id: 1, name: "Acqua di Giò Profondo", gender: "Men", file: "essesce products/Armani Beauty - Acqua di Giò Profondo - Eau de Parfum - Cologne for Men.png", price: 850, old: 1200, notes: ["Sea Notes", "Bergamot", "Fresh", "Executive"], stock: 3 },
    { id: 2, name: "Azzaro Most Wanted", gender: "Men", file: "essesce products/Azzaro The Most Wanted Eau de Parfum Intense - Woody & Seductive Mens Cologne - Fougère, Ambery & Spicy Fragrance for Date Night - Lasting Wear - Luxury Perfumes for Men.png", price: 920, old: 1300, notes: ["Cardamom", "Toffee", "Sweet", "Dark"], stock: 5 },
    { id: 3, name: "Xerjoff Erba Pura", gender: "Unisex", file: "essesce products/Erba Pura Eau de Parfum.png", price: 1050, old: 1500, notes: ["Orange", "Fruits", "Fresh"], stock: 2 },
    { id: 4, name: "JPG Le Male", gender: "Men", file: "essesce products/Jean Paul Gaultier.png", price: 780, old: 1100, notes: ["Mint", "Vanilla", "Fresh"], stock: 8 },
    { id: 5, name: "JPG Scandal", gender: "Women", file: "essesce products/Jean Paul Gaultier (1).png", price: 890, old: 1250, notes: ["Honey", "Blood Orange", "Sweet"], stock: 4 },
    { id: 6, name: "Kayali Vanilla 28", gender: "Women", file: "essesce products/Kayali - Vanilla 28.png", price: 950, old: 1350, notes: ["Vanilla Orchid", "Brown Sugar", "Sweet"], stock: 6 },
    { id: 7, name: "Lattafa Art of Universe", gender: "Unisex", file: "essesce products/Lattafa Art of Universe for Unisex Eau de Parfum Spray, 3_4 Ounce _ 100 ml.png", price: 720, old: 1000, notes: ["Spicy", "Amber", "Dark"], stock: 12 },
    { id: 8, name: "Lattafa Khamrah", gender: "Unisex", file: "essesce products/Lattafa Khamrah - Vanilla, Warm Spicy, Amber, Cinnamon - Eau de Parfum Long-Lasting Fragrance for Unisex, 3_40 Ounce _ 100 ml.png", price: 810, old: 1150, notes: ["Cinnamon", "Dates", "Sweet"], stock: 10 },
    { id: 9, name: "LV Symphony", gender: "Women", file: "essesce products/Products by Louis Vuitton_ Symphony.png", price: 1100, old: 1600, notes: ["Ginger", "Grapefruit", "Fresh", "Executive"], stock: 1 },
    { id: 10, name: "Valentino Donna", gender: "Women", file: "essesce products/Valentino Donna Born in Roma Intense Eau de Parfum _ Dillard's.png", price: 980, old: 1400, notes: ["Black Currant", "Vanilla", "Sweet"], stock: 4 },
    { id: 11, name: "Valentino Uomo", gender: "Men", file: "essesce products/Valentino Uomo Born in Roma Eau de Toilette with Violet & Vetiver.png", price: 870, old: 1200, notes: ["Mineral Notes", "Ginger", "Executive"], stock: 5 },
    { id: 12, name: "Xerjoff Alexandria II", gender: "Unisex", file: "essesce products/Xerjoff - Eau de Parfum Alexandria II Parfum 100 ml Xerjoff.png", price: 1080, old: 1550, notes: ["Lavender", "Oud", "Dark", "Executive"], stock: 2 },
    { id: 13, name: "Heritage Fenwick", gender: "Men", file: "essesce products/Fenwick _ UK Department Store _ Fashion, Beauty, & More.png", price: 1250, old: 1800, notes: ["Legacy", "Woody"], stock: 2 },
    { id: 14, name: "Gift Selection No.12", gender: "Unisex", file: "essesce products/Fragrance Gift Guide_ 12 Perfumes to Give Each___.png", price: 1400, old: 2000, notes: ["Floral", "Citrus"], stock: 4 },
    { id: 15, name: "Seasonal Palette", gender: "Women", file: "essesce products/How to Choose Fragrances Based on Your Seasonal Color Palette.png", price: 950, old: 1300, notes: ["Spring", "Fresh"], stock: 6 },
    { id: 16, name: "Sun-Warmed Complex", gender: "Women", file: "essesce products/Quietly complex and sun-warmed_ Spring fragrance has outgrown stale florals.png", price: 1150, old: 1600, notes: ["Warm", "Solar"], stock: 3 },
    { id: 17, name: "Zodia Săgetător", gender: "Men", file: "essesce products/Top 10 Parfumuri Pentru Bărbați din Zodia Săgetător - Replique Parfumerie.png", price: 890, old: 1200, notes: ["Amber", "Spicy"], stock: 5 },
    { id: 18, name: "Elite Acquisition I", gender: "Men", file: "essesce products/download (10).png", price: 1300, old: 1900, notes: ["Executive", "Dark"], stock: 1 },
    { id: 19, name: "Elite Acquisition II", gender: "Men", file: "essesce products/download (11).png", price: 1350, old: 1950, notes: ["Executive", "Fresh"], stock: 2 },
    { id: 20, name: "Elite Acquisition III", gender: "Women", file: "essesce products/download (12).png", price: 1400, old: 2000, notes: ["Executive", "Woody"], stock: 3 },
    { id: 21, name: "Elite Acquisition IV", gender: "Women", file: "essesce products/download (13).png", price: 1450, old: 2100, notes: ["Executive", "Floral"], stock: 4 },
    { id: 22, name: "Elite Acquisition V", gender: "Unisex", file: "essesce products/download (14).png", price: 1500, old: 2200, notes: ["Executive", "Citrus"], stock: 5 },
    { id: 23, name: "Heritage Collection A", gender: "Men", file: "essesce products/download (5).png", price: 900, old: 1300, notes: ["Legacy", "Fresh"], stock: 7 },
    { id: 24, name: "Heritage Collection B", gender: "Men", file: "essesce products/download (6).png", price: 920, old: 1350, notes: ["Legacy", "Woody"], stock: 8 },
    { id: 25, name: "Heritage Collection C", gender: "Women", file: "essesce products/download (7).png", price: 950, old: 1400, notes: ["Legacy", "Floral"], stock: 9 },
    { id: 26, name: "Heritage Collection D", gender: "Women", file: "essesce products/download (8).png", price: 980, old: 1450, notes: ["Legacy", "Amber"], stock: 10 },
    { id: 27, name: "The Signature", gender: "Unisex", file: "essesce products/download.png", price: 1600, old: 2300, notes: ["Signature", "Luxury"], stock: 2 }
];

function getCart() { return JSON.parse(localStorage.getItem('eccence_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('eccence_cart', JSON.stringify(cart)); document.dispatchEvent(new CustomEvent('cartUpdated')); }
function addToCart(product) { const cart = getCart(); cart.push(product); saveCart(cart); }
function removeFromCart(index) { const cart = getCart(); cart.splice(index, 1); saveCart(cart); }
function clearCart() { localStorage.removeItem('eccence_cart'); document.dispatchEvent(new CustomEvent('cartUpdated')); }
function toggleGiftWrap(status) { localStorage.setItem('eccence_gift_wrap', status); }
function isGiftWrapEnabled() { return localStorage.getItem('eccence_gift_wrap') === 'true'; }

const translations = {
    en: {
        nav_home: "Home",
        nav_archive: "The Archive",
        nav_collections: "Collections",
        nav_journal: "Journal",
        mega_men: "For Men",
        mega_women: "For Women",
        mega_unisex: "Unisex",
        mega_about: "Heritage",
        hero_tag: "Defining Luxury Since 1992",
        hero_title: "A Symphony of Invisible Elegance",
        hero_cta: "Explore Archive",
        archive_tag: "Curated Collections",
        archive_title: "The Fragrance Vault",
        filter_all: "All",
        filter_men: "Men",
        filter_women: "Women",
        filter_unisex: "Unisex",
        cart_title: "Your Acquisitions",
        total: "Total Value",
        checkout: "Initiate Checkout",
        gift_wrap: "Luxury Gift Wrapping Protocol",
        stock: "units remaining",
        back: "Back",
        search_placeholder: "Seek a fragrance...",
        newsletter_title: "Join the Inner Circle",
        newsletter_desc: "Receive access to exclusive batches and olfactory insights.",
        newsletter_btn: "Subscribe",
        concierge_welcome: "Welcome. How may we assist your journey?",
        concierge_input: "Inquire here...",
        concierge_send: "Send",
        quiz_title: "Olfactory Profiling",
        quiz_desc: "Select your desired environment:",
        quiz_option_dark: "Moonlit Gala",
        quiz_option_fresh: "Azure Coast",
        quiz_option_exec: "Executive Suite",
        quiz_option_sweet: "Royal Garden",
        quiz_recommend: "Your Olfactory Soulmate:",
        quiz_acquire: "Acquire Now",
        announcement: "Complementary International Shipping on Acquisitions Over 5000 EGP",
        wishlist_title: "Wishlist Vault"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_archive: "الأرشيف",
        nav_collections: "المجموعات",
        nav_journal: "المجلة",
        mega_men: "للرجال",
        mega_women: "للنساء",
        mega_unisex: "للجنسين",
        mega_about: "التراث",
        hero_tag: "تعريف الفخامة منذ عام 1992",
        hero_title: "سمفونية من الأناقة غير المرئية",
        hero_cta: "استكشف الأرشيف",
        archive_tag: "مجموعات مختارة",
        archive_title: "قبو العطور",
        filter_all: "الكل",
        filter_men: "رجال",
        filter_women: "نساء",
        filter_unisex: "للجنسين",
        cart_title: "مقتنياتك",
        total: "القيمة الإجمالية",
        checkout: "بدء عملية الدفع",
        gift_wrap: "تغليف الهدايا الفاخر",
        stock: "قطعة متبقية",
        back: "رجوع",
        search_placeholder: "ابحث عن عطر...",
        newsletter_title: "انضم إلى الدائرة الداخلية",
        newsletter_desc: "احصل على وصول إلى دفعات حصرية ورؤى عطرية.",
        newsletter_btn: "اشتراك",
        concierge_welcome: "مرحباً بك. كيف يمكننا مساعدتك في رحلتك؟",
        concierge_input: "استفسر هنا...",
        concierge_send: "إرسال",
        quiz_title: "التنميط الشمي",
        quiz_desc: "اختر البيئة المفضلة لديك:",
        quiz_option_dark: "حفل ضوء القمر",
        quiz_option_fresh: "الساحل اللازوردي",
        quiz_option_exec: "جناح تنفيذي",
        quiz_option_sweet: "الحديقة الملكية",
        quiz_recommend: "رفيق روحك العطري:",
        quiz_acquire: "اقتني الآن",
        announcement: "شحن دولي مجاني للمقتنيات التي تزيد عن 5000 جنيه مصري",
        wishlist_title: "قبو الأمنيات"
    }
};

function getLang() { return localStorage.getItem('eccence_lang') || 'en'; }
function t(key) { return translations[getLang()][key] || key; }
function getRecentlyViewed() { return JSON.parse(localStorage.getItem('eccence_recent') || '[]'); }
function addToRecentlyViewed(product) {
    let recent = getRecentlyViewed();
    recent = recent.filter(p => p.id !== product.id);
    recent.unshift(product);
    recent = recent.slice(0, 4);
    localStorage.setItem('eccence_recent', JSON.stringify(recent));
}
