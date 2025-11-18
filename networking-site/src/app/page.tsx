'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const heroMetrics = [
  { label: "Deployments Secured", value: "274+" },
  { label: "Latency Reduction", value: "38%" },
  { label: "Partner Vendors", value: "19" },
  { label: "Global Sites", value: "41" },
];

const networkNodes = [
  { label: "Core Throughput", value: "12.8 Tbps" },
  { label: "Edge Switches", value: "540 Units" },
  { label: "Wi-Fi 7 APs", value: "180 Sites" },
  { label: "IoT Devices", value: "28k Active" },
];

const diagramLinks = [
  { name: "SD-WAN Mesh", detail: "Real-time path orchestration" },
  { name: "AIOps Guardian", detail: "Predictive outage prevention" },
  { name: "Zero Trust Edge", detail: "Adaptive identity controls" },
];

const solutions = [
  {
    title: "Campus Fabric Design",
    copy: "End-to-end wired and wireless fabric that scales with AI-driven assurance, telemetry, and seamless roaming.",
    icon: "LAN",
    highlights: ["Unified policies", "Micro-segmentation", "Dynamic QoS"],
  },
  {
    title: "Software-Defined WAN",
    copy: "High-availability SD-WAN architecture with smart failover, optimal routing, and integrated security overlays.",
    icon: "WAN",
    highlights: ["Active-active tunnels", "SASE ready", "Traffic heuristics"],
  },
  {
    title: "Hybrid Cloud Edge",
    copy: "Bridging on-prem data centers and cloud workloads with low-latency interconnects and programmable APIs.",
    icon: "EDGE",
    highlights: ["VXLAN fabrics", "API automation", "Intent templates"],
  },
];

const products = [
  {
    name: "EdgeWave X1200 Switch",
    description:
      "Enterprise aggregation switch with 48x 10G SFP+, modular 100G uplinks, and inline telemetry for capacity planning.",
    specs: ["48x 10G SFP+", "Dual 100G uplinks", "Hot-swap PSU"],
    image:
      "https://images.unsplash.com/photo-1580894742597-87d4f0634807?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "AirMesh AX780 Wi-Fi 7",
    description:
      "High-density wireless platform with multi-link operations, integrated security sensors, and adaptive RF management.",
    specs: ["Wi-Fi 7 tri-band", "Integrated IPS", "Cloud-Managed"],
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "SentinelGuard Firewall",
    description:
      "Next-gen firewall appliance featuring TLS inspection, AI-driven threat hunting, and zero-trust posture enforcement.",
    specs: ["40 Gbps NGFW", "ZTNA gateway", "Inline ML engine"],
    image:
      "https://images.unsplash.com/photo-1580894906472-2cf3275a4241?auto=format&fit=crop&w=1400&q=80",
  },
];

const articles = [
  {
    title: "Designing a Zero-Downtime Campus Fabric",
    summary:
      "Explore how intent-based networking and EVPN fabrics modernize large campuses, reduce outages, and deliver deterministic performance.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    category: "Architecture",
    readTime: "9 min read",
    tags: ["EVPN", "Campus Core", "Automation"],
    url: "/articles/zero-downtime-campus",
  },
  {
    title: "Securing Remote Work with Zero Trust Edge",
    summary:
      "A detailed blueprint for layering ZTNA, software-defined perimeters, and continuous trust evaluation across remote sites.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    category: "Security",
    readTime: "7 min read",
    tags: ["ZTNA", "SASE", "Identity"],
    url: "/articles/zero-trust-edge",
  },
  {
    title: "5 Telemetry Signals That Predict WAN Outages",
    summary:
      "Learn how AI operations and correlated telemetry spot anomalies before they degrade mission-critical connections.",
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1400&q=80",
    category: "Analytics",
    readTime: "6 min read",
    tags: ["Telemetry", "AIOps", "Observability"],
    url: "/articles/telemetry-wan-outages",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Home() {
  return (
    <main>
      <div className="page">
        <section className="hero">
          <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="hero__badge">
              Fiberlink Networks · Intelligent Infrastructure
            </span>
            <h1 className="hero__title">
              Build Lightning-Fast, Resilient Networks Without the Guesswork
            </h1>
            <p className="hero__copy">
              From spine-leaf fabrics to secure SD-WAN, we architect and deliver
              next-generation connectivity backed by certified engineers and a
              fully stocked hardware catalog.
            </p>
            <div className="action-row">
              <Link href="#products" className="btn btn--primary">
                Explore Equipment Catalog
              </Link>
              <Link href="#articles" className="btn btn--ghost">
                Read Infrastructure Guides
              </Link>
            </div>
            <div className="hero__metrics">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-card"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={index + 1}
                >
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="network-grid" />
            <div className="network-nodes">
              {networkNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  className="network-node"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.55 }}
                >
                  <div className="network-node__title">{node.label}</div>
                  <div className="network-node__value">{node.value}</div>
                </motion.div>
              ))}
            </div>
            <div className="diagram-links">
              {diagramLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="diagram-link"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <span>{link.name}</span>
                  <small>{link.detail}</small>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="section" id="solutions">
          <div className="section__heading">
            <motion.h2
              className="section__title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              Engineered Solutions for Every Network Layer
            </motion.h2>
            <motion.p
              className="section__subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={1}
            >
              We combine leading vendors, deep field experience, and automation
              tooling to design infrastructure that scales securely and
              predictably.
            </motion.p>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="solution-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index}
              >
                <div className="icon-badge">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <div className="solution-pills">
                  {solution.highlights.map((pill) => (
                    <span className="pill" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section" id="products">
          <div className="section__heading">
            <motion.h2
              className="section__title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              Featured Networking Equipment
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={1}
            >
              <Link href="#contact" className="btn btn--ghost">
                Request a custom quote
              </Link>
            </motion.div>
          </div>
          <div className="products-showcase">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                className="product-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index}
              >
                <figure>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-specs">
                  {product.specs.map((spec) => (
                    <span className="spec-chip" key={spec}>
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="articles">
          <div className="section__heading">
            <motion.h2
              className="section__title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              Articles & Field Notes
            </motion.h2>
            <motion.p
              className="section__subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={1}
            >
              Stay ahead of evolving architectures, security models, and
              automation practices with insights from our engineering desk.
            </motion.p>
          </div>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                className="article-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index}
              >
                <figure>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </figure>
                <div className="article-body">
                  <div className="article-tags">
                    <span className="article-tag">{article.category}</span>
                    {article.tags.map((tag) => (
                      <span className="article-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <div className="article-meta">
                    <span>{article.readTime}</span>
                    <Link href={article.url} className="article-link">
                      Continue Reading
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="cta-panel" id="contact">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Ready to Rebuild Your Network Edge?
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
          >
            Our architects map your current topology, design the ideal stack,
            and ship the gear you need with white-glove provisioning.
          </motion.p>
          <motion.div
            className="action-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={2}
          >
            <Link href="mailto:solutions@fiberlinknetworks.com" className="btn btn--primary">
              Schedule a discovery call
            </Link>
            <Link href="#products" className="btn btn--ghost">
              Download equipment line card
            </Link>
          </motion.div>
        </div>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} Fiberlink Networks. Crafted for resilient
            connectivity.
          </span>
          <div className="footer-links">
            <Link href="#solutions">Solutions</Link>
            <Link href="#products">Equipment</Link>
            <Link href="#articles">Insights</Link>
            <Link href="mailto:support@fiberlinknetworks.com">Support</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
