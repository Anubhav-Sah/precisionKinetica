import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";
import { db } from "../firebase"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Research = () => {
  const [newsList, setNewsList] = useState([]);

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

          {/* News Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.length > 0 ? (
              newsList.map((news) => (
                <motion.div
                  key={news.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Date + Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-blue-600">
                          {news.date
                            ? news.date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : ""}
                        </p>
                        {news.type && (
                          <Badge variant="outline">{news.type}</Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {news.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm flex-1">
                        {news.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No news available
              </p>
            )}
          </div>

          {/* View All News Button */}
          
        </div>
      </section>
    </div>
  );
};

export default Research;
