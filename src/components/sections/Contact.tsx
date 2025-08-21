import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/tahahashim10',
      label: '@tahahashim10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/tahahashim10',
      label: 'in/tahahashim10'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:taha.hashim@mail.utoronto.ca',
      label: 'taha.hashim@mail.utoronto.ca'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to connect? I'd love to hear from you. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="p-8 gradient-card border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/20 border-primary/20 focus:border-primary/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/20 border-primary/20 focus:border-primary/40"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/20 border-primary/20 focus:border-primary/40"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-secondary/20 border-primary/20 focus:border-primary/40 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:shadow-card transition-all group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to collaborate on a project, discuss opportunities, 
                  or just want to chat about technology, I'm always open to interesting conversations. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <Card
                    key={link.name}
                    className="p-6 gradient-card border-primary/10 card-hover cursor-pointer group"
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <link.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{link.name}</h4>
                        <p className="text-muted-foreground">{link.label}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="p-6 gradient-card rounded-lg border border-primary/10">
                <h4 className="font-medium mb-2 text-primary">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to reach out via LinkedIn for faster response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
