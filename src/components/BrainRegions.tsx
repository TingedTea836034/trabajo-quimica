import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Zap, Heart, Eye } from "lucide-react";

interface BrainRegion {
  name: string;
  functions: string[];
  icon: React.ReactNode;
  color: string;
  description: string;
}

export function BrainRegions() {
  const regions: BrainRegion[] = [
    {
      name: "Cerebro",
      description: "La parte más grande del encéfalo, responsable de las funciones superiores",
      functions: [
        "Pensamiento y razonamiento",
        "Memoria y aprendizaje",
        "Lenguaje y comunicación",
        "Control motor voluntario"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "bg-blue-100 border-blue-300 text-blue-800"
    },
    {
      name: "Cerebelo",
      description: "Coordina el movimiento y mantiene el equilibrio",
      functions: [
        "Coordinación motora",
        "Equilibrio y postura",
        "Aprendizaje motor",
        "Control de movimientos finos"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "bg-green-100 border-green-300 text-green-800"
    },
    {
      name: "Tronco cerebral",
      description: "Controla funciones vitales básicas para la supervivencia",
      functions: [
        "Respiración",
        "Ritmo cardíaco",
        "Presión arterial",
        "Reflejos básicos"
      ],
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 border-red-300 text-red-800"
    },
    {
      name: "Sistema límbico",
      description: "Regula emociones, memoria y comportamiento",
      functions: [
        "Procesamiento emocional",
        "Formación de memorias",
        "Control del apetito",
        "Respuestas de lucha o huida"
      ],
      icon: <Eye className="w-6 h-6" />,
      color: "bg-purple-100 border-purple-300 text-purple-800"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {regions.map((region, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${region.color}`}>
                {region.icon}
              </div>
              <div>
                <div>{region.name}</div>
                <Badge variant="outline" className="mt-1">
                  Región cerebral
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{region.description}</p>
            <div>
              <h4 className="font-medium mb-2">Funciones principales:</h4>
              <ul className="space-y-1">
                {region.functions.map((func, funcIndex) => (
                  <li key={funcIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {func}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}