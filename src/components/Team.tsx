import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Team() {
  const members = [
    {
      name: "Anuradha Selvi",
      role: "Chief Engineer, Aquelis.",
      image: "/images/team_anuradha_centered.webp",
      featured: true,
    },
    {
      name: "Daniel Carter",
      role: "Senior Pool Architect",
      image: "/images/team_daniel_centered.webp",
      featured: false,
    },
    {
      name: "Miller Jones",
      role: "Lead Maintenance Specialist",
      image: "/images/team_miller_centered.webp",
      featured: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-brand-subtle content-auto">
      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <Reveal direction="up">
              <span className="eyebrow-badge">Our Team Members</span>
              <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-brand-ink">
                Our Professional
                <br />
                Expert.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 pt-1 sm:pt-2">
            <Reveal direction="up" delayMs={100}>
              <p className="text-[15px] leading-relaxed text-brand-text-body">
                We specialize in providing top-notch pool service and maintenance to
                ensure your pool remains a safe, clean, and inviting space for
                relaxation and recreation. Our certified technicians regularly test and
                balance the water chemistry, maintaining optimal pH, alkalinity, and
                chlorine levels for a safe and enjoyable swimming experience.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {members.map((member, idx) => (
            <Reveal key={idx} direction="up" delayMs={idx * 120}>
              <div
                className={`rounded-3xl p-5 flex flex-col justify-between group hover-lift cursor-pointer ${
                  member.featured
                    ? "bg-brand-ink border-2 border-brand-primary shadow-lg"
                    : "bg-brand-surface border border-brand-border shadow-xs"
                }`}
              >
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] mb-5"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3
                      className={`text-[19px] sm:text-[20px] font-medium tracking-tight transition-colors ${
                        member.featured
                          ? "text-white group-hover:text-[#38E1EC]"
                          : "text-brand-ink group-hover:text-brand-primary"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-[13px] ${
                        member.featured ? "text-white/70" : "text-brand-text-muted"
                      }`}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Social Icon / Arrow Link */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm group-hover:scale-110 transition-all shadow-xs flex-shrink-0 ${
                      member.featured
                        ? "bg-brand-primary text-white group-hover:bg-[#38E1EC] group-hover:text-brand-ink"
                        : "bg-brand-subtle text-brand-ink group-hover:bg-brand-primary group-hover:text-white"
                    }`}
                  >
                    ↗
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
