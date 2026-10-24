import { motion } from "motion/react";
import { BLOG_POSTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-20 md:py-24 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
        >
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1]">Latest Insights</h2>
          <a href="#blog" className="font-label text-teal-deep text-sm hover:underline">
            View All Posts →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={cn(
                "rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow",
                post.dark ? "bg-navy" : "bg-ivory",
              )}
            >
              <div className="overflow-hidden h-52 bg-gray-100">
                <img src={post.image} alt={(post as { alt?: string }).alt ?? post.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 py-5">
                <span
                  className={cn(
                    "glass-card-light rounded-full px-3 py-1 font-label text-xs",
                    post.dark ? "text-white/60" : "text-navy/60",
                  )}
                  style={post.dark ? { background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" } : {}}
                >
                  {post.date}
                </span>
                <h3
                  className={cn(
                    "font-heading italic text-xl mt-3 leading-tight",
                    post.dark ? "text-white" : "text-navy",
                  )}
                >
                  {post.title}
                </h3>
                <p
                  className={cn(
                    "font-body text-sm mt-3 leading-relaxed",
                    post.dark ? "text-white/65" : "text-text-muted",
                  )}
                >
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className={cn(
                    "inline-block mt-5 font-label text-xs hover:underline",
                    post.dark ? "text-white/80" : "text-teal-deep",
                  )}
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
