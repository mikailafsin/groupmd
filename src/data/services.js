import cyberVideo from "../assets/cyber.mp4";
import eCommerceVideo from "../assets/e-commerce.mp4";
import codingVideo from "../assets/coding.mp4";

const services = [
    {
        id: "cybersecurity",
        title: "Siber Güvenlik",
        description:
            "Dijital varlıkları, en son güvenlik çözümleriyle korumak. Gelişmiş tehdit tespiti, zafiyet değerlendirmesi ve kapsamlı güvenlik çerçeveleri.",
        ctaText: "Güvenliği Keşfet",
        ctaLink: "https://www.mdsiber.com.tr/",
        backgroundVideo: cyberVideo,
        gradient: "from-blue-900/80 via-cyan-900/60 to-blue-800/80",
        features: ["Tehdit Tespiti", "Güvenlik Denetimleri", "Uyum Yönetimi", "7/24 İzleme"],
    },
    {
        id: "ecommerce",
        title: "E-Ticaret",
        description:
            "Büyümeyi tetikleyen yenilikçi dijital ticaret platformları. Özel çözümler, sorunsuz entegrasyonlar ve modern işletmeler için ölçeklenebilir altyapı.",
        ctaText: "Ticareti Keşfet",
        ctaLink: "#",
        backgroundVideo: eCommerceVideo,
        gradient: "from-emerald-900/80 via-teal-900/60 to-green-800/80",
        features: ["Özel Mağazalar", "Ödeme Entegrasyonu", "Stok Yönetimi", "Analitik Panel"],
    },
    {
        id: "showcase",
        title: "Proje Vitrini",
        description:
            "Yenilikçi projeler ve yaratıcı çözümlerden oluşan seçkin bir koleksiyon. Kırılma noktası yenilikleri ve ileri düzey projelerimizi keşfedin.",
        ctaText: "Projeleri Görüntüle",
        ctaLink: "https://mdyaz.com/",
        backgroundVideo: codingVideo,
        gradient: "from-purple-900/80 via-violet-900/60 to-indigo-800/80",
        features: ["Özel Tasarım", "Duyarlı Düzen", "SEO Optimizasyonu", "İçerik Yönetimi"],
    },
];

export default services;
