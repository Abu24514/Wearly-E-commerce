
import Button from './Button'

const Heading = ({text , title , icon, content}) => {
    return (
        <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 p-2'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center font-sans'>
                    <span className='bg-black rounded-full p-1 text-white'>{icon}</span>
                    <p className='text-sm'>{text}</p>
                </div>
                <h2 className='text-2xl md:text-5xl  sm:w-90'>{title}</h2>
            </div>
            <div>
                <Button to='/collection'
                    content={content}
                    BgColor="#303030"
                    Color="white"
                    HoverBg="black"
                    HoverColor="white"
                    ArrowColor="white"
                    ArrowHoverColor="white"
                />
            </div>
        </div>
    )
}

export default Heading