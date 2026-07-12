import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Naman Centre, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051' },
  { icon: Phone, label: 'Phone', value: '+91 22 6123 4567' },
  { icon: Mail, label: 'Email', value: 'support@swiftindia.in' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Missing fields', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: 'Message sent!', description: 'We\'ll get back to you within 24 hours.' });
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch With <span className="text-blue-600">SwiftIndia</span>
          </h1>
          <p className="mt-3 text-slate-500 max-w-md mx-auto leading-relaxed">
            We'd love to hear from you. Send our support and enterprise routing desk a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="border-slate-100 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Full Name *</Label>
                      <Input className="border-slate-200" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Email *</Label>
                      <Input className="border-slate-200" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Phone</Label>
                    <Input className="border-slate-200" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Message *</Label>
                    <Textarea className="border-slate-200" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold tracking-wide transition-colors">
                    {sending ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Panels */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <Card key={item.label} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 shrink-0">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Simulated Indian Metropolitan Map Anchor */}
            <Card className="border-slate-100 shadow-sm overflow-hidden group">
              <div className="h-48 bg-slate-50 flex flex-col items-center justify-center relative border-t-4 border-orange-500">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-orange-500 animate-bounce" />
                <p className="text-sm font-bold text-slate-900">BKC Hub HQ</p>
                <p className="text-xs text-slate-500">Mumbai, MH</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
