import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";
import { db } from "../firebase"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Research = () => {
  const [newsList, setNewsList] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(collection(db, "news"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);

        const newsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date?.seconds
              ? new Date(data.date.seconds * 1000)
              : null,
          };
        });

        setNewsList(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // gradient mapping based on type
  const gradientMap = {
    Publication: "from-teal-500 to-blue-600",
    Conference: "from-blue-500 to-teal-600",
    Media: "from-emerald-500 to-blue-600",
    Default: "from-slate-400 to-slate-600",
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
            transition={{ duration: 0.8 }}
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

          {/* News Cards */}
          <div className="space-y-8">
            {newsList.length > 0 ? (
              newsList.map((step,news) => (
                <motion.div
                  key={step.title} variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-br ${step.gradient} border border-slate-200 hover:shadow-lg transition-all duration-300`} data-testid={news.testId}>
                    <CardContent className="p-6">
                      
                      {/* Gradient Icon/Header */}
                      {/* <div
                        className={`w-16 h-16 bg-gradient-to-br ${
                          gradientMap[news.type] || gradientMap.Default
                        } rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <div className="w-8 h-8 bg-white rounded-lg"></div>
                      </div> */}

                      {/* Date + Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-teal-600 font-semibold mb-2">
                          {news.date
                            ? news.date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : ""}
                        </p>
                        {news.type && (
                          <Badge variant="outline" className="text-xs px-2 py-1 text-sm text-teal-600 font-semibold mb-2">
                            {news.type}
                          </Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {news.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                        {news.shortDescription || news.description?.slice(0, 120) + "..."}
                      </p>

                      {/* Read More Button */}
                      {expandedId !== news.id && (
                        <button
                          onClick={() => toggleExpand(news.id)}
                          className="text-blue-600 text-sm font-medium hover:underline text-sm text-teal-600 font-semibold mb-2"
                        >
                          Read More →
                        </button>
                      )}

                      {/* Expanded Body */}
                      <AnimatePresence>
                        {expandedId === news.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-4 text-gray-700 leading-relaxed text-sm"
                          >
                            <div>{news.body}</div>
                            {/* Read Less button below body */}
                            <button
                              onClick={() => toggleExpand(news.id)}
                              className="text-sm text-teal-600 font-semibold mb-2 hover:underline"
                            >
                              Read Less ↑
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">No news available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
