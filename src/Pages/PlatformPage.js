import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";

const Platform = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="pt-20 relative">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 opacity-20"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-800 mb-6">
              Platform
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At the core of our technology lies an end-to-end pipeline that merges three state-of-the-art advances into a single, fully automated process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + Pipeline Section */}
<section className="py-0 bg-gray-50 relative overflow-hidden">
  <div className="flex flex-col lg:flex-row w-full h-full">

    {/* Left: Full-height image */}
    <div className="lg:w-1/2 w-full h-[400px] lg:h-auto">
      <img
        className="w-full h-full object-cover"
        src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
        alt="Automated Milestoning Pipeline"
      />
    </div>

    {/* Right: Text */}
    <motion.div
      className="lg:w-1/2 w-full flex items-center p-8 bg-white"
      {...fadeInUp}
    >
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          Automated Milestoning Pipeline
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          First, receptor and ligand are each parameterized using our QM-trained
          espaloma force field model, capturing subtle electronic effects.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          Next, configurational space is partitioned into one-dimensional Voronoi
          cells along the center-of-mass reaction coordinate, ensuring systematic
          coverage of binding and unbinding pathways.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Finally, explicit-solvent MD simulations execute within each cell—by default
          200 ns per cell using OpenMM with TIP3P water and reflective-boundary
          conditions—while parallel Brownian-dynamics runs define long-range
          association.
        </p>
      </div>
    </motion.div>
  </div>
</section>


      {/* Core Technologies */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-blue-100 opacity-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Core Technologies
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
                title: "SEEKR2 Milestoning",
                description: "Advanced Voronoi milestoning technology for systematic coverage of binding and unbinding pathways with automated milestone placement.",
                features: ["Automated milestone placement", "Voronoi cell partitioning", "Center-of-mass reaction coordinate", "Systematic pathway coverage"],
                testId: "tech-seekr2"
              },
              {
                title: "Espaloma Force Fields",
                description: "QM-trained neural network force fields that capture subtle electronic effects for enhanced accuracy in molecular simulations.",
                features: ["QM-level accuracy", "Neural network architecture", "Electronic effects capture", "Transferable parameterization"],
                testId: "tech-espaloma"
              },
              {
                title: "OpenMM Acceleration",
                description: "GPU-accelerated molecular dynamics simulations with explicit solvent and reflective boundary conditions for optimal performance.",
                features: ["GPU acceleration", "Explicit solvent modeling", "TIP3P water model", "Reflective boundaries"],
                testId: "tech-openmm"
              }
            ].map((tech) => (
              <motion.div
                key={tech.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full" data-testid={tech.testId}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-slate-800 mb-4">{tech.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-1">{tech.description}</p>
                    <div className="space-y-2">
                      {tech.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="mr-2">{feature}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Process */}
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
              Workflow Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our workflow unfolds as a continuous story rather than discrete steps, delivering comprehensive kinetic profiles.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { step: "01", title: "Structure Preparation", description: "Upload complex, split into receptor and ligand, parameterize with espaloma" },
              { step: "02", title: "Tessellation", description: "One-dimensional reaction coordinate anchors milestone tessellation" },
              { step: "03", title: "Enhanced Sampling", description: "Steered MD, metadynamics, or random-acceleration for initialization" },
              { step: "04", title: "Parallel Simulations", description: "Unbiased MD for dissociation, Brownian dynamics for association" },
              { step: "05", title: "Analysis", description: "Milestoning theory assembles transition statistics into kinetic profiles" }
            ].map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="bg-gradient-to-br from-slate-50 to-teal-50 hover:shadow-lg transition-all duration-300 h-full" data-testid={`workflow-step-${step.step}`}>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-800 mb-6">
              Platform Performance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Rigorously derived transition-rate matrix yields kon, koff, and ΔG without any manual intervention.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { metric: "200 ns", description: "Default simulation time per Voronoi cell", testId: "metric-simulation-time" },
              { metric: "Hours", description: "From PDB upload to kinetic profile delivery", testId: "metric-delivery-time" },
              { metric: "Automated", description: "Zero manual intervention required", testId: "metric-automation" },
              { metric: "GPU", description: "OpenMM acceleration for maximum performance", testId: "metric-acceleration" }
            ].map((metric) => (
              <motion.div key={metric.metric} variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="bg-white hover:shadow-lg transition-all duration-300 text-center" data-testid={metric.testId}>
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text mb-2">
                      {metric.metric}
                    </div>
                    <p className="text-slate-600">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Platform;
