import React from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ progress }) => {
    const radius = 200; // Радиус круга
    const circumference = 2 * Math.PI * radius; // Длина окружности
    const strokeWidth = 12; // Толщина линии круга

    // Вычисляем длину окружности, которую нужно заливать в зависимости от прогресса
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="circular-progress-container" >
            <svg className="circular-progress-bar" width={radius * 2} height={radius * 2} >

                {/* Определяем градиент */}
                <defs>
                    <filter id="filter0_d_1_4" x="-78" y="0" width="600" height="600" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="50" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.176471 0 0 0 0 0.313726 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_1_4" x1="50" y1="399" x2="390" y2="207" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0606569" stop-color="#2A2D50" />
                        <stop offset="1" stop-color="#151932" />
                    </linearGradient>

                </defs>
                {/* Заливаем круг градиентом */}
                <circle
                    className="circle-background"
                    cx={radius}
                    cy={radius}
                    r={radius} // Увеличиваем радиус круга до половины радиуса прогрессбара
                    fill="url(#paint0_linear_1_4)" // Заливаем градиентом из <defs> с абсолютной ссылкой
                />
                <circle
                    className="circle-center"
                    cx={radius}
                    cy={radius}
                    r={radius - 20} // Увеличиваем радиус круга до половины радиуса прогрессбара
                    fill="#151932" // Заливаем цветом #151932
                />
                {/* Круговой индикатор прогресса */}
                <circle
                    className="circle-progress"
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2 - 30} // Учитываем толщину линии
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                    strokeWidth={strokeWidth} // Устанавливаем толщину линии
                    strokeLinecap="round" // Скругляем края линии
                />

            </svg>
        </div>
    );
};

export default CircularProgressBar;
