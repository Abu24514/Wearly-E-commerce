import contactImg from "../assets/contact.avif";
import { MdOutlineContactSupport } from "react-icons/md";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoSendOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuTag, LuUser, LuPencil, LuMessageSquare } from "react-icons/lu";
import Button from "../components/Button";
import { AiOutlineContacts } from "react-icons/ai";
import SecondHanding from "../components/SecondHanding";

const Contact = () => {
  const data = [
    { id: 1, text: 'Email', para: 'support@wearly.com', icon: <IoMailOutline size={18} /> },
    { id: 2, text: 'Phone', para: '+91 0123456789', icon: <IoCallOutline size={18} /> },
    { id: 3, text: 'Address', para: 'Lucknow, Uttar Pradesh', icon: <IoLocationOutline size={18} /> }

  ]
  console.log(data[0].text);

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20">

      {/* heading */}
      <SecondHanding
        icon={<AiOutlineContacts size={14} />}
        text="Contact Wearly"
        title=" We'd Love To Hear From You"
        para=" Have a question, suggestion, or need assistance? Our team is here
          to help and will get back to you as soon as possible."
      />

      {/* Main Grid — Form + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch sm:mt-15 mt-10">
        {/* Left: Form */}
        <div className="border border-neutral-200 rounded-2xl p-7 flex flex-col">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-5">
            <LuPencil size={12} className="text-neutral-400" />
            <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-neutral-500">
              Send a message
            </span>
            <div className="flex-1 h-px bg-neutral-100" />
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-neutral-500">
                <LuUser size={12} /> Full name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black transition-colors placeholder-neutral-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-neutral-500">
                <IoMailOutline size={13} /> Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black transition-colors placeholder-neutral-400"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-neutral-500">
              <LuTag size={12} /> Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black transition-colors placeholder-neutral-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 mt-4 flex-1">
            <label className="flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-neutral-500">
              <LuMessageSquare size={12} /> Message
            </label>
            <textarea
              rows={6}
              placeholder="Tell us what's on your mind..."
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black transition-colors resize-none placeholder-neutral-400"
            />
          </div>

          {/* Submit Row */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-neutral-100">
            <p className="flex items-center gap-1.5 text-xs text-neutral-500">
              <IoLockClosedOutline size={13} /> Reply within 24 hours
            </p>
            <Button
              content="Send"
              BgColor="#000"
              Color="white"
              HoverBg="#171717"
              HoverColor="white"
              ArrowColor="white"
              ArrowHoverColor="white"
            />
          </div>
        </div>

        {/* Right: Image */}
        <div className="rounded-2xl overflow-hidden h-150 lg:min-h-0">
          <img
            src={contactImg}
            alt="Contact Wearly"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

        {data.map(i => (
          <div key={i.id} className="flex items-center gap-3 p-6 border border-neutral-300 rounded-2xl">
            <div className="w-12 h-12 rounded-lg  flex items-center justify-center shrink-0 border border-gray-500">
              {i.icon}
            </div>
            <div>
              <span className="block text-sm  uppercase tracking-widest text-neutral-400 mb-0.5">
                {i.text}
              </span>
              <p className="text-[15px] font-medium">{i.para}</p>
            </div>
          </div>

        ))}




      </div>
    </section>
  );
};

export default Contact;
