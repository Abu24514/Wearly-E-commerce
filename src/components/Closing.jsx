import Button from "../components/Button";
const Closing = () => {
    return (
        <div className="text-center border-t border-neutral-200 mt-28 pt-20">
            <h2 className="font-display text-4xl md:text-5xl font-medium">
                Wear Confidence.
            </h2>

            <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                Join thousands of customers who trust Wearly for quality, comfort, and
                timeless style. Discover collections designed to elevate your everyday
                wardrobe.
            </p>

            <div className="mt-10 flex justify-center">
                <Button
                    to="/collection"
                    content="Explore Collection"
                    BgColor="#000"
                    Color="white"
                    HoverBg="#171717"
                    HoverColor="white"
                    ArrowColor="white"
                    ArrowHoverColor="white"
                />
            </div>
        </div>
    )
}

export default Closing
