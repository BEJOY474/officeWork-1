'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import TopBar1 from '../component/TopBar1';

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7tBX5Ci3YG4y7HrXNBIPzSmC_MTUhHgtng&s", title: "Your Work Title" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaipqYb2ECATgnnaIJjA3ZqFyTwof_zZkUIMrl7jxSlOu4ly56VVw0yMutNh0rQ5gExg&usqp=CAU", title: "Your Work Title" },
  { src: "https://media.cnn.com/api/v1/images/stellar/prod/201020165605-04-working-from-home-stock.jpg?q=x_2,y_102,h_1123,w_1995,c_crop/w_1280", title: "Your Work Title" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1IhHhXANQvemSabviIBReWJ6R8xOMOGzh6SnkfzrEW4VZDjtFWXGINB0e9eOPjrrIG4&usqp=CAU", title: "Your Work Title" },
];

export default function Page() {
  return (
    <>
      <TopBar1 />
      <div className="min-h-screen bg-green-600 text-gray-900">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
            <p className="mt-3 text-lg md:text-xl">We are committed to delivering excellence.</p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-6 md:px-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to create impactful solutions that drive innovation and efficiency across industries.
          </p>
        </motion.section>

        {/* Team Section */}
        <section className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet Our Team</h2>
          <Swiper 
            modules={[Pagination, Autoplay]} 
            spaceBetween={30} 
            slidesPerView={1} 
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 3 }
            }}
            className="max-w-6xl mx-auto"
          >
            <SwiperSlide>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md">
                <img src="https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5894.jpg" alt="John Doe" width={100} height={100} className="rounded-full mx-auto" />
                <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md">
                <img src="https://t3.ftcdn.net/jpg/01/42/01/84/360_F_142018449_yR0avsaJqbIx8NA47sINMoaxdtn1sPzh.jpg" alt="Jane Smith" width={100} height={100} className="rounded-full mx-auto" />
                <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
                <p className="text-gray-500">Chief Designer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Mike Johnson" width={100} height={100} className="rounded-full mx-auto" />
                <h3 className="text-xl font-semibold mt-4">Mike Johnson</h3>
                <p className="text-gray-500">Lead Developer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Gallery Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-6 md:px-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of beautiful works.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {images.map((image, index) => (
              <div key={index} className="text-center">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  width={300} 
                  height={200} 
                  className="rounded-lg" 
                />
                <h3 className="mt-4 text-lg font-semibold">{image.title}</h3>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}
