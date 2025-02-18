import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cpu, Network } from 'lucide-react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-30"
            style={{ filter: 'blur(5px)' }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-circuits-on-a-black-background-32031-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-green-500">中凯</span> Team Lead
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specializing in US Two-Way SMS Systems and Advanced Communication Solutions
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: <Code2 className="w-12 h-12 text-green-500" />,
            title: "System Architecture",
            description: "Designing robust SMS communication systems with scalability in mind"
          },
          {
            icon: <Network className="w-12 h-12 text-green-500" />,
            title: "Network Integration",
            description: "Seamless integration with US carrier networks and messaging protocols"
          },
          {
            icon: <Cpu className="w-12 h-12 text-green-500" />,
            title: "AI Implementation",
            description: "Leveraging artificial intelligence for smart message routing and analysis"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            className="bg-gray-900/50 p-8 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors"
          >
            {item.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;