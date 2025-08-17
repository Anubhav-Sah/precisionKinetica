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
            date: data.date?.seconds ? new Date(data.date.seconds * 1000) : null,
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
  const floatingAnimation = {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // gradient mapping
  const gradientMap = {
    Publication: "from-teal-500 to-blue-600",
    Conference: "from-blue-500 to-teal-600",
    Media: "from-emerald-500 to-blue-600",
    Default: "from-slate-400 to-slate-600",
  };

  return (
    <div className="pt-20">

      <div className="container mx-auto px-6">

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
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-800 mb-6">
                News & Media
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Since our seed round in July 2025, we've presented at leading
                conferences and been featured in top-tier publications for our
                physics-AI approach.
              </p>
            </motion.div>
          </div>
        </section>


        {/* News Cards */}
        <div className="space-y-8">
          {newsList.length > 0 ? (
            newsList.map((news, index) => (
              <motion.div
                key={news.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card
                  className={`bg-white-400 ${gradientMap[news.type] || gradientMap.Default
                    } border border-slate-200 hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-2">
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
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-1 text-sm text-teal-600 font-semibold mb-2"
                        >
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
                      {news.shortDescription ||
                        (news.description
                          ? news.description.slice(0, 120)
                          : "")}
                    </p>

                    {/* Read More Button */}
                    {expandedId !== news.id && (
                      <button
                        onClick={() => toggleExpand(news.id)}
                        className="text-sm text-teal-600 font-semibold mb-2 hover:underline"
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
      {/* </section> */}
    </div>
  );
};

export default Research;
