import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton'; // Adjust the import path as necessary

const pricingPlans = [
    {
        name: "الدخول العام",
        price: 99,
        description: "مثالي للمشاركين الجدد والراغبين في حضور الفعاليات الأساسية.",
        features: [
            "حضور جميع الجلسات الرئيسية",
            "الوصول إلى منطقة المعرض",
            "غداء للتواصل واستراحات القهوة",
        ],
        link: "/product/general-admission",
        className: "ticket-card-block-three",
        bgClassName: "ticket-card-block-three-bg"
    },
    {
        name: "تذكرة بريميوم",
        price: 199,
        description: "عزز تجربتك مع مزايا إضافية ووصول أكبر.",
        features: [
            "جميع مزايا الدخول العام",
            "دخول جلسات حصرية",
            "مقاعد محجوزة في الجلسات الرئيسية",
        ],
        link: "/product/premium-pass",
        className: "ticket-card-block-one",
        bgClassName: "ticket-card-block-one-bg"
    },
    {
        name: "تجربة كبار الشخصيات",
        price: 399,
        description: "باقة فاخرة لمن يبحث عن تجربة حصرية.",
        features: [
            "جميع مزايا تذكرة بريميوم",
            "لقاء المتحدثين شخصياً",
            "دعوة لعشاء كبار الشخصيات",
        ],
        link: "/product/vip-experience",
        className: "ticket-card-block-two",
        bgClassName: "ticket-card-block-two-bg"
    }
];

const Pricing = () => {
    return (
        <section className="ticket-pricing-section">
            <div className="section-gap-top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="section-header-block center-align">
                        <div className="section-subtitle">الأسعار</div>
                        <div className="section-title-wrap max-width-545px margin-bottom-70px">
                            <h2 className="section-title text-center">
                                اختر <span className="regular-text-span">التجربة</span> التي تناسبك
                            </h2>
                        </div>
                    </div>
                    <div className="ticket-wrapper">
                        {pricingPlans.map((plan) => (
                            <div key={plan.name} className={plan.className}>
                                <div className="ticket-card-left-circle"></div>
                                <div className="ticket-collection-list-wrapper w-dyn-list">
                                    <div role="list" className="ticket-collection-list w-dyn-items">
                                        <div role="listitem" className="ticket-collection-wrap w-dyn-item">
                                            <div className="ticket-collection-item">
                                                <div className="ticket-card-content-block">
                                                    <h2 className="ticket-name">{plan.name}</h2>
                                                    <p className="ticket-book-sort-info">{plan.description}</p>
                                                    <div className="ticket-featured-list-block">
                                                        <div className="ticket-featured-list-title">يشمل:</div>
                                                        <div className="ticket-featured-list-wrap">
                                                            {plan.features.map((feature, index) => (
                                                                <div key={index} className="ticket-featured-list-item">
                                                                    <Image
                                                                        loading="eager"
                                                                        src="https://cdn.prod.website-files.com/679f3bfcdac5bde6d9b53ae4/67a447e9f4d486cd1859a610_ticket-checkmark-icon.png"
                                                                        alt="رمز التحقق"
                                                                        width={24} height={24}
                                                                        className="ticket-featured-list-icon"
                                                                    />
                                                                    <div className="featured-list-item-text">{feature}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ticket-card-price-block">
                                                    <div className="ticket-price-rate">${plan.price}</div>
                                                    <div className="ticket-card-button-wrap">
                                                        <PrimaryButton href={plan.link} className="ticket-card-button">
                                                            شراء
                                                        </PrimaryButton>
                                                    </div>
                                                    <div className="ticket-divider-block">
                                                        <div className="ticket-divider-border"></div>
                                                        <div className="divider-circle-wrap">
                                                            <div className="ticket-divider-circle-block top"></div>
                                                            <div className="ticket-divider-circle-block middle"></div>
                                                            <div className="ticket-divider-circle-block bottom"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ticket-card-bg-image"></div>
                                <div className={plan.bgClassName}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
