import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Aquelis",
    };
  }
  return {
    title: `${post.title} | Aquelis Pool Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function SingleBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text-body overflow-x-hidden">
      <Navbar />

      {/* Header & Article Intro */}
      <article className="pt-8 sm:pt-12 pb-16 sm:pb-20">
        <div className="section-container max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm">
            <Link
              href="/"
              className="text-brand-text-muted hover:text-brand-text-primary transition-colors font-semibold"
            >
              Home
            </Link>
            <span className="text-brand-text-muted">&gt;</span>
            <Link
              href="/blog"
              className="text-brand-text-muted hover:text-brand-text-primary transition-colors font-semibold"
            >
              Blog
            </Link>
            <span className="text-brand-text-muted">&gt;</span>
            <span className="text-brand-text-primary font-medium truncate max-w-[180px] sm:max-w-md">
              {post.title}
            </span>
          </div>

          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs font-semibold text-brand-text-muted bg-black/5 px-3 py-1.5 rounded-full">
              {post.time}
            </span>
            <span className="text-xs text-brand-text-muted">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.25rem,4.5vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-brand-text-primary mb-8">
            {post.title}
          </h1>

          {/* Author bar */}
          <div className="flex items-center justify-between pb-6 border-b border-brand-border mb-8 sm:mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-surface shadow-sm shrink-0" style={{ position: "relative" }}>
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-brand-text-primary">{post.author}</h4>
                <p className="text-xs text-brand-text-muted">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#share"
                className="text-xs font-semibold px-4 py-2 rounded-full bg-brand-surface text-brand-text-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm border border-brand-border"
              >
                Share Article ↗
              </a>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative rounded-3xl overflow-hidden h-[260px] sm:h-[440px] md:h-[480px] shadow-sm mb-10 sm:mb-12 border border-brand-border" style={{ position: "relative" }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Excerpt Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border-l-4 border-brand-primary border border-brand-border shadow-sm mb-10">
            <p className="text-[17px] sm:text-[19px] font-medium leading-relaxed text-brand-text-primary italic">
              &ldquo;{post.excerpt}&rdquo;
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-[16px] sm:text-[17px] leading-relaxed text-brand-text-body">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-brand-surface border border-brand-border shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-brand-primary" style={{ position: "relative" }}>
              <Image
                src={post.authorAvatar}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary block mb-1">
                Written by
              </span>
              <h3 className="text-xl font-bold text-brand-text-primary mb-1">{post.author}</h3>
              <p className="text-xs text-brand-text-muted mb-3">{post.authorRole}</p>
              <p className="text-sm text-brand-text-body leading-relaxed">
                Dedicated to advancing aquatic engineering standards, water quality science, and turnkey luxury pool management throughout New Jersey.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 sm:py-20 bg-brand-subtle border-t border-brand-border">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <span className="eyebrow-badge">Keep Reading</span>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium text-brand-text-primary tracking-tight">
                Related Articles.
              </h2>
            </div>
            <Link href="/blog" className="btn-pill-dark group">
              <span>View All</span>
              <span className="arrow-circle group-hover:translate-x-0.5 transition-transform">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="block group">
                <div className="bg-brand-surface rounded-3xl p-5 border border-brand-border shadow-sm hover-lift h-full flex flex-col justify-between">
                  <div>
                    <div className="relative rounded-2xl overflow-hidden h-[200px] mb-4" style={{ position: "relative" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <span className="text-xs font-bold text-brand-primary block mb-2">
                      {item.category} • {item.time}
                    </span>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-brand-text-primary leading-snug group-hover:text-brand-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs text-brand-text-muted pt-4 border-t border-brand-border block">
                    {item.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
