// app/components/PrimaryButton.js
import Link from 'next/link';

const PrimaryButton = ({ href, children }) => {
    return (
        <Link href={href} className="primary-button w-inline-block">
            <div className="button-content-block front">
                <div className="button-text">{children}</div>
                <div className="button-icon w-embed">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        style={{ transform: 'scaleX(-1)' }} // 👈 This is the correct format in JSX
                    >
                        <path
                            d="M13.5 5.0005H1.5M9.5 9L12.8322 5.9797C13.7226 5.1727 13.7226 4.8273 12.8322 4.0203L9.5 1"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </div>
            </div>
            <div className="button-gradient-bg"></div>
        </Link>
    );
};

export default PrimaryButton;