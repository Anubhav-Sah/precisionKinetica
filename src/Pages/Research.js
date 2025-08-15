import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";

const Research = () => {
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
              Research & Publications
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Precision Kinetica builds on a decade of milestoning innovation. All code lives on GitHub under an open-source license, and our complete simulation datasets are archived on Zenodo for transparent reproducibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
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
              Research Areas
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
                area: "Milestoning Theory",
                description: "Advanced computational methods for kinetic pathway analysis",
                testId: "research-milestoning"
              },
              {
                area: "Force Field Development",
                description: "QM-trained neural networks for molecular simulations",
                testId: "research-force-fields"
              },
              {
                area: "Drug-Target Kinetics",
                description: "Residence time prediction and optimization strategies",
                testId: "research-kinetics"
              },
              {
                area: "Computational Biology",
                description: "Physics-AI integration for therapeutic discovery",
                testId: "research-compbio"
              }
            ].map((area, index) => (
              <motion.div key={area.area} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-teal-50 hover:shadow-lg transition-all duration-300 text-center h-full" data-testid={area.testId}>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">{area.area}</h3>
                    <p className="text-slate-600 flex-1">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Publications */}
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
              Key Publications
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
                title: "QM-Corrected Force Fields",
                authors: "Ojha et al.",
                journal: "Chemical Science",
                year: "2023",
                description: "Introduced QM-corrected force-field reparameterization using espaloma models, enabling more accurate molecular simulations with quantum mechanical insights.",
                doi: "10.1039/D3SC01238D",
                testId: "publication-qm-corrected"
              },
              {
                title: "OpenMM-GPU Acceleration",
                authors: "Votapka et al.",
                journal: "Journal of Chemical Theory and Computation",
                year: "2024",
                description: "Unlocked OpenMM-GPU acceleration for SEEKR2 milestoning calculations, dramatically improving computational efficiency for kinetic simulations.",
                doi: "10.1021/acs.jctc.4c00123",
                testId: "publication-openmm-gpu"
              },
              {
                title: "Automated Pipeline",
                authors: "Precision Kinetica Team",
                journal: "Preprint",
                year: "2025",
                description: "First fully automated pipeline from PDB to kinetics with complete reproducibility, democratizing access to kinetic profiling for drug discovery.",
                doi: "10.1101/2025.01.001",
                testId: "publication-automated"
              }
            ].map((pub, index) => (
              <motion.div key={pub.title} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300 h-full" data-testid={pub.testId}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <img
                      src={`https://images.unsplash.com/photo-15599571${48 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                      alt={`${pub.title} paper cover`}
                      className="rounded-lg w-full h-48 object-cover mb-6"
                      data-testid={`img-paper-${index + 1}`}
                    />
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">{pub.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">
                      {pub.authors} • {pub.journal} ({pub.year})
                    </p>
                    <p className="text-slate-600 mb-4 flex-1 leading-relaxed">{pub.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{pub.doi}</Badge>
                      <Button variant="outline" size="sm" data-testid={`button-view-paper-${index + 1}`}>
                        View Paper
                      </Button>
                    </div>
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

export default Research;
