import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Heart, Truck, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { icon: Zap, title: 'Speed', desc: 'Lightning-fast deliveries across India with optimized route networks.' },
  { icon: Shield, title: 'Trust', desc: 'Your parcels are fully insured and handled with ultimate safety.' },
  { icon: Cpu, title: 'Technology', desc: 'AI-driven logistics infrastructure with real-time API tracking.' },
  { icon: Heart, title: 'Customer Care', desc: '24/7 support with dedicated enterprise account managers.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => (
  <div className="min-h-screen pt-24 pb-20 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      {/* Hero Accent Tag matching Homepage style */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600 border border-orange-100">
          📌 World's Fastest Courier Service
        </span>
      </div>

      {/* Hero Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          About <span className="text-blue-600">SwiftIndia</span>
        </h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          From Mumbai to Delhi, SwiftIndia delivers your parcels safely and on time. Experience the power of same-day, overnight, and standard delivery options.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.section {...fadeUp} className="max-w-3xl mx-auto mb-20 text-center md:text-left">
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4 border-l-4 border-orange-500 pl-4">
          Our Story
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4 text-base">
          Founded with a clear mission to redefine local logistics, SwiftIndia emerged to set global standards for domestic shipping. Starting with key transit hubs connecting major metros like Mumbai and Delhi, we have scaled into a comprehensive multi-modal national network.
        </p>
        <p className="text-slate-600 leading-relaxed text-base">
          Today, we process thousands of critical parcels daily. Our operations rely on advanced pathfinding algorithms, transparent milestone tracking, and a dedicated dispatch force ensuring secure point-to-point drop-offs.
        </p>
      </motion.section>

      {/* Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <motion.div {...fadeUp}>
          <Card className="h-full border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <CardContent className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-5">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide fast, affordable, and reliable delivery services that seamlessy bridge commerce hubs across India, empowering local enterprises and consumers.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <Card className="h-full border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <CardContent className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 mb-5">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To pioneer India's most innovative tech-driven logistics framework, maximizing visibility, reducing transit dead-times, and embedding absolute transparency.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Values Headline */}
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">Our Core Values</h2>
      </motion.div>

      {/* Grid Display for Core Values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-slate-100 shadow-sm text-center transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 mb-4 transition-colors group-hover:bg-blue-100">
                  <v.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
