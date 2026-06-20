import React from 'react'

const FeatureCard = ({number , title , description}) => {
    return (
        <div key={number}>
            <span className="text-neutral-500 text-xl">
                {number}
            </span>

            <h3 className="mt-5 font-display text-2xl sm:text-3xl font-medium text-black">
                {title}
            </h3>

            <p className="mt-5 text-base sm:text-lg text-neutral-500 leading-relaxed max-w-sm">
                {description}
            </p>
        </div>
    )
}

export default FeatureCard
