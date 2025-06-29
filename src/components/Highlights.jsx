// app/components/Highlights.js
import Image from 'next/image';

const highlightsData = [
    { title: "الكلمات الرئيسية", description: "خطابات ملهمة من قادة عالميين في علوم البيانات والذكاء الاصطناعي." },
    { title: "ورش عمل بقيادة خبراء", description: "جلسات عملية تهدف إلى تعميق مهاراتك ومعرفتك." },
    { title: "فرص التواصل", description: "تواصل مع أقران الصناعة والمبتكرين من جميع أنحاء العالم." },
    { title: "عروض المنتجات المبتكرة", description: "اكتشف الأدوات والتقنيات الحديثة التي تشكل المستقبل." },
    { title: "منطقة عرض الذكاء الاصطناعي", description: "استكشف تطبيقات وحلول الذكاء الاصطناعي المبتكرة من أفضل الشركات." },
    { title: "جلسات النقاش", description: "شارك في محادثات ثرية يقودها قادة الصناعة." },
    { title: "جلسات الأسئلة والأجوبة التفاعلية", description: "تفاعل مباشرة مع خبراء الصناعة الرائدين في جلسات تفاعلية." },
    { title: "الجوائز والتكريم", description: "برنامج جوائز حصري لتكريم الإنجازات الرائدة." }
];

const Highlights = () => {
    return (
        <section className="event-highlights-section">
            <div className="section-gap">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="home-two-event-highlights-wrapper">
                        <div className="section-header-block left-align margin-bottom-70px">
                            <div className="section-subtitle">أبرز الفعاليات</div>
                            <div className="section-title-wrap">
                                <h2 className="section-title">لحظات لا تُفوّت <span className="regular-text-span">في إفنرو</span></h2>
                            </div>
                        </div>
                        <div className="home-two-event-highlight-block">
                            <div className="event-highlight-thumbnail-block">
                                <div className="image-animation-block">
                                    <Image
                                        src="https://cdn.prod.website-files.com/6799ccabec4efd18b16a2f0d/67a1ce3aa397f75154217378_Event%20Highlight%20Thumbnail.jpg"
                                        loading="lazy"
                                        width={1068}
                                        height={712}
                                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                                        alt="صورة أبرز الفعاليات"
                                        className="event-highlight-thumbnail animated-image"
                                    />
                                </div>
                            </div>
                            <div className="event-highlights-block">
                                {highlightsData.map((item, index) => (
                                    <div key={index} className="event-highlights-item-wrap">
                                        <div className="event-highlights-item-content home-two">
                                            <h4 className="event-highlights-item-name">{item.title}</h4>
                                            <p className="event-highlights-excerpt">{item.description}</p>
                                        </div>
                                        <div className="gradient-color event-card"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;