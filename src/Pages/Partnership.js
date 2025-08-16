import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Link } from "wouter";

const Partnerships = () => {
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
              Partnerships
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We collaborate with industry and academia to integrate kinetics-driven insights into drug discovery workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Workflow */}
      <section className="py-0 bg-gray-50 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full h-full min-h-[500px]">

          {/* Left: Full-height image */}
          <div className="lg:w-1/2 w-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Five-panel step animation showing complete pipeline workflow"
            />
          </div>

          {/* Right: Text */}
          <motion.div
            className="lg:w-1/2 w-full flex items-center p-12 bg-white"
            {...fadeInUp}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Seamless Integration Workflow
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Whether you need co-development on novel targets, secure cloud deployment of our pipeline, or academic collaboration to push method boundaries, our scientific team and engineering staff ensure a seamless integration. We accelerate your internal workflows while maintaining the highest standards of data security and scientific rigor.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Partnership Models
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
                title: "Co-Development Projects",
                description: "Partner with our scientists and engineers to tailor seekrflow for your novel targets, from custom milestone schemes to bespoke force-field refinements.",
                features: ["Novel target focus", "Secure cloud deployment", "Method customization", "Direct collaboration"],
                gradient: "from-teal-500 to-blue-600",
                testId: "partnership-codevelopment"
              },
              {
                title: "Platform Integration",
                description: "Deploy Precision Kinetica on your secure cloud or on-premise infrastructure with full technical support, training, and seamless API integration into your informatics environment. ",
                features: ["Workflow integration", "API connectivity", "Training programs", "Technical support"],
                gradient: "from-blue-500 to-teal-600",
                testId: "partnership-integration"
              },
              {
                title: "Academic Collaboration",
                description: "Engage in joint research initiatives, method-development grants, and co-authored publications that advance the science of molecular kinetics and simulation. ",
                features: ["Joint publications", "Method development", "Conference presentations", "Grant applications"],
                gradient: "from-emerald-500 to-blue-600",
                testId: "partnership-academic"
              }
            ].map((partnership, index) => (
              <motion.div key={partnership.title} variants={fadeInUp}>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full group" data-testid={partnership.testId}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${partnership.gradient} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-slate-800 mb-4">{partnership.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-1">{partnership.description}</p>
                    <div className="space-y-2">
                      {partnership.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          {feature}
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

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our partnerships have delivered breakthrough insights across diverse therapeutic areas and target classes.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "HSP90 Inhibitor Program",
                company: "Leading Pharmaceutical Company",
                result: "R² of 0.97 across eight inhibitors covering residence times from seconds to hours",
                description: "Comprehensive characterization of HSP90 inhibitors with exceptional correlation between predicted and experimental residence times. Enabled rational optimization of lead compounds based on kinetic profiles.",
                metrics: ["R² = 0.97", "RMSE = 0.52", "8 compounds", "Log-scale accuracy"],
                testId: "success-hsp90"
              },
              {
                title: "JAK Selectivity Analysis",
                company: "Biotech Research Consortium", 
                result: "Spearman correlation of 0.95 for threonine-tyrosine kinase inhibitors",
                description: "Recovered isoform-specific residence times between JAK2 and JAK3 that directly inform selective lead design. Addressed complex allosteric unbinding mechanisms with unprecedented accuracy.",
                metrics: ["Spearman ρ = 0.95", "JAK2/JAK3 selectivity", "Allosteric mechanisms", "Lead optimization"],
                testId: "success-jak"
              }
            ].map((story, index) => (
              <motion.div key={story.title} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-teal-50 hover:shadow-lg transition-all duration-300 h-full" data-testid={story.testId}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-sm text-teal-600 font-semibold mb-2">{story.company}</div>
                    <h3 className="font-heading font-semibold text-2xl text-slate-800 mb-4">{story.title}</h3>
                    <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-teal-500">
                      <p className="text-slate-800 font-medium">{story.result}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-1">{story.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-sm text-slate-600 bg-white rounded px-3 py-1">
                          {metric}
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

      {/* Partnership Benefits */}
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
              Partnership Benefits
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
                benefit: "Accelerated Discovery",
                description: "Reduce lead optimization timelines from years to months",
                icon: "🚀",
                testId: "benefit-acceleration"
              },
              {
                benefit: "Reduced Risk",
                description: "Make informed go/no-go decisions based on kinetic data",
                icon: "🎯",
                testId: "benefit-risk"
              },
              {
                benefit: "Cost Efficiency",
                description: "Minimize late-stage failures through early kinetic profiling",
                icon: "💰",
                testId: "benefit-cost"
              },
              {
                benefit: "Scientific Excellence",
                description: "Co-author high-impact publications and presentations",
                icon: "🏆",
                testId: "benefit-excellence"
              }
            ].map((benefit, index) => (
              <motion.div key={benefit.benefit} variants={fadeInUp}>
                <Card className="bg-white hover:shadow-lg transition-all duration-300 text-center h-full" data-testid={benefit.testId}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">{benefit.benefit}</h3>
                    <p className="text-slate-600 flex-1">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Interested in partnering?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's discuss how Precision Kinetica can accelerate your drug discovery programs with cutting-edge kinetic insights.
            </p>
            <Link href="/contact" data-testid="button-start-partnership">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 px-8 py-4 rounded-full text-lg font-semibold">
                Start a Partnership →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
