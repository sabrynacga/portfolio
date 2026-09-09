import { Briefcase, Code, Database, Eye, GraduationCap, Layout, Mail, Terminal, User } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground relative overflow-hidden">
      {/* Formas Geométricas de Fundo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Círculo vazado rosa */}
        <div className="absolute top-32 -left-16 w-64 h-64 rounded-full border-[8px] border-secondary/10"></div>
        {/* Quadrado rotacionado verde */}
        <div className="absolute top-[20%] right-8 w-32 h-32 bg-primary/10 rounded-3xl rotate-12"></div>
        {/* Blur verde sutil no canto */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        {/* Quadrado rosa vazado no meio */}
        <div className="absolute bottom-1/3 left-16 w-20 h-20 border-[6px] border-secondary/15 rotate-45"></div>
        {/* Círculo pequeno verde */}
        <div className="absolute bottom-1/4 right-32 w-12 h-12 bg-primary/20 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif font-bold text-xl tracking-tight text-accent">Sabryna Cutrim</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            <a href="#projetos" className="text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
            <a href="#habilidades" className="text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 md:py-24 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 pt-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
                Engenheira de Software
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-accent">
                Olá, me chamo <br className="hidden md:block" />Sabryna Cutrim
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Estudante de Engenharia de Software | Especializada em Inteligência Artificial, Agentes Autônomos e Design.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#projetos" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Ver Projetos
              </a>
              <a href="#contato" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Entrar em Contato
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 transform translate-x-12 translate-y-12"></div>
            <div className="aspect-square bg-card border border-border rounded-2xl shadow-xl overflow-hidden relative flex items-center justify-center">
              <img 
                src="/WhatsApp_Image_2026-09-09_at_10.52.49.jpeg" 
                alt="Retrato de Sabryna Cutrim" 
                className="object-cover w-full h-full hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&auto=format';
                }}
              />
            </div>
          </div>
        </section>

        {/* Sobre Mim Section */}
        <section id="sobre" className="scroll-mt-24">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <h2 className="font-serif text-4xl font-bold mb-4 flex items-center gap-3">
                <User className="w-8 h-8 text-primary" />
                Sobre Mim
              </h2>
            </div>
            <div className="md:col-span-8 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-bl-full -z-10"></div>
              <p className="text-lg text-foreground leading-relaxed">
                Com formação técnica em informática e atualmente graduando em Engenharia de Software, combino fundamentos técnicos com inovação em IA. 
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-6">
                Tenho experiência no desenvolvimento de soluções com Visão Computacional, Machine Learning, Análise de Dados, Fundamentos de Design e na criação de agentes inteligentes automatizados integrando N8N e DeepSeek.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                <div>
                  <h4 className="font-bold text-accent text-3xl mb-1">3+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Anos de Estudo</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent text-3xl mb-1">10+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projetos Entregues</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent text-3xl mb-1">IA</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Foco Principal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos em Destaque Section */}
        <section id="projetos" className="scroll-mt-24 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-6">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-2 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-secondary" />
                Projetos em Destaque
              </h2>
              <p className="text-muted-foreground">Soluções inovadoras desenvolvidas recentemente.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Projeto Destacado */}
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-md text-xs font-medium">N8N</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-md text-xs font-medium">DeepSeek</span>
                  <span className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-md text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">Node.js</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-accent mb-4 group-hover:text-primary-foreground transition-colors">Plataforma de Vendas Inteligente</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  Uma plataforma completa de vendas integrada com agentes autônomos para atendimento e qualificação de leads, utilizando IA avançada para aumentar taxas de conversão.
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">
                    Acessar Projeto <Terminal className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Outro Projeto (Exemplo) */}
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-2 font-serif">Sistema de Visão Computacional</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  Implementação de algoritmos de detecção de objetos para análise de tráfego em tempo real utilizando OpenCV e YOLO.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-[10px] font-medium uppercase">Python</span>
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-[10px] font-medium uppercase">OpenCV</span>
                </div>
              </div>
            </div>

            {/* Outro Projeto (Exemplo) */}
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-2 font-serif">Dashboard Analítico de Vendas</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  Painel interativo para visualização de métricas de vendas e projeções baseadas em modelos preditivos de Machine Learning.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-[10px] font-medium uppercase">Machine Learning</span>
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-[10px] font-medium uppercase">Data Viz</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades Section */}
        <section id="habilidades" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Stack Tecnológico
            </h2>
            <p className="text-muted-foreground">Ferramentas e tecnologias que utilizo para construir soluções.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Modelos de IA", icon: <Terminal className="w-6 h-6 mb-3 text-accent" />, color: "bg-primary/10 hover:bg-primary/20 border-primary/20" },
              { name: "Agentes (N8N)", icon: <Database className="w-6 h-6 mb-3 text-accent" />, color: "bg-secondary/20 hover:bg-secondary/30 border-secondary/30" },
              { name: "DeepSeek API", icon: <Code className="w-6 h-6 mb-3 text-accent" />, color: "bg-muted hover:bg-muted/80 border-border" },
              { name: "Visão Computacional", icon: <Eye className="w-6 h-6 mb-3 text-accent" />, color: "bg-primary/10 hover:bg-primary/20 border-primary/20" },
              { name: "Machine Learning", icon: <GraduationCap className="w-6 h-6 mb-3 text-accent" />, color: "bg-secondary/20 hover:bg-secondary/30 border-secondary/30" },
              { name: "UI/UX Design", icon: <Layout className="w-6 h-6 mb-3 text-accent" />, color: "bg-muted hover:bg-muted/80 border-border" },
            ].map((skill, index) => (
              <div key={index} className={`flex flex-col items-center justify-center p-6 rounded-2xl border ${skill.color} transition-colors text-center aspect-square`}>
                {skill.icon}
                <span className="font-medium text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

      </main>
      </div>

      {/* Contato & Footer */}
      <footer id="contato" className="bg-accent text-accent-foreground mt-32 py-24 border-t border-border/10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4">Vamos Conversar?</h2>
              <p className="text-accent-foreground/70 text-lg max-w-md">
                Estou sempre aberta a novas oportunidades, colaborações e desafios na área de Engenharia de Software e IA.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:contato@exemplo.com" className="flex items-center gap-3 text-accent-foreground/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                contato@exemplo.com
              </a>
              <a href="https://www.linkedin.com/in/sabryna-amaral-6735553b6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent-foreground/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                LinkedIn
              </a>
              <a href="https://github.com/sabrynacga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent-foreground/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                GitHub
              </a>
            </div>
          </div>
          
          <div className="bg-background rounded-2xl p-8 text-foreground shadow-xl">
            <h3 className="font-serif text-2xl font-bold mb-6 text-accent">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Nome</label>
                <input type="text" id="name" className="w-full rounded-md border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                <input type="email" id="email" className="w-full rounded-md border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="seu.email@exemplo.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Mensagem</label>
                <textarea id="message" rows={4} className="w-full rounded-md border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="Como posso ajudar?"></textarea>
              </div>
              <button type="button" className="w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-accent-foreground/10 text-center text-sm text-accent-foreground/50">
          <p>© {new Date().getFullYear()} Sabryna Cutrim. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
