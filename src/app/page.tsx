// src/app/page.tsx
import { GlassCard } from '@/components/shared/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Lightbulb, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <header className="text-center mb-16">
        <GlassCard className="inline-block p-8">
          <h1 className="text-5xl font-headline font-bold text-primary dark:text-accent">
            Liquid Visor
          </h1>
          <p className="mt-4 text-xl text-foreground/80">
            An experiment in translucent UIs with embedded code.
          </p>
        </GlassCard>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
        <GlassCard>
          <div className="flex items-center mb-4">
            <Lightbulb className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl font-headline font-semibold">Concept</h2>
          </div>
          <p className="text-foreground/90 mb-4">
            Liquid Visor showcases a "glassmorphism" interface where UI elements appear as translucent panes, revealing a dynamic background of the page's own source code. This creates a unique, layered visual experience.
          </p>
          <Button variant="default" size="lg">Learn More</Button>
        </GlassCard>
        
        <GlassCard>
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl font-headline font-semibold">Features</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>Translucent "glass" UI elements.</li>
            <li>Dynamically embedded HTML source code background.</li>
            <li>Animated "typing" effect for the code.</li>
            <li>User toggle for code background visibility.</li>
            <li>Styled with a modern, clean aesthetic.</li>
          </ul>
        </GlassCard>
      </div>

      <GlassCard className="mb-16">
        <h2 className="text-3xl font-headline font-semibold mb-6 text-center">Visual Demo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-video bg-primary/20 rounded-lg flex items-center justify-center p-4">
            <p className="text-primary-foreground font-medium">Glass Element 1</p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Placeholder image for demo" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="abstract gradient"
            />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <p className="text-white text-xl font-bold">Image with Overlay</p>
             </div>
          </div>
          <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center p-4">
            <p className="text-accent-foreground font-medium">Glass Element 3</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="text-3xl font-headline font-semibold mb-6 text-center">Interactive Form</h2>
        <form className="space-y-6 max-w-xl mx-auto">
          <div>
            <Label htmlFor="name" className="text-foreground/90 font-medium">Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" className="mt-1 bg-background/50 dark:bg-background/50 border-foreground/20 focus:border-primary" />
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground/90 font-medium">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" className="mt-1 bg-background/50 dark:bg-background/50 border-foreground/20 focus:border-primary" />
          </div>
          <div>
            <Label htmlFor="message" className="text-foreground/90 font-medium">Message</Label>
            <Textarea id="message" placeholder="Your thoughts on Liquid Visor..." className="mt-1 bg-background/50 dark:bg-background/50 border-foreground/20 focus:border-primary" rows={4} />
          </div>
          <div className="flex justify-center">
            <Button type="submit" size="lg" className="px-8">
              <AlertCircle className="mr-2 h-5 w-5" /> Submit Feedback
            </Button>
          </div>
        </form>
      </GlassCard>

      <footer className="mt-20 py-8 text-center">
        <GlassCard className="inline-block px-6 py-4">
          <p className="text-sm text-foreground/70">&copy; {new Date().getFullYear()} Liquid Visor. All rights reserved (not really).</p>
        </GlassCard>
      </footer>
    </div>
  );
}
