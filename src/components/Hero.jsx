import HeroImg from '../assets/hero.png'
import Button from './Button'

const Hero = () => {
    return (
        <section
            style={{ backgroundImage: `url(${HeroImg})` }}
            className='relative w-full h-120 md:h-155.5 bg-cover bg-center bg-no-repeat bg-gray-300'
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className='relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 '>
                <div className='max-w-2xl'>
                    {/* heading */}
                    <h1 className='text-white font-bold leading-[1.15] mb-4
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl '>
                        <b className='[-webkit-text-stroke:1.5px_white] text-transparent'>Everyday</b>{' '}
                        <span >Fashion</span>
                        <br />
                        That{' '}
                        <span className='[-webkit-text-stroke:1.5px_white] text-transparent'>Moves</span>
                        {' '}With You
                    </h1>
                    {/* para */}
                    <p className='text-gray-100 text-sm sm:text-base md:text-lg mb-8 max-w-md leading-relaxed'>
                        Clean designs crafted for everyday comfort, effortless styling,
                        and confidence you can carry from morning to night.
                    </p>
                    {/* button */}
                    <Button to='/collection'
                        content="Explore"
                        BgColor="white"
                        Color="black"
                        HoverBg="#111111"
                        HoverColor="white"
                        ArrowColor="black"
                        ArrowHoverColor="white"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero