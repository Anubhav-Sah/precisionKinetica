import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Badge } from "../Components/ui/badge";
import { newsData } from "../data/newsData"; // ✅ Import from global file

const Research = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Since our seed round in July 2025, we've presented at leading
              conferences and been featured in top-tier publications for our
              physics-AI approach.
            </p>
          </motion.div>

          {/* Dynamic Responsive Grid */}
          <motion.div
            className="grid gap-8 
                       grid-cols-1 "
            style={{ "--cols": newsData.length }}
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {newsData.map((news, index) => (
              <motion.div key={news.title} variants={fadeInUp}>
                <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    {/* LEFT SIDE — Text */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-teal-600 font-semibold">
                          {news.date}
                        </div>
                        <Badge variant="outline">{news.type}</Badge>
                      </div>

                      <h3 className="font-heading font-semibold text-xl text-slate-800 mb-3">
                        {news.title}
                      </h3>

                      <p className="text-slate-600 mb-4">{news.description}</p>

                      {expandedIndex === index && (
                        <p className="text-slate-700 mt-2">{news.body}</p>
                      )}

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-teal-600 hover:text-teal-700 p-0 h-auto mt-2"
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index ? null : index)
                        }
                      >
                        {expandedIndex === index ? "Show Less ↑" : "Read More →"}
                      </Button>
                    </div>

                    {/* RIGHT SIDE — Image */}
                    {news.image && (
                      <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-40 overflow-hidden rounded-lg shadow-sm">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
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
