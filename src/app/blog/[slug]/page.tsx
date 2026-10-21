import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { blogPosts, BlogPost } from "@/data/blogPosts";

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
      title: "Article Not Found | Jalsarah",
    };
  }
  return {
    title: `${post.title} | Jalsarah Pool Journal`,
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
    <main className="min-h-screen bg-[#F3F3F5] text-[#0F1011] overflow-x-hidden">
      <Navbar />

      {/* Header & Article Intro */}
      <article className="pt-10 pb-20">
        <div className="section-container max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold"
            >
              Home
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <Link
              href="/blog"
              className="text-[#8F9096] hover:text-[#0F1011] transition-colors font-semibold"
            >
              Blog
            </Link>
            <span className="text-[#8F9096]">&gt;</span>
            <span className="text-[#0F1011] font-medium truncate max-w-[200px] sm:max-w-md">
              {post.title}
            </span>
          </div>

          {/* Category & Read Time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#1537EE] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs font-semibold text-[#8F9096] bg-black/5 px-3 py-1.5 rounded-full">
              {post.time}
            </span>
            <span className="text-xs text-[#8F9096]">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.25rem,4.5vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0F1011] mb-8">
            {post.title}
          </h1>

          {/* Author bar */}
          <div className="flex items-center justify-between pb-8 border-b border-[#D8D8DA] mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0" style={{ position: "relative" }}>
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-[#0F1011]">{post.author}</h4>
                <p className="text-xs text-[#59595D]">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#share"
                className="text-xs font-semibold px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all shadow-sm border border-black/5"
              >
                Share Article ↗
              </a>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative rounded-3xl overflow-hidden h-[340px] sm:h-[480px] shadow-sm mb-12" style={{ position: "relative" }}>
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
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-[#1537EE] shadow-sm mb-10">
            <p className="text-[17px] sm:text-[19px] font-medium leading-relaxed text-[#0F1011] italic">
              &ldquo;{post.excerpt}&rdquo;
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-[16px] sm:text-[17px] leading-relaxed text-[#3B3B3D]">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-14 p-8 rounded-3xl bg-white border border-black/5 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#1537EE]" style={{ position: "relative" }}>
              <Image
                src={post.authorAvatar}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1537EE] block mb-1">
                Written by
              </span>
              <h3 className="text-xl font-bold text-[#0F1011] mb-1">{post.author}</h3>
              <p className="text-xs text-[#8F9096] mb-3">{post.authorRole}</p>
              <p className="text-sm text-[#59595D] leading-relaxed">
                Dedicated to advancing aquatic engineering standards, water quality science, and turnkey luxury pool management throughout New Jersey.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-20 bg-[#ECECED] border-t border-[#D8D8DA]">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="eyebrow-badge">Keep Reading</span>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium text-[#0F1011] tracking-tight">
                Related Articles.
              </h2>
            </div>
            <Link href="/blog" className="btn-pill-dark group">
              <span>View All</span>
              <span className="arrow-circle group-hover:translate-x-0.5 transition-transform">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="block group">
                <div className="bg-white rounded-3xl p-5 border border-black/5 shadow-sm hover-lift h-full flex flex-col justify-between">
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
                    <span className="text-xs font-bold text-[#1537EE] block mb-2">
                      {item.category} • {item.time}
                    </span>
                    <h3 className="text-[18px] font-bold text-[#0F1011] leading-snug group-hover:text-[#1537EE] transition-colors mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#8F9096] pt-4 border-t border-[#F0F0F2] block">
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
