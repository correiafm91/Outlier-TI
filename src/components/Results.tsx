
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";
import { useCountUp } from "@/hooks/useCountUp";
import { useState, useEffect, useRef } from "react";

const threatData = [
  { month: 'Jan', threats: 450, blocked: 449 },
  { month: 'Feb', threats: 520, blocked: 518 },
  { month: 'Mar', threats: 680, blocked: 679 },
  { month: 'Apr', threats: 590, blocked: 589 },
  { month: 'May', threats: 720, blocked: 719 },
  { month: 'Jun', threats: 650, blocked: 649 },
];

const incidentData = [
  { category: 'Malware', reduction: 98 },
  { category: 'Phishing', reduction: 95 },
  { category: 'Ransomware', reduction: 100 },
  { category: 'Intrusão', reduction: 97 },
];

const AnimatedNumber = ({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) => {
  const { count, elementRef } = useCountUp({ end, decimals });
  
  return (
    <div ref={elementRef} className="text-4xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

const AnimatedChart = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={chartRef} 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const Results = () => {
  return (
    <section id="resultados" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proteção Comprovada
            <span className="block text-white/90">em Números</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Dados reais de empresas protegidas contra ameaças cibernéticas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <AnimatedNumber end={127} />
              <div className="text-white/70">Empresas Protegidas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <AnimatedNumber end={99.8} suffix="%" decimals={1} />
              <div className="text-white/70">Ameaças Bloqueadas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <AnimatedNumber end={0} />
              <div className="text-white/70">Vazamentos de Dados</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Monitoramento Ativo</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Ameaças Detectadas vs Bloqueadas</CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatedChart>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={threatData}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#ffffff', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#ffffff', fontSize: 12 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="threats" 
                      stackId="1"
                      stroke="#ff6b6b" 
                      fill="#ff6b6b"
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="blocked" 
                      stackId="2"
                      stroke="#51cf66" 
                      fill="#51cf66"
                      fillOpacity={0.8}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </AnimatedChart>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Taxa de Proteção por Tipo de Ameaça</CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatedChart>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={incidentData} layout="horizontal">
                    <XAxis 
                      type="number"
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#ffffff', fontSize: 12 }}
                      domain={[0, 100]}
                    />
                    <YAxis 
                      type="category"
                      dataKey="category"
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#ffffff', fontSize: 12 }}
                      width={100}
                    />
                    <Bar 
                      dataKey="reduction" 
                      fill="#51cf66"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </AnimatedChart>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
