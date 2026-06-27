import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, MapPin, ArrowRight, CheckCircle2, Circle, Sparkles, Briefcase, GraduationCap, Award, Users, Target, Rocket, Heart, MessageCircle, Music, BookOpen, Mountain, Footprints, Lightbulb, Globe, Plane, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import formalPhotoAsset from "@/assets/kavan-passport.png.asset.json";
const formalPhoto = formalPhotoAsset.url;

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#strengths", label: "What I Bring" },
  { href: "#experience", label: "Experience" },
  { href: "#direction", label: "Direction" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Strengths />
        <Experience />
        <Education />
        <Certifications />
        <Direction />
        <Leadership />
        <PeopleSkills />
        <Languages />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">KW</span>
          <span className="hidden sm:inline">Kavan Williams</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href="#contact">
            Get in touch <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(55% 50% at 85% 0%, oklch(0.88 0.04 75 / 0.8) 0%, transparent 60%), radial-gradient(50% 40% at 0% 30%, oklch(0.92 0.02 240 / 0.6) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <Badge variant="secondary" className="mb-6 gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to international opportunities
          </Badge>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            People First. <span className="text-primary">Commercially Minded.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Customer-facing professional with a background in hospitality, brand activation, and marketing — open to roles across hospitality, sales, customer success, marketing, and business management.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Get in touch
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="https://www.linkedin.com/in/kavan-williams-8683a631a" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Based in South Africa · open to relocation</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-accent/40 to-card shadow-[var(--shadow-elevated)]">
            <img src={formalPhoto} alt="Kavan Williams" className="aspect-[4/5] w-full object-contain" />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">BCom · Graduated 2024</div>
                <div className="text-sm font-semibold">Marketing & Business Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Profile() {
  return (
    <Section id="about" eyebrow="About" title="A customer-focused professional with a commercial mindset.">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-lg leading-relaxed text-foreground/80">
          <p>
            I've spent the past few years building experience at the intersection of customer engagement and commercial awareness — hospitality, brand campaigns, and direct customer interaction at scale.
          </p>
          <p>
            I hold a BCom in Marketing and Business Management, and I'm currently adding CRM, Salesforce, and AI workflow skills to that foundation.
          </p>
          <p>
            I'm pursuing an international career across multiple paths: hospitality and aviation, commercial and customer success roles, marketing and operations positions, and graduate or trainee programmes.
          </p>
          <p>
            I'm based in South Africa and open to relocation.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Target, label: "Focus", value: "Hospitality · Commercial · Marketing" },
            { icon: Sparkles, label: "Currently learning", value: "Salesforce · AI workflows" },
            { icon: Globe, label: "Availability", value: "International — open to relocation" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                  <div className="text-sm font-semibold">{s.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Strengths() {
  const items = [
    { icon: Users, title: "Customer Engagement at Scale", body: "Hundreds of customer interactions per shift — clear communication, attentive service, and steady delivery under pressure." },
    { icon: Heart, title: "Hospitality & Service Background", body: "Years of front-of-house experience: reading the room, anticipating needs, and creating considered guest experiences." },
    { icon: TrendingUp, title: "Marketing & Commercial Awareness", body: "BCom in Marketing & Business Management plus brand activation work for international FMCG campaigns." },
    { icon: Sparkles, title: "CRM & Business Tools", body: "HubSpot certified, Salesforce in progress, comfortable with Excel, Word and modern AI-assisted workflows." },
    { icon: ShieldCheck, title: "Resilience Under Pressure", body: "Long-distance runner. Calm in fast-paced environments and conflict situations — solution-focused and dependable." },
    { icon: Globe, title: "International Mindset", body: "Curious, adaptable, and ready to work across cultures, time zones and structured business environments." },
  ];
  return (
    <Section id="strengths" eyebrow="What I bring" title="Six things you can count on me for.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const ROLES = [
  {
    title: "Customer Engagement & Hospitality",
    org: "Hospitality Industry",
    period: "Mar 2024 – Sep 2025",
    points: [
      "Delivered consistent customer experience through attentive service, clear communication, and structured product recommendations.",
      "Managed 150–300 customer interactions per shift while maintaining service quality and operational pace.",
      "Built rapport quickly across diverse customer types and resolved conflict through empathetic, solution-focused communication.",
      "Supported onboarding and training of new team members — patient handovers and clear process explanation.",
      "Identified small operational improvements that reduced friction and lowered wastage.",
    ],
  },
  {
    title: "Brand Activation Representative",
    org: "JTI Campaigns",
    period: "2022 – 2023",
    points: [
      "Represented international FMCG brands in direct-to-consumer activations — translating product features into clear customer value.",
      "Coordinated with team leads and venues to deliver activations on schedule.",
      "Built quick rapport with customers in fast-paced, unfamiliar environments.",
    ],
  },
  {
    title: "Waiter",
    org: "Caspita Restaurant",
    period: "2019",
    points: [
      "Delivered efficient, attentive service in a busy restaurant environment.",
      "Built foundational communication, coordination, and customer service habits.",
    ],
  },
  {
    title: "Retail & Operations Intern",
    org: "Tekkie Town",
    period: "Jun 2018",
    points: [
      "Exposure to retail operations, warehouse processes, and in-store merchandising.",
      "Supported multiple departments including marketing and storefront operations.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Customer-facing roles with operational and commercial depth.">
      <div className="space-y-5">
        {ROLES.map((r) => (
          <div key={r.title} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] md:p-8">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-bold">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.org}</p>
              </div>
              <Badge variant="outline" className="rounded-full font-normal">{r.period}</Badge>
            </div>
            <ul className="space-y-2.5">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { degree: "Bachelor of Commerce — Marketing & Business Management Science", school: "IMM Graduate School", period: "2022 – 2024 · Graduated 2024" },
    { degree: "Diploma in Sound Production", school: "SAE Institute Cape Town", period: "2025" },
    { degree: "Bachelor of Hospitality Management (IIE)", school: "Pivoted to business focus mid-year", period: "Jan – Dec 2021" },
    { degree: "National Senior Certificate (Matric)", school: "Glenwood House School, George", period: "2019" },
  ];
  return (
    <Section id="education" eyebrow="Education" title="A foundation in business, marketing and hospitality.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((e) => (
          <div key={e.degree} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-semibold leading-snug">{e.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{e.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    { name: "HubSpot CRM", status: "Completed", done: true },
    { name: "HubSpot Inbound Sales", status: "In progress", done: false },
    { name: "Salesforce CRM", status: "In progress", done: false },
    { name: "Claude AI for Work", status: "In progress", done: false },
    { name: "Google Project Management", status: "Planned", done: false },
  ];
  return (
    <Section eyebrow="Certifications" title="Always learning — building credibility in CRM, AI, and project work.">
      <div className="grid gap-3 md:grid-cols-2">
        {certs.map((c) => (
          <div key={c.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            {c.done ? (
              <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
            ) : (
              <Circle className="h-6 w-6 shrink-0 text-muted-foreground" />
            )}
            <div className="flex-1">
              <div className="font-medium">{c.name}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.status}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Direction() {
  const paths = [
    { icon: Plane, label: "Hospitality & Aviation" },
    { icon: Briefcase, label: "Sales & Business Development" },
    { icon: Heart, label: "Customer Success" },
    { icon: TrendingUp, label: "Marketing Coordination" },
    { icon: Rocket, label: "Operations & Project Management" },
    { icon: GraduationCap, label: "Graduate & Trainee Programmes" },
  ];
  return (
    <Section id="direction" eyebrow="Where I'm heading" title="Multiple valid paths — one clear direction.">
      <p className="mb-8 max-w-3xl text-muted-foreground">
        I'm focused on international roles where customer-facing instinct, commercial awareness, and structured delivery matter. These are the directions I'm actively pursuing.
      </p>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {paths.map((p) => (
          <div key={p.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <span className="font-medium">{p.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Leadership() {
  const items = [
    { icon: Users, title: "Promotions team coordination", body: "Coordinated and supported a promotions team for a Cape Town music collective event in Stellenbosch — clear communication and reliable delivery under deadline." },
    { icon: GraduationCap, title: "University collaboration", body: "Led group projects, coordinating team deliverables, aligning stakeholders and meeting deadlines." },
    { icon: Briefcase, title: "Onboarding & training", body: "Supported onboarding and training of new staff in hospitality environments — patient, clear and team-first." },
    { icon: Rocket, title: "Marathon running", body: "Long-distance running builds discipline, resilience and the patience for compounding results." },
  ];
  return (
    <Section eyebrow="Leadership & Collaboration" title="How I show up for teams and customers.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PeopleSkills() {
  const items = [
    { icon: MessageCircle, title: "Active listening", body: "Hearing what customers actually need — not just what they say first." },
    { icon: Users, title: "Relationship building", body: "Building rapport quickly across cultures, teams and customer types." },
    { icon: Heart, title: "Empathy", body: "Understanding the human behind the conversation — even under pressure." },
    { icon: Sparkles, title: "Clear communication", body: "Framing value clearly and guiding people toward confident decisions." },
  ];
  return (
    <Section eyebrow="People skills" title="The human side of customer-facing work.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Languages() {
  return (
    <Section eyebrow="Languages" title="Languages.">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
          <span className="font-semibold">English</span>
          <Badge variant="secondary" className="rounded-full font-normal">Native</Badge>
        </div>
      </div>
    </Section>
  );
}

function Hobbies() {
  const items = [
    { icon: Footprints, label: "Long-distance running" },
    { icon: Mountain, label: "Hiking" },
    { icon: BookOpen, label: "Reading" },
    { icon: Lightbulb, label: "Learning new skills" },
    { icon: Music, label: "Music production" },
  ];
  return (
    <Section eyebrow="Hobbies" title="Outside of work.">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {items.map((h) => (
          <div key={h.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">
              <h.icon className="h-5 w-5" />
            </div>
            <span className="font-medium">{h.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Let's start a conversation.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Open to hospitality, aviation, sales, customer success, marketing, operations, and graduate programmes — locally in South Africa or internationally.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a href="mailto:kavanwilliams2001@gmail.com" className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 truncate font-semibold group-hover:text-primary">kavanwilliams2001@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/kavan-williams-8683a631a" target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                <div className="mt-1 truncate font-semibold group-hover:text-primary">kavan-williams</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="mt-1 font-semibold">073 620 1564</div>
              </div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/kavanwilliams2001@gmail.com"
            method="POST"
            onSubmit={() => setSent(true)}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
          >
            <input type="hidden" name="_subject" value="New message from kavanwilliams.com" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <div className="grid gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="name">Name</label>
                <input id="name" name="name" required className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <Button type="submit" size="lg" className="rounded-full">
                {sent ? "Sending…" : "Send message"} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm">
            <Award className="mr-2 h-4 w-4 text-primary" /> Open to international opportunities
          </Badge>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Kavan Williams</div>
        <div>Customer-focused. Commercially minded. Internationally ready.</div>
      </div>
    </footer>
  );
}
