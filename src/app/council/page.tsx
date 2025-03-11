'use client';

import { Navbar } from '@/components/Navbar';
import { CouncilMember } from '@/components/CouncilMember';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sample council data - replace with actual data
const facultyAdvisors = [
  {
    name: "Prof. Balasubramaniam Kavaipatti ",
    role: "President",
    image: "/images/council/president.jpeg",
    email: "bala.ramanathan@iitb.ac.in",
    department: "Energy Science and Engineering",
    linkedIn: "https://www.ese.iitb.ac.in/faculty/balasubramaniam-kavaipatti",
    bio: "Professor with 15+ years of experience in academia and research.",
    isFaculty: true
  },
  {
    name: "Prof. Gurubalan Annadurai ",
    role: "Vice President",
    image: "/images/council/vice-president.jpeg",
    email: "guru.a@iitb.ac.in",
    department: "Energy Science and Engineeringg",
    linkedIn: "https://www.ese.iitb.ac.in/faculty/gurubalan-annadurai",
    bio: "Assistant Professor ----.",
    isFaculty: true
  }
];

const studentCouncil = [
  {
    name: "Ms. Amruta",
    role: "Secretary",
    image: "/images/council/secretary.jpeg",
    email: "secretary@example.com",
    department: "Energy Science and Engineering",
    year: "3rd year, MSc-PhD",
    linkedIn: "https://www.linkedin.com/in/amruta-iyer-1b4404185/",
    bio: "Passionate about organizing cultural events and fostering community engagement."
  },
  {
    name: "Ms. Oviya S",
    role: "Joint Secretary",
    image: "/images/council/joint-secretary.jpeg",
    email: "jointsecretary@example.com",
    department: "Electrical Engineering",
    year: "3rd year, B.Tech+M.Tech",
    linkedIn: "https://www.linkedin.com/in/oviya23/?originalSubdomain=in",
    bio: "Dedicated to promoting Tamil culture and traditions among students."
  },
  {
    name: "Mr. Nikil",
    role: "Treasurer",
    image: "/images/council/treasurer.jpeg",
    email: "treasurer@example.com",
    department: "Computer Science Engineering",
    year: "3rd Year, B.Tech",
    linkedIn: "https://linkedin.com/in/michaelbrown",
    bio: "Managing association finances and budgeting for cultural events."
  },
  {
    name: "Mr. Tarun",
    role: "Design Manager",
    image: "/images/council/design-manager.jpeg",
    email: "design@example.com",
    department: "IDC",
    year: "4th year, B.Des",
    linkedIn: "https://linkedin.com/in/emilydavis",
    bio: "Creating visual content and maintaining the association's brand identity."
  },
  {
    name: "Mr. Abinesh",
    role: "Media Manager",
    image: "/images/council/media-manager.JPG",
    email: "abinesh@iitb.ac.in",
    department: "Metallurgy and Materials Science",
    year: "2nd year, B.Tech",
    linkedIn: "https://linkedin.com/in/abi-nesh",
    bio: "Handling social media presence and event documentation."
  }
];

export default function Council() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section with Group Photo */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Council
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-100 max-w-2xl mx-auto mb-12"
            >
              Meet the dedicated team leading the Tamil Cultural Association
            </motion.p>
            
            {/* Group Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/council/group-photo.jpeg"
                  alt="TCA Council Group Photo"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <p className="text-lg font-medium">Council 2024 - 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Council Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Student Council
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentCouncil.map((member, index) => (
              <CouncilMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisors Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Faculty Advisors
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAdvisors.map((advisor, index) => (
              <CouncilMember key={index} {...advisor} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 