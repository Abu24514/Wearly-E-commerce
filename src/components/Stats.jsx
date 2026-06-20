import React from 'react'

const Stats = () => {
    const stats = [
        { value: "10K+", label: "Happy Customers" },
        { value: "500+", label: "Curated Products" },
        { value: "98%", label: "Customer Satisfaction" },
        { value: "24/7", label: "Support Available" },
    ];
    return (
        <>
            {stats.map((item) => (
                <div
                    key={item.label}
                    className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 text-center hover:border-black transition-colors"
                >
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-black">
                        {item.value}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-neutral-500">
                        {item.label}
                    </p>
                </div>
            ))}
        </>
    )
}

export default Stats
