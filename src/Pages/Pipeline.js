import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";

const Pipeline = () => {
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-800 mb-6">
              Pipeline
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our workflow unfolds as a continuous story rather than discrete steps. It begins with structure preparation and delivers comprehensive kinetic and thermodynamic profiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="py-0 bg-gray-50 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full h-full min-h-[500px]">

          {/* Left: Full-height image */}
          <div className="lg:w-1/2 w-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/5878510/pexels-photo-5878510.jpeg"
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
                Complete Automated Workflow
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                From structure preparation through final analysis, our pipeline handles every step automatically. 
                The uploaded complex is split into receptor and ligand, parameterized, solvated with physiological 
                ion concentration, and energy-minimized. Enhanced-sampling techniques generate realistic conformations 
                for each milestone cell, ensuring robust initialization before parallel simulations begin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Pipeline Steps */}
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
              Pipeline Components
            </h2>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Structure Preparation",
                description: "The uploaded complex is split into receptor and ligand, parameterized using espaloma force fields, solvated with physiological ion concentration, and energy-minimized to prepare for simulation.",
                details: ["Complex splitting", "Force field parameterization", "Solvation with ions", "Energy minimization"],
                gradient: "from-slate-50 to-teal-50",
                testId: "step-structure-prep"
              },
              {
                title: "Reaction Coordinate Definition",
                description: "A one-dimensional reaction coordinate, defined by the center-of-mass distance of binding-site residues, anchors a tessellation of milestones that track progress from bound to unbound states.",
                details: ["Center-of-mass distance", "Binding-site residues", "Milestone tessellation", "Progress tracking"],
                gradient: "from-slate-50 to-blue-50",
                testId: "step-reaction-coordinate"
              },
              {
                title: "Enhanced Sampling",
                description: "Enhanced-sampling techniques such as steered MD, metadynamics or random-acceleration MD generate realistic conformations for each milestone cell, ensuring robust initialization.",
                details: ["Steered molecular dynamics", "Metadynamics simulations", "Random-acceleration MD", "Robust initialization"],
                gradient: "from-slate-50 to-emerald-50",
                testId: "step-enhanced-sampling"
              },
              {
                title: "Parallel Simulations",
                description: "All simulations run in parallel—unbiased MD to capture dissociation kinetics and Brownian-dynamics to capture association rates—maximizing computational efficiency.",
                details: ["Unbiased MD simulations", "Brownian dynamics", "Parallel execution", "Kinetic rate capture"],
                gradient: "from-slate-50 to-purple-50",
                testId: "step-parallel-sims"
              },
              {
                title: "Milestoning Analysis", 
                description: "Milestoning theory assembles transition statistics into mean first-passage times and free-energy profiles, delivering comprehensive kinetic and thermodynamic characterization.",
                details: ["Transition statistics", "First-passage times", "Free-energy profiles", "Kinetic characterization"],
                gradient: "from-slate-50 to-orange-50",
                testId: "step-analysis"
              }
            ].map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp}>
                <Card className={`bg-gradient-to-br ${step.gradient} border border-slate-200 hover:shadow-lg transition-all duration-300`} data-testid={step.testId}>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl mr-4 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <h3 className="font-heading font-semibold text-2xl text-slate-800">{step.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <Badge key={detailIndex} variant="secondary" className="mr-2">
                              {detail}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <img 
                          src={`https://images.unsplash.com/photo-155975714${8 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450`}
                          alt={`${step.title} visualization`}
                          className="rounded-lg shadow-lg w-full h-auto"
                          data-testid={`img-step-${index + 1}`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simulation Parameters */}
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
              Simulation Parameters
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explicit-solvent MD simulations execute within each cell using optimized parameters for maximum accuracy and efficiency.
            </p>
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
                parameter: "200 ns",
                description: "Default simulation time per Voronoi cell",
                icon: "⏱️",
                testId: "param-time"
              },
              {
                parameter: "OpenMM",
                description: "GPU-accelerated molecular dynamics engine",
                icon: "⚡",
                testId: "param-engine"
              },
              {
                parameter: "TIP3P",
                description: "Water model with physiological conditions",
                icon: "💧",
                testId: "param-water"
              },
              {
                parameter: "Reflective",
                description: "Boundary conditions for enhanced sampling",
                icon: "🔄",
                testId: "param-boundaries"
              }
            ].map((param, index) => (
              <motion.div key={param.parameter} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-teal-50 hover:shadow-lg transition-all duration-300 text-center h-full" data-testid={param.testId}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-4xl mb-4">{param.icon}</div>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text mb-2">
                      {param.parameter}
                    </div>
                    <p className="text-slate-600 flex-1">{param.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Output Metrics */}
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
              Pipeline Outputs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The result is a rigorously derived transition-rate matrix that yields comprehensive kinetic and thermodynamic profiles.
            </p>
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
                title: "Association Rates (kon)",
                description: "Quantitative measurement of binding kinetics from Brownian dynamics simulations",
                units: "M⁻¹s⁻¹",
                testId: "output-kon"
              },
              {
                title: "Dissociation Rates (koff)",
                description: "Residence time characterization from unbiased molecular dynamics trajectories",
                units: "s⁻¹",
                testId: "output-koff"
              },
              {
                title: "Free Energy (ΔG)",
                description: "Thermodynamic binding affinity landscapes along reaction coordinates",
                units: "kcal/mol",
                testId: "output-free-energy"
              }
            ].map((output, index) => (
              <motion.div key={output.title} variants={fadeInUp}>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full" data-testid={output.testId}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{output.units}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-slate-800 mb-4">{output.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-1">{output.description}</p>
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

export default Pipeline;
