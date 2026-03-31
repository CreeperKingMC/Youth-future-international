/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Briefcase, GraduationCap, Users, ArrowRight, ExternalLink } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F7FF] text-[#3D4A5A] font-sans selection:bg-[#D9E9FF]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#D9E9FF]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#A5C9FF] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              Y
            </div>
            <span className="font-bold text-xl tracking-tight">Youth Future International</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-[#6A99D9] transition-colors">About</a>
            <a href="#impact" className="hover:text-[#6A99D9] transition-colors">Impact</a>
            <a 
              href="https://www.zeffy.com/en-US/donation-form/donate-to-create-jobs-in-liberia" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#A5C9FF] text-white rounded-full hover:bg-[#8EBAFF] transition-all shadow-sm"
            >
              Donate Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1EEFF] text-[#4A7BB9] text-xs font-bold uppercase tracking-wider mb-6">
              <Heart size={14} className="fill-[#4A7BB9]" />
              Youth Future International
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Building brighter futures for <span className="text-[#6A99D9]">young Liberians.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              At Youth Future International, we’re dedicated to helping young Liberians by preparing 
              them for the job market through job readiness trainings and finding meaningful 
              employment and building brighter futures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.zeffy.com/en-US/donation-form/donate-to-create-jobs-in-liberia" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#A5C9FF] text-white rounded-full font-bold text-lg hover:bg-[#8EBAFF] transition-all flex items-center gap-2 shadow-lg shadow-blue-100"
              >
                Donate <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/11asW5AUDwMbhcJG_ykDIVoAqmB9BL_HM" 
                alt="Youth Future International Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Story */}
      <section id="about" className="py-24 bg-white border-y border-[#D9E9FF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed bg-[#E1EEFF]/50 p-8 md:p-12 rounded-[2.5rem]">
            <p>
              Our job-seeking project is driven by a passionate team working tirelessly to connect youth with opportunities. 
              However, we need your help.
            </p>
            <p className="font-medium text-gray-900 border-l-4 border-[#A5C9FF] pl-6 italic">
              "Our staff are currently working without pay, pouring their hearts into training and securing jobs for others. 
              We’re launching this campaign to raise funds to compensate them for their efforts."
            </p>
            <p className="text-2xl font-bold text-[#3D4A5A] mt-12 mb-6">Your contribution will directly support:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#A5C9FF] rounded-full" />
                <span className="font-medium text-gray-800">Job placements for young Liberians</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#A5C9FF] rounded-full" />
                <span className="font-medium text-gray-800">Skills development and training</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#A5C9FF] rounded-full" />
                <span className="font-medium text-gray-800">Sustaining our dedicated team</span>
              </li>
            </ul>
            <p className="mt-12">
              Every donation brings us closer to empowering Liberia’s youth and building a stronger future. Thank you for your support.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Grid */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#3D4A5A]">Your contribution will directly support:</h2>
            <p className="text-gray-500">Transparency in how your donations make a difference.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Job placements",
                desc: "Directly funding the process of connecting young Liberians with employers.",
                icon: <Briefcase className="text-[#6A99D9]" />,
                img: "https://lh3.googleusercontent.com/d/1LqMlYxyI3NFIdnjuThYDTRNDMtskGuOA"
              },
              {
                title: "Skills development",
                desc: "Providing job readiness training and vocational skills for the modern market.",
                icon: <GraduationCap className="text-[#6A99D9]" />,
                img: "https://lh3.googleusercontent.com/d/1sHsPlN8SQMwAPfg7TK1L9XFYpzDKJxTF"
              },
              {
                title: "Sustaining our team",
                desc: "Compensating our dedicated staff who currently work without pay.",
                icon: <Users className="text-[#6A99D9]" />,
                img: "https://lh3.googleusercontent.com/d/11asW5AUDwMbhcJG_ykDIVoAqmB9BL_HM"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#D9E9FF] shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[#E1EEFF] rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Incorporating the "vibe" of the provided photos */}
      <section className="py-24 bg-[#3D4A5A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Community in Action</h2>
              <p className="text-gray-400 max-w-xl">Real stories, real people, real impact in Liberia.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 
              Using ONLY the specific URLs of the images the user uploaded.
            */}
            <div className="space-y-6">
              <img src="https://lh3.googleusercontent.com/d/11asW5AUDwMbhcJG_ykDIVoAqmB9BL_HM" className="rounded-2xl w-full aspect-square object-cover shadow-lg" alt="Youth Future International Team" referrerPolicy="no-referrer" />
              <img src="https://lh3.googleusercontent.com/d/1sHsPlN8SQMwAPfg7TK1L9XFYpzDKJxTF" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg" alt="Training Session" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-6 md:pt-12">
              <img src="https://lh3.googleusercontent.com/d/1ZswgceDa9Cp9hTFKVQSf-Fw1mdpjSZIH" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg" alt="Community Outreach" referrerPolicy="no-referrer" />
              <img src="https://lh3.googleusercontent.com/d/1LqMlYxyI3NFIdnjuThYDTRNDMtskGuOA" className="rounded-2xl w-full aspect-square object-cover shadow-lg" alt="Youth Engagement" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-6">
              <img src="https://lh3.googleusercontent.com/d/1TxjiEsuDpdtLyxtAEpfNKOIuYe79f9hg" className="rounded-2xl w-full aspect-square object-cover shadow-lg" alt="Skill Development" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section id="donate" className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#A5C9FF] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-100">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to make an impact?</h2>
            <p className="text-xl text-[#F0F7FF] mb-12 max-w-2xl mx-auto">
              Your contribution directly supports job placements, skills development, and sustaining our dedicated team.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://www.zeffy.com/en-US/donation-form/donate-to-create-jobs-in-liberia"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-6 bg-white text-[#A5C9FF] rounded-full font-bold text-2xl hover:bg-[#F0F7FF] transition-all flex items-center gap-3 shadow-xl inline-flex"
              >
                Donate <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <p className="text-sm text-[#D9E9FF] font-medium">Secure donation via Zeffy</p>
            </div>
          </div>
          
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6A99D9]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#D9E9FF]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#A5C9FF] rounded-lg flex items-center justify-center text-white font-bold">Y</div>
            <span className="font-bold text-lg">Youth Future International</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Youth Future International. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#A5C9FF]">Privacy</a>
            <a href="#" className="hover:text-[#A5C9FF]">Terms</a>
            <a href="#" className="hover:text-[#A5C9FF]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
