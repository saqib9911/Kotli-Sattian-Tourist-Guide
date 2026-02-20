let currentLang = 'en';

const data = {
    en: {
        btn: "اردو میں دیکھیں",
        hT: "Discover Parinyaan",
        hD: "Explore the crystal water springs of Parinyaan and the lush heights of Thoon and Kamra.",
        hB: "Start Journey",
        sT: "Famous Tourist Spots",
        p1T: "Parinyaan (پریئں)",
        p1D: "Famous for its natural crystal water springs and peaceful hiking tracks.",
        p2T: "Thoon & Kamra Peaks",
        p2D: "High ridges with panoramic views of the Jhelum valley and snowy peaks.",
        p3T: "Main Bazar",
        p3D: "Experience local Sattian culture, traditional food, and warm hospitality.",
        mT: "Live Satellite Navigation",
        fT: "© 2026 Kotli Sattian Digital Guide | Explore the Unexplored"
    },
    ur: {
        btn: "English Version",
        hT: "پریئں کی سیر کریں",
        hD: "پریئں کے ٹھنڈے چشموں اور تھون اور کامرہ کی حسین چوٹیوں کا نظارہ کریں۔",
        hB: "سفر کا آغاز کریں",
        sT: "مشہور سیاحتی مقامات",
        p1T: "پریئں (Parinyaan)",
        p1D: "اپنے قدرتی چشموں اور پرسکون ہائیکنگ ٹریکس کے لیے مشہور مقام۔",
        p2T: "تھون اور کامرہ کی چوٹیاں",
        p2D: "پہاڑ کی وہ بلند چوٹیاں جہاں سے آپ کو ہمالیہ کے دامن کا نظارہ ملتا ہے۔",
        p3T: "مین بازار کوٹلی ستیاں",
        p3D: "مقامی پہاڑی کھانوں اور ستیاں کے لوگوں کی مشہور مہمان نوازی کا مرکز۔",
        mT: "لائیو نقشہ جات",
        fT: "© 2026 کوٹلی ستیاں ڈیجیٹل گائیڈ | چھپی ہوئی خوبصورتی"
    }
};

function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'ur' : 'en';
    const l = data[currentLang];

    // Update Content
    document.getElementById('lang-btn').innerText = l.btn;
    document.getElementById('h-title').innerText = l.hT;
    document.getElementById('h-desc').innerText = l.hD;
    document.getElementById('btn-text').innerText = l.hB;
    document.getElementById('s-title').innerText = l.sT;
    document.getElementById('p1-t').innerText = l.p1T;
    document.getElementById('p1-d').innerText = l.p1D;
    document.getElementById('p2-t').innerText = l.p2T;
    document.getElementById('p2-d').innerText = l.p2D;
    document.getElementById('p3-t').innerText = l.p3T;
    document.getElementById('p3-d').innerText = l.p3D;
    document.getElementById('m-title').innerText = l.mT;
    document.getElementById('footer-txt').innerText = l.fT;

    // Toggle Font
    document.body.classList.toggle('urdu-font');
}

// Live Weather Fetching
async function fetchWeather() {
    try {
        const res = await fetch('https://api.open-meteo.com');
        const weather = await res.json();
        document.getElementById('weather-pill').innerText = `🌡️ ${weather.current_weather.temperature}°C | Kotli Sattian`;
    } catch (e) {
        document.getElementById('weather-pill').innerText = "🌡️ 18°C | Kotli Sattian";
    }
}

fetchWeather();
