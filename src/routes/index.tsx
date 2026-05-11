import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, MapPin, ArrowRight, CheckCircle2, Circle, Sparkles, Briefcase, GraduationCap, Award, Users, Target, Rocket, Heart, MessageCircle, FileSpreadsheet, FileText, Music, BookOpen, Mountain, Footprints, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gradPhoto from "@/assets/kavan-graduation.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <SalesCapabilities />
        <SalesHighlights />
        <Experience />
        <Education />
        <Certifications />
        <Leadership />
        <PeopleSkills />
        <Languages />
        <Growth />
        <CareerObjectives />
        <Hobbies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
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
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, oklch(0.88 0.08 260 / 0.7) 0%, transparent 60%), radial-gradient(50% 40% at 0% 30%, oklch(0.9 0.06 220 / 0.5) 0%, transparent 60%)",
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
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Kavan Williams
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/80 md:text-2xl">
            Customer Growth & SaaS Professional · Hospitality Technology
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Business & Marketing graduate with experience in high-pressure customer-facing environments, customer engagement, and commercial communication — now building CRM, SaaS, and customer growth capabilities through HubSpot, Salesforce, and AI-enabled workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:kavanwilliams2001@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="https://www.linkedin.com/in/kavan-williams-8683a631a" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> 073 620 1564</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> South Africa</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/40 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elevated)]">
            <img src={gradPhoto} alt="Kavan Williams at graduation" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Graduated 2024</div>
                <div className="text-sm font-semibold">BCom Marketing & Business</div>
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
    <Section id="about" eyebrow="Profile" title="Commercially minded. Customer-focused. Built for modern SaaS.">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-lg leading-relaxed text-foreground/80">
          <p>
            Business & Marketing graduate with hands-on experience in customer-facing environments requiring communication, adaptability, problem-solving, and performance under pressure.
          </p>
          <p>
            Experienced in high-volume customer interaction, upselling, objection handling, and relationship-building across hospitality and promotional environments.
          </p>
          <p>
            Currently transitioning into SaaS and customer-growth roles through CRM, sales, and AI workflow training in HubSpot, Salesforce, and modern business tools.
          </p>
          <p>
            Interested in opportunities across customer success, business development, onboarding, hospitality technology, and commercial SaaS environments — with long-term interests in operations, project coordination, and strategic customer growth.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Target, label: "Focus", value: "Customer success · SaaS · BD" },
            { icon: Sparkles, label: "Currently learning", value: "Salesforce · AI workflows" },
            { icon: MapPin, label: "Availability", value: "Open to international opportunities" },
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

function Skills() {
  const sales = ["Customer engagement", "Communication", "Relationship building", "Customer experience", "Adaptability", "Problem solving", "Team coordination", "Stakeholder communication", "Operational support", "Process improvement"];
  const technical = [
    { name: "HubSpot CRM", status: "Certified" },
    { name: "Salesforce CRM", status: "Learning" },
    { name: "Microsoft Excel", status: "Proficient" },
    { name: "Microsoft Word", status: "Proficient" },
    { name: "AI Tools (Claude)", status: "Learning" },
    { name: "Inbound Sales", status: "In progress" },
  ];
  return (
    <Section id="skills" eyebrow="Core skills" title="Customer-facing fundamentals meeting modern SaaS tooling.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary" /> Commercial & Customer
          </div>
          <div className="flex flex-wrap gap-2">
            {sales.map((s) => (
              <span key={s} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" /> Technical
          </div>
          <ul className="space-y-3">
            {technical.map((t) => (
              <li key={t.name} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
                <span className="font-medium">{t.name}</span>
                <Badge variant="secondary" className="rounded-full font-normal">{t.status}</Badge>
              </li>
            ))}
          </ul>
        </div>
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
      "Delivered consistent customer experience through attentive service, upselling, and product recommendations.",
      "Managed 150–300 customer interactions per shift in a high-pressure environment.",
      "Built rapport quickly and resolved conflict through clear, empathetic communication.",
      "Handled objections and difficult customers while maintaining service quality.",
      "Identified operational improvements that increased efficiency and reduced wastage.",
    ],
  },
  {
    title: "Brand Activation Representative",
    org: "JTI Campaigns",
    period: "2022 – 2023",
    points: [
      "Represented international FMCG brands in direct-to-consumer campaigns.",
      "Influenced purchasing decisions through structured product communication.",
      "Delivered high-energy customer engagement in fast-paced promotional environments.",
    ],
  },
  {
    title: "Waiter",
    org: "Caspita Restaurant",
    period: "2019",
    points: [
      "Delivered efficient and attentive service in a busy restaurant environment.",
      "Built strong communication and customer service foundations.",
    ],
  },
  {
    title: "Retail & Operations Intern",
    org: "Tekkie Town",
    period: "Jun 2018",
    points: [
      "Gained exposure to retail operations, warehouse processes, and in-store merchandising.",
      "Supported multiple departments including marketing and storefront operations.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Customer-facing, performance-driven roles.">
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
    <Section id="education" eyebrow="Education" title="A foundation in business, marketing and creative production.">
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
    { name: "AI Productivity & Workflow Learning", status: "In progress", done: false },
    { name: "Google Project Management", status: "Planned", done: false },
  ];
  return (
    <Section eyebrow="Certifications" title="Always learning — building credibility in CRM and AI.">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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

function Growth() {
  const areas = ["CRM workflow depth", "SaaS systems learning", "Structured productivity", "Collaboration & delegation"];
  return (
    <Section eyebrow="Current Growth Focus" title="Where I’m investing right now.">
      <div className="flex flex-wrap gap-3">
        {areas.map((a) => (
          <div key={a} className="rounded-full border border-dashed border-border bg-card px-5 py-2.5 text-sm font-medium">
            {a}
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        Deliberate practice on the things that compound: deeper CRM workflows, modern SaaS tooling, AI-enabled productivity, and collaborating effectively across teams.
      </p>
    </Section>
  );
}

function Projects() {
  return (
    <Section eyebrow="Projects" title="Customer & Commercial Portfolio">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] md:p-14">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{ background: "radial-gradient(50% 60% at 100% 0%, oklch(0.85 0.12 255 / 0.7), transparent 60%)" }}
        />
        <Badge className="rounded-full">Coming soon</Badge>
        <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">A walkthrough of my CRM, customer, and SaaS work.</h3>
        <p className="mt-3 max-w-xl text-muted-foreground">
          I’m putting together short case studies of CRM workflows, customer engagement frameworks, and AI-enabled productivity experiments. Reach out if you’d like an early look.
        </p>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</div>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Let’s build something together.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Open to customer success, business development, SaaS, and hospitality technology opportunities — locally in South Africa or internationally.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: "kavanwilliams2001@gmail.com", href: "mailto:kavanwilliams2001@gmail.com" },
            { icon: Phone, label: "Phone", value: "073 620 1564", href: "tel:+27736201564" },
            { icon: Linkedin, label: "LinkedIn", value: "kavan-williams", href: "https://www.linkedin.com/in/kavan-williams-8683a631a" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 truncate font-semibold group-hover:text-primary">{c.value}</div>
            </a>
          ))}
        </div>
        <Badge variant="secondary" className="mt-10 rounded-full px-4 py-2 text-sm">
          <Award className="mr-2 h-4 w-4 text-primary" /> Open to international opportunities
        </Badge>
      </div>
    </section>
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

function SalesCapabilities() {
  const items = [
    { icon: Users, title: "Customer engagement", body: "Building rapport and trust quickly across cultures, channels and customer types." },
    { icon: Heart, title: "Relationship management", body: "Following up, listening and keeping customers supported through their journey." },
    { icon: Sparkles, title: "CRM & SaaS tools", body: "HubSpot (certified), Salesforce (in training) and modern productivity tools for clean, actionable data." },
    { icon: MessageCircle, title: "Objection handling", body: "Reframing concerns into clarity — moving conversations forward without pressure." },
    { icon: Target, title: "Onboarding & support mindset", body: "Helping customers get to value quickly through clear guidance and structured handovers." },
    { icon: Rocket, title: "Operational awareness", body: "Spotting friction in workflows and contributing small improvements that compound." },
  ];
  return (
    <Section eyebrow="Commercial & customer capabilities" title="What I bring to a customer-facing team.">
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

function SalesHighlights() {
  const stats = [
    { value: "150–300", label: "Customer interactions per shift" },
    { value: "18+ months", label: "Consistent customer experience & upselling contribution" },
    { value: "High-pressure", label: "Customer-facing performance in fast-paced environments" },
  ];
  return (
    <Section eyebrow="Performance highlights" title="Customer-facing performance in fast-paced environments.">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="font-display text-3xl font-extrabold text-primary">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Languages() {
  const langs = [
    { name: "English", level: "Native" },
    { name: "Dutch", level: "Beginner — actively learning" },
  ];
  return (
    <Section eyebrow="Languages" title="Languages.">
      <div className="grid gap-3 sm:grid-cols-2">
        {langs.map((l) => (
          <div key={l.name} className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <span className="font-semibold">{l.name}</span>
            <Badge variant="secondary" className="rounded-full font-normal">{l.level}</Badge>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CareerObjectives() {
  const goals = [
    { title: "Short-term", text: "Land a customer-facing commercial role in SaaS, hospitality tech, or B2B services where I can apply my communication, coordination, and customer-growth skills." },
    { title: "Mid-term", text: "Grow from sales into account management, customer success, onboarding, or project coordination — owning relationships and driving measurable outcomes." },
    { title: "Long-term", text: "Develop into an operational or commercial leadership role bridging customers, product, and revenue in a modern, internationally minded company." },
  ];
  return (
    <Section eyebrow="Career Objectives" title="Career objectives & professional goals.">
      <p className="mb-6 max-w-3xl text-muted-foreground">
        I’m focused on building a long-term career at the intersection of customers, commercial growth, and operations — staying adaptable, internationally employable, and ready for the AI-era of work.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {goals.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{g.title}</div>
            <p className="text-sm text-muted-foreground">{g.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Kavan Williams</div>
        <div>Built with focus, coffee, and a long run.</div>
      </div>
    </footer>
  );
}
