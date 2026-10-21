import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Team() {
  const members = [
    {
      name: "Anuradha Selvi",
      role: "Chief Engineer, Aquelis.",
      image: "/images/17_our_team_members__rectangle_14.jpg",
      featured: true,
    },
    {
      name: "Daniel Carter",
      role: "Senior Pool Architect",
      image: "/images/18_our_team_members__rectangle_11.jpg",
      featured: false,
    },
    {
      name: "Miller Jones",
      role: "Lead Maintenance Specialist",
      image: "/images/19_our_team_members__rectangle_13.jpg",
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-[#F3F3F5] content-auto">
      <div className="section-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <Reveal direction="up">
              <span className="eyebrow-badge">Our Team Members</span>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0F1011]">
                Our Professional
                <br />
                Expert.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 pt-2">
            <Reveal direction="up" delayMs={100}>
              <p className="text-[15px] leading-relaxed text-[#59595D]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <Reveal key={idx} direction="up" delayMs={idx * 120}>
              <div className={`rounded-3xl p-5 flex flex-col justify-between group hover-lift cursor-pointer ${member.featured ? "bg-[#0F1011] border-2 border-[#1537EE]" : "bg-[#E7E7E9]"}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-[20px] font-medium tracking-tight transition-colors ${member.featured ? "text-white group-hover:text-[#F2FF59]" : "text-[#0F1011] group-hover:text-[#1537EE]"}`}>
                      {member.name}
                    </h3>
                    <p className={`text-[13px] ${member.featured ? "text-[#8F9096]" : "text-[#59595D]"}`}>{member.role}</p>
                  </div>

                  {/* Social Icon / Arrow Link */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm group-hover:scale-110 transition-all shadow-sm ${member.featured ? "bg-[#1537EE] text-white group-hover:bg-[#F2FF59] group-hover:text-[#0F1011]" : "bg-white text-[#0F1011] group-hover:bg-[#1537EE] group-hover:text-white"}`}>
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
