import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Link } from "wouter";
import arpitaHeadshot from "../assets/images/arpita.jpg";
import anupamHeadshot from "../assets/images/anupam.jpeg";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const floatingAnimation = {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="molecular-bg flex items-center justify-center relative overflow-hidden py-20">
        {/* Animated molecular structures */}
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-teal-200 rounded-full opacity-20"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-32 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-20"
            animate={floatingAnimation}
            transition={{ ...floatingAnimation.transition, delay: -2 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-200 rounded-full opacity-20"
            animate={floatingAnimation}
            transition={{ ...floatingAnimation.transition, delay: -4 }}
          />
          <motion.div
            className="absolute bottom-32 right-1/3 w-14 h-14 bg-emerald-200 rounded-full opacity-20"
            animate={floatingAnimation}
            transition={{ ...floatingAnimation.transition, delay: -1 }}
          />
        </motion.div>
        {/* Centered content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-800 mb-6">
              About Us
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our mission is to bridge the gap between molecular structure and drug efficacy by predicting how long molecules stay bound, not just how tightly they bind. Together, we bring a unique blend of business strategy, computational chemistry, and software engineering.
            </p>
          </motion.div>
        </div>
      </section>




      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Leadership Team
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Dr. Rommie E. Amaro",
                role: "Co-Founder & Chief Scientific Officer",
                background: "Pioneer in cryo-EM–simulation integration",
                description: "Guides our scientific vision at the intersection of physics, AI, and biology, ensuring our methods remain at the forefront of computational drug discovery.",
                expertise: ["Cryo-EM Integration", "Molecular Simulations", "Structural Biology", "Scientific Innovation"],
                testId: "advisor-rommie",
                // image: rommieHeadshot
              },
              {
                name: "Arpita Pandey",
                role: "Co-Founder & Chief Executive Officer",
                background: "MBA with deep domain expertise from Flatiron Institute",
                description: "Brings business strategy and market insights to computational chemistry, ensuring our innovations translate into real-world impact for pharmaceutical partners.",
                expertise: ["Business Strategy", "Market Analysis", "Partnership Development", "Strategic Planning"],
                testId: "founder-arpita",
                image: arpitaHeadshot
              },
              {
                name: "Dr. Anupam Ojha",
                role: "Co-Founder & Chief Technical Officer",
                background: "Lead architect of SEEKR2",
                description: "Drives our technological innovation with deep expertise in computational methods, software engineering, and algorithm development for molecular simulations.",
                expertise: ["SEEKR2 Architecture", "Algorithm Development", "Software Engineering", "Computational Methods"],
                testId: "founder-anupam",
                image: anupamHeadshot
              },

            ].map((member, index) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full" data-testid={member.testId}>
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <img
                      src={member.image}
                      alt={`${member.name} professional headshot`}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-slate-100"
                      data-testid={`img-headshot-${index + 1}`}
                    />
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-500 text-sm mb-4">{member.background}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{member.description}</p>
                    <div className="space-y-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-xs text-slate-600 bg-slate-100 rounded px-2 py-1 inline-block mr-1">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Company Values */}
      <section className="molecular-bg flex items-center justify-center relative overflow-hidden py-20">
        {/* Animated molecular structures */}
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-teal-200 rounded-full opacity-20"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-32 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-20"
            animate={floatingAnimation}
            transition={{ ...floatingAnimation.transition, delay: -2 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-200 rounded-full opacity-20"
            animate={floatingAnimation}
            transition={{ ...floatingAnimation.transition, delay: -4 }}
          />
          <motion.div
            className="absolute bottom-32 right-1/3 w-14 h-14 bg-emerald-200 rounded-full opacity-20"
            animate={floatingAnimation}
            transition={{ ...floatingAnimation.transition, delay: -1 }}
          />
        </motion.div>

        {/* Centered content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                value: "Scientific Rigor",
                description: "Maintaining the highest standards of computational accuracy and reproducibility",
                icon: "🔬",
                testId: "value-rigor"
              },
              {
                value: "Open Innovation",
                description: "Contributing to the scientific community through open-source code and publications",
                icon: "🌟",
                testId: "value-innovation"
              },
              {
                value: "Patient Impact",
                description: "Focused on accelerating better medicines to patients with speed and proven effectiveness.",
                icon: "❤️",
                testId: "value-impact"
              },
              {
                value: "Collaborative Spirit",
                description: "Building partnerships that advance the entire field of computational drug discovery",
                icon: "🤝",
                testId: "value-collaboration"
              }
            ].map((value) => (
              <motion.div key={value.value} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-teal-50 hover:shadow-lg transition-all duration-300 text-center h-full" data-testid={value.testId}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">{value.value}</h3>
                    <p className="text-slate-600 flex-1">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Careers Section */}
       
    </div>
  );
};

export default About;
