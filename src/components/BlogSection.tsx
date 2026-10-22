import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 sm:py-24 bg-brand-bg content-auto">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <Reveal direction="up">
            <span className="eyebrow-badge">Blog Posts</span>
            <h2 className="text-[clamp(2.15rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink">
              Our Latest News
              <br />
              &amp; Updates.
            </h2>
          </Reveal>

          <Reveal direction="up" delayMs={100}>
            <Link href="/blog" className="btn-pill-dark group self-start sm:self-auto">
              <span>Read All Articles</span>
              <span className="arrow-circle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </Reveal>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, idx) => (
            <Reveal key={post.slug} direction="up" delayMs={idx * 120}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="bg-brand-surface rounded-3xl p-5 flex flex-col justify-between group hover-lift cursor-pointer h-full border border-brand-border shadow-xs">
                  <div>
                    <div
                      className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:h-[240px] mb-5"
                      style={{ position: "relative" }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Badge tags */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                          {post.time}
                        </span>
                        <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                          {post.comments} comments
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-[20px] sm:text-[21px] font-medium text-brand-ink leading-snug tracking-tight group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[14px] text-brand-text-body leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-5 border-t border-brand-border text-[13px] text-brand-text-muted">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-[10px] font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="font-medium text-brand-ink group-hover:text-brand-primary transition-colors">
                        {post.author}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
