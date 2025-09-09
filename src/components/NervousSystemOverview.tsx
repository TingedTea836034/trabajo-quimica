import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Brain, Zap, Activity, Network } from "lucide-react";

export function NervousSystemOverview() {
  const facts = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "86 mil millones",
      description: "Neuronas en el cerebro humano",
      progress: 100
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "120 m/s",
      description: "Velocidad máxima de impulsos nerviosos",
      progress: 85
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "20%",
      description: "Energía corporal que consume el cerebro",
      progress: 20
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "100 billones",
      description: "Conexiones sinápticas aproximadas",
      progress: 95
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            ¿Qué es el Sistema Nervioso?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            El sistema nervioso es una red compleja de células especializadas llamadas neuronas 
            que transmiten señales entre diferentes partes del cuerpo. Es el sistema de control 
            y comunicación del organismo, responsable de procesar información sensorial, 
            controlar movimientos y regular funciones vitales.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Control motor</Badge>
            <Badge variant="secondary">Procesamiento sensorial</Badge>
            <Badge variant="secondary">Funciones cognitivas</Badge>
            <Badge variant="secondary">Regulación vital</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Datos Fascinantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facts.map((fact, index) => (
              <div key={index} className="space-y-2 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="text-primary">{fact.icon}</div>
                  <div className="font-medium">{fact.title}</div>
                </div>
                <p className="text-sm text-muted-foreground">{fact.description}</p>
                <Progress value={fact.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Divisiones Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                Sistema Nervioso Central (SNC)
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Cerebro</li>
                <li>• Médula espinal</li>
                <li>• Procesa y coordina información</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                Sistema Nervioso Periférico (SNP)
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Nervios craneales</li>
                <li>• Nervios espinales</li>
                <li>• Conecta SNC con el resto del cuerpo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}