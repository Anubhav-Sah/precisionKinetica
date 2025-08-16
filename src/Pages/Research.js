import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";

const Research = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
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
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Precision Kinetica builds on a decade of milestoning innovation.
              All code lives on GitHub under an open-source license, and our
              complete simulation datasets are archived on Zenodo for
              transparent reproducibility.
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                area: "Milestoning Theory",
                description:
                  "Advanced computational methods for kinetic pathway analysis",
                testId: "research-milestoning",
              },
              {
                area: "Force Field Development",
                description:
                  "QM-trained neural networks for molecular simulations",
                testId: "research-force-fields",
              },
              {
                area: "Drug-Target Kinetics",
                description:
                  "Residence time prediction and optimization strategies",
                testId: "research-kinetics",
              },
              {
                area: "Computational Biology",
                description:
                  "Physics-AI integration for therapeutic discovery",
                testId: "research-compbio",
              },
            ].map((area, index) => (
              <motion.div key={area.area} variants={fadeInUp}>
                <Card
                  className="bg-gradient-to-br from-slate-50 to-teal-50 hover:shadow-lg transition-all duration-300 text-center h-full"
                  data-testid={area.testId}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">
                      {area.area}
                    </h3>
                    <p className="text-slate-600 flex-1 text-sm sm:text-base">
                      {area.description}
                    </p>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title:
                  "SEEKR2: Versatile Multiscale Milestoning Utilizing the OpenMM Molecular Dynamics Engine",
                authors:
                  "Lane W. Votapka; Andrew M. Stokely; Anupam A. Ojha; Rommie E. Amaro",
                journal: "Journal of Chemical Information and Modeling",
                year: "2022",
                description:
                  "SEEKR2 (simulation-enabled estimation of kinetic rates version 2) combines molecular dynamics and Brownian dynamics to estimate kinetics and thermodynamics—offering speed improvements, extensibility, usability enhancements, and reduced cost with minimal accuracy loss.",
                link: "https://pubs.acs.org/doi/10.1021/acs.jcim.2c00501",
                testId: "publication-seekr2",
              },
              {
                title:
                  "Predicting Ligand Binding Kinetics Using a Markovian Milestoning with Voronoi Tessellations Multiscale Approach",
                authors: "Benjamin R. Jagger; Anupam A. Ojha; Rommie E. Amaro",
                journal: "Journal of Chemical Theory and Computation",
                year: "2020",
                description:
                  "Implementation of a Markovian milestoning with Voronoi tessellations approach that significantly reduces simulation cost.",
                link: "https://pubs.acs.org/doi/10.1021/acs.jctc.0c00495",
                testId: "publication-jctc-0c00495",
              },
              {
                title:
                  "Simulation-Driven Design of Stabilized SARS-CoV-2 Spike S2 Immunogens",
                authors:
                  "Xandra Nuqui; Lorenzo Casalino; Ling Zhou; Mohamed Shehata; et al.",
                journal: "bioRxiv (preprint)",
                year: "2024",
                description:
                  "Designed S2-only SARS-CoV-2 immunogens stabilized in a closed prefusion conformation, enhancing stability and immunogenicity against sarbecoviruses.",
                link: "https://www.biorxiv.org/content/10.1101/2023.10.24.563841v3",
                testId: "publication-nuqui-2023",
              },
              {
                title:
                  "Distinguishing Molecular Properties of OAT, OATP, and MRP Drug Substrates by Machine Learning",
                authors:
                  "Nigam A.K.; Momper J.D.; Ojha A.A.; Nigam S.K.",
                journal: "Pharmaceutics",
                year: "2024",
                description:
                  "Identifies molecular features influencing drug interactions with OATs, OATPs, and MRPs, providing insights for drug–metabolite interactions.",
                link: "https://www.mdpi.com/1999-4923/16/5/592",
                testId: "publication-pharmaceutics-592",
              },
              {
                title:
                  "Molecular Properties of Drugs Handled by Kidney OATs and Liver OATPs Revealed by Chemoinformatics and Machine Learning",
                authors:
                  "Nigam A.K.; Ojha A.A.; Li J.G.; Shi D.; Bhatnagar V.; et al.",
                journal: "Pharmaceutics",
                year: "2021",
                description:
                  "Chemoinformatics and ML identified eight molecular properties distinguishing drugs handled by liver OATPs vs. kidney OATs with accuracies between ~75% and 99%.",
                link: "https://www.mdpi.com/1999-4923/13/10/1720",
                testId: "publication-pharmaceutics-1720",
              },
            ].map((pub) => (
              <motion.div key={pub.title} variants={fadeInUp}>
                <Card
                  className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300 h-full"
                  data-testid={pub.testId}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{pub.authors}</p>
                    <p className="text-gray-700 mb-6 flex-1 text-sm md:text-base">
                      {pub.description}
                    </p>

                    {/* Journal + Button Row */}
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span className="text-sm text-gray-500 italic truncate">
                        {pub.journal}, {pub.year}
                      </span>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-200 text-center"
                      >
                        View Paper
                      </a>
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
