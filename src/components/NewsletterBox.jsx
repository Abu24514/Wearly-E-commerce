import { useState } from 'react'
import newImg from '../assets/message-img-2.webp'
import ImageWithSkeleton from '../components/Skeletons/ImageWithSkeleton'
import userAxios from '../configs/api'
import toast from 'react-hot-toast'
const NewsletterBox = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const { data } = await userAxios.post('/api/newsletter/subscribe', { email });
            if (data.success) {
                toast.success("Subscribed successfully! 🎉");
                setEmail('');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className=' bg-[#F5F5F5] flex flex-col md:flex-row gap-y-6 rounded-xl overflow-hidden md:mt-20 mt-5'>
            <div className='px-6 py-5'>
                {/* content */}
                <div className='mt-4'>
                    <h2 className="font-display text-4xl md:text-5xl font-medium text-black leading-tight">
                        Join the Wearly Community
                    </h2>

                    <p className="mt-5 text-lg text-neutral-500 leading-relaxed max-w-xl">
                        Subscribe to receive exclusive offers, early access to new collections,
                        and carefully curated style updates delivered directly to your inbox.
                    </p>
                </div>
                {/* form*/}
                <form onSubmit={onSubmitHandler} className='md:mt-10 mt-5 flex gap-x-3 md:gap-x-6'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email address"
                        className='md:w-80 w-60 bg-[#E8E8E8] text-gray-700 py-3 md:px-4 px-3 rounded outline-none border-none text-[15px] md:text-xl tracking-wide'
                    />
                    <button
                        type="submit"
                        className='bg-black text-white py-3 md:px-3 px-2 rounded outline-0 border-0 text-[15px] md:text-xl active:scale-90'>
                        {loading ? "..." : "Subscribe"}
                    </button>
                </form>
            </div>
            {/* image */}
            <ImageWithSkeleton
                src={newImg}
                alt="newsletter"
                containerClassName="w-full h-100"
                className="object-cover w-full h-full"
            />
        </section>
    )
}

export default NewsletterBox;
