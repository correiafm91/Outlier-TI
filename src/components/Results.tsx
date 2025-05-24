
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

const performanceData = [
  { month: 'Jan', before: 100, after: 180 },
  { month: 'Feb', before: 105, after: 220 },
  { month: 'Mar', before: 98, after: 280 },
  { month: 'Apr', before: 110, after: 320 },
  { month: 'May', before: 108, after: 380 },
  { month: 'Jun', before: 115, after: 420 },
];

const costData = [
  { category: 'Infraestrutura', reduction: 45 },
  { category: 'Processos Manuais', reduction: 65 },
  { category: 'Licenças', reduction: 30 },
  { category: 'Manutenção', reduction: 55 },
];

const Results = () => {
  return (
    <section id="resultados" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados Comprovados
            <span className="block text-white/90">em Números</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Dados reais de clientes que transformaram seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-white mb-2">34</div>
              <div className="text-white/70">Negócios Otimizados</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-white mb-2">R$ 774K</div>
              <div className="text-white/70">Economia Gerada</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-white mb-2">45%</div>
              <div className="text-white/70">Redução de Custos</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-white/70">Clientes Satisfeitos</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Performance Antes vs Depois</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceData}>
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
                    dataKey="before" 
                    stackId="1"
                    stroke="#666" 
                    fill="#333"
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="after" 
                    stackId="2"
                    stroke="#ffffff" 
                    fill="#ffffff"
                    fillOpacity={0.8}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Redução de Custos por Área</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costData} layout="horizontal">
                  <XAxis 
                    type="number"
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#ffffff', fontSize: 12 }}
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
                    fill="#ffffff"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
