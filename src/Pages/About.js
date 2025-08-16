import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Link } from "wouter";
import arpitaHeadshot from "../assets/images/arpita.jpg";
import anupamHeadshot from "../assets/images/anupam.jpeg";
import Lottie from "lottie-react";
import teamAnimation from "../animations/About Us Team.json";

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-800 mb-6">
              About Us
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Precision Kinetica unites physics, AI, and biology to predict how long drug candidates stay bound—accelerating lead optimization with unprecedented speed and accuracy
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-slate-50">
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
                description: "Every prediction undergoes stringent validation against experimental benchmarks to ensure accuracy and reproducibility you can trust.",
                icon: "🔬",
                testId: "value-rigor"
              },
              {
                value: "Open Transparency",
                description: "Sharing algorithms, datasets, and workflows so collaborators and customers can reproduce, inspect, and build upon our results.",
                icon: "🌐",
                testId: "value-transparency"
              },
              {
                value: "User-Centered Innovation",
                description: "Designing each feature with real drug-discovery teams in mind, making our platform as intuitive and practical in the lab as it is powerful under the hood.",
                icon: "💡",
                testId: "value-innovation"
              },
              {
                value: "Collaborative Spirit",
                description: "Building partnerships that advance the entire field of computational drug discovery",
                icon: "🤝",
                testId: "value-collaboration"
              }
            ].map((value, index) => (
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

      {/* Our Story */}
      <section className="py-0 bg-gray-50 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full h-full min-h-[500px]">

          {/* Left: Lottie Animation */}
          <div className="lg:w-1/2 w-full flex items-center justify-center bg-white">
            <Lottie 
              animationData={teamAnimation} 
              loop={true} 
              className="w-full h-[500px] object-contain"
            />
          </div>

          {/* Right: Text */}
          <motion.div
            className="lg:w-1/2 w-full flex items-center p-12 bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Precision Kinetica began as a collaboration between computational chemists and AI 
                researchers, united by a single mission: to automate the prediction of molecular binding kinetics 
                with physics-based precision. What started in an academic lab—refining milestoning theory and 
                graph-neural-network force fields—grew into a fully automated pipeline capable of transforming 
                a PDB file into a comprehensive kinetic and thermodynamic profile in mere hours.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Along the way, we partnered with industry pioneers, tested our methods on dozens of real-world 
                targets, and continuously tuned our workflows to meet the exacting needs of both academic and 
                pharmaceutical labs. Today, we stand at the forefront of simulation-driven drug discovery, 
                building a future where every compound’s residence time guides smarter, faster decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
