import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6">About Our Team</h1>
            <p className="text-gray-300 mb-6">
              As the team lead of the US Two-Way SMS Group at 中凯, I bring extensive experience
              in developing and maintaining large-scale messaging systems. Our team specializes
              in creating robust communication solutions that bridge businesses with their customers
              through advanced SMS technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: '100+' },
                { label: 'Messages/Day', value: '1M+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-900/50 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-green-500">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: <Award className="w-12 h-12 text-green-500" />,
              title: "Excellence",
              description: "Committed to delivering high-quality messaging solutions"
            },
            {
              icon: <Users className="w-12 h-12 text-green-500" />,
              title: "Collaboration",
              description: "Strong team dynamics and client partnerships"
            },
            {
              icon: <Zap className="w-12 h-12 text-green-500" />,
              title: "Innovation",
              description: "Constantly evolving with the latest technology"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-white/10"
            >
              {item.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;