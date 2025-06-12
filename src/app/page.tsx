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
        <h2 className="text-3xl font-headline font-semibold mb-6 text-center">Code Demo: Implementing the Glass Effect</h2>
        <div className="space-y-8 text-foreground/90">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Using the <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">GlassCard</code> Component</h3>
            <p className="mb-3">
              The simplest way to add a glass effect to a section of your page is by using the 
              pre-built <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">GlassCard</code> component. 
              It encapsulates all the necessary styling. Just import it and wrap your content:
            </p>
            <pre className="bg-foreground/5 dark:bg-background/20 p-4 rounded-lg overflow-x-auto shadow-inner">
              <code className="font-code text-sm leading-relaxed">
                {`import { GlassCard } from '@/components/shared/GlassCard';

export default function MyPageComponent() {
  return (
    <GlassCard className="p-8 my-4">
      <h3 className="text-2xl font-semibold">Hello Glass!</h3>
      <p className="mt-2">This content is inside a GlassCard component.</p>
      <Button className="mt-4">A Button on Glass</Button>
    </GlassCard>
  );
}`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Understanding the Styling</h3>
            <p className="mb-3">
              The <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">GlassCard</code> component (located at 
              <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">src/components/shared/GlassCard.tsx</code>) 
              uses Tailwind CSS with arbitrary values to achieve the specific glassmorphism effect you provided:
            </p>
            <pre className="bg-foreground/5 dark:bg-background/20 p-4 rounded-lg overflow-x-auto shadow-inner">
              <code className="font-code text-sm leading-relaxed">
                {`// src/components/shared/GlassCard.tsx (core styling)
<div
  className={cn(
    "p-6", // Default padding
    "bg-[rgba(255,255,255,0.05)]", // RGBA background for transparency
    "rounded-[16px]",             // Specific border radius
    "shadow-[0_4px_30px_rgba(0,0,0,0.1)]", // Box shadow
    "backdrop-blur-[2px]",        // Backdrop filter for blur (reduced for clarity)
    "border border-[rgba(255,255,255,0.3)]", // Border styling
    className // Allows for additional custom classes
  )}
  {...props}
>
  {children}
</div>`}
              </code>
            </pre>
            <p className="mt-3">
              You can modify these values directly in the component file if you need to tweak the appearance globally. 
              For example, changing <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">backdrop-blur-[2px]</code> to 
              <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">backdrop-blur-[5px]</code> would increase the blur effect.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">3. How the "Code Behind the Glass" Works</h3>
            <p className="mb-3">
              The illusion of code appearing behind the translucent glass elements is achieved through a combination of factors:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Transparent Page Body:</strong> The main <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">&lt;body&gt;</code> background is set to 
                transparent in <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">src/app/globals.css</code> using <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">@apply bg-transparent;</code>.
              </li>
              <li>
                <strong>Fixed Code Background:</strong> The <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">CodeBackground</code> component 
                (<code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">src/components/code-background/CodeBackground.tsx</code>) 
                is positioned fixed to cover the entire viewport (<code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">fixed inset-0 z-[-1]</code>). 
                It displays the page's own source code with a typing animation.
              </li>
              <li>
                <strong>Translucent Elements:</strong> The <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">GlassCard</code> and other UI elements designed to be "glassy" must have a semi-transparent background (like <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">bg-[rgba(255,255,255,0.05)]</code>) to allow the <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">CodeBackground</code> to show through.
              </li>
              <li>
                <strong>Context for Code:</strong> The <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">CodeBackgroundProvider</code> in 
                <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">src/app/layout.tsx</code> is responsible for fetching the current page's HTML source 
                and making it available to the <code className="font-code bg-muted px-1.5 py-0.5 rounded text-sm">CodeBackground</code> component.
              </li>
            </ul>
             <p className="mt-3">
              This setup creates a layered effect where the fixed, animated code is always in the background, and translucent UI elements float above it.
            </p>
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
