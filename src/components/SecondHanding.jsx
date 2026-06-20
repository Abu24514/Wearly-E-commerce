import React from 'react'

const SecondHanding = ({icon , text , title ,para}) => {
    return (
        <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2">
                <span className="bg-black rounded-full p-1 text-white">
                   {icon}
                </span>
                <p className="text-sm font-medium">{text}</p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mt-6 text-black">
                {title}
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
                {para}
            </p>
        </div>
    )
}

export default SecondHanding
