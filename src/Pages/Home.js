import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../Components/ui/button";
import { Card, CardContent } from "../Components/ui/card";
// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";


// ✅ Import Firestore
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  // ✅ Fetch only latest 3 news from Firestore
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(
          collection(db, "news"),
          orderBy("date", "desc"),
          limit(3)
        );
        const querySnapshot = await getDocs(q);
        const newsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewsData(newsList);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
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
    <div className="w-full min-h-screen pt-20">
      {/* Hero Section */}
      <section className="h-screen molecular-bg flex items-center justify-center relative overflow-hidden">
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
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-6 leading-tight">
                  Charting new paths<br />
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    to superior medicines
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  AI-driven discovery, automation, and execution for next-generation therapeutics.
                </p>
              </motion.div>
            </motion.div>

            {/* Button */}
            <motion.div variants={fadeInUp}>
              <Link to="/platform" data-testid="button-explore-platform">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 text-lg px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Our Platform →
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl font-semibold text-slate-600 mb-8">Trusted By</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-slate-400 font-semibold text-xl hover:text-blue-600 transition-colors" data-testid="partner-biopharma">BioPharma Inc.</div>
              <div className="text-slate-400 font-semibold text-xl hover:text-blue-600 transition-colors" data-testid="partner-genomicslab">GenomicsLab</div>
              <div className="text-slate-400 font-semibold text-xl hover:text-blue-600 transition-colors" data-testid="partner-medai">MedAI Partners</div>
              <div className="text-slate-400 font-semibold text-xl hover:text-blue-600 transition-colors" data-testid="partner-proteinx">ProteinX</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Optimized medicines for optimized profiles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With a single PDB file upload, our seekrflow engine transforms receptor–ligand structures into comprehensive kinetic and thermodynamic profiles in hours.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Innovation",
                description: "Accurate and data-efficient physics-based AI technologies that span from early-stage discovery to the clinic using QM-trained espaloma force fields.",
                gradient: "from-teal-500 to-blue-600",
                testId: "card-innovation"
              },
              {
                title: "Automation",
                description: "AI-driven, high-throughput experimentation using automated Voronoi-milestoning to go from molecular designs to biological data each week.",
                gradient: "from-blue-500 to-teal-600",
                testId: "card-automation"
              },
              {
                title: "Execution",
                description: "A proprietary pipeline delivering association and dissociation rates alongside free-energy landscapes at a pace years faster than industry standard.",
                gradient: "from-emerald-500 to-blue-600",
                testId: "card-execution"
              }
            ].map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full" data-testid={feature.testId}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-1">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pipeline Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Our Pipeline: Transforming Possibilities into Therapies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From benchmark systems to challenging therapeutic targets, our platform delivers rigorously derived kon, koff, and ΔG values.
            </p>
          </motion.div>

          {/* Pipeline cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "HER2",
                description: "1000x selectivity and brain penetrance to unlock the therapeutic potential of the target for metastatic disease.",
                icon: "H2",
                gradient: "from-slate-50 to-teal-50",
                border: "hover:border-teal-300",
                testId: "pipeline-her2"
              },
              {
                title: "CDK2/4",
                description: "First-in-class CDK2/4 profile to address cyclin D and cyclin E driven cancers while avoiding off-target dose-limiting toxicities.",
                icon: "CDK",
                gradient: "from-slate-50 to-blue-50",
                border: "hover:border-blue-300",
                testId: "pipeline-cdk"
              },
              {
                title: "Novel Target Classes",
                description: "Programs focusing on cryptic pockets, allostery, and protein-protein interactions, spanning multiple therapeutic areas.",
                icon: "NT",
                gradient: "from-slate-50 to-emerald-50",
                border: "hover:border-emerald-300",
                testId: "pipeline-novel"
              }
            ].map((program) => (
              <motion.div key={program.title} variants={fadeInUp}>
                <Card className={`bg-gradient-to-br ${program.gradient} border border-slate-200 ${program.border} transition-all duration-300`} data-testid={program.testId}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl mr-4 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{program.icon}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-2xl text-slate-800">{program.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/pipeline" data-testid="button-see-full-pipeline">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105"
              >
                See Full Pipeline →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              News & Media
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {newsData.length === 0 ? (
              <p className="col-span-full text-center text-slate-500 mt-4 text-lg">
                No news available.
              </p>
            ) : (
              newsData.map((news) => (
                <motion.div key={news.id} variants={fadeInUp}>
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-teal-600 font-semibold">
                          {news.date}
                        </div>
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">
                        {news.title}
                      </h3>
                      <p className="text-slate-600 mb-4 flex-1">
                        {news.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/news" data-testid="button-view-all-news">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold"
              >
                View All News →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get in touch to see how Precision Kinetica can transform your R&D with AI-powered protein prediction.
            </p>
            <Link to="/contact" data-testid="button-contact-us">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 px-8 py-4 rounded-full text-lg font-semibold">
                Get Started →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
