import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface NeuronPartProps {
  name: string;
  description: string;
  position: { x: number; y: number };
  color: string;
}

const NeuronPart = ({ name, description, position, color }: NeuronPartProps) => (
  <div 
    className="absolute group cursor-pointer"
    style={{ left: `${position.x}%`, top: `${position.y}%` }}
  >
    <div 
      className={`w-3 h-3 rounded-full ${color} border-2 border-white shadow-lg animate-pulse`}
    />
    <div className="absolute left-4 top-0 bg-slate-800 border border-slate-600 rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 w-48">
      <div className="font-medium text-white">{name}</div>
      <div className="text-sm text-slate-300 mt-1">{description}</div>
    </div>
  </div>
);

export function NeuronDiagram() {
  const neuronParts = [
    {
      name: "Soma (Cuerpo celular)",
      description: "Contiene el núcleo y la mayoría de los orgánulos celulares",
      position: { x: 45, y: 50 },
      color: "bg-blue-500"
    },
    {
      name: "Dendritas",
      description: "Reciben señales de otras neuronas",
      position: { x: 25, y: 35 },
      color: "bg-green-500"
    },
    {
      name: "Axón",
      description: "Transmite señales eléctricas desde el soma",
      position: { x: 70, y: 50 },
      color: "bg-red-500"
    },
    {
      name: "Terminal sináptica",
      description: "Libera neurotransmisores hacia otras neuronas",
      position: { x: 85, y: 45 },
      color: "bg-purple-500"
    },
    {
      name: "Vaina de mielina",
      description: "Acelera la transmisión de impulsos nerviosos",
      position: { x: 60, y: 40 },
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">ANATOMÍA NEURONAL</h2>
      <div className="relative h-64 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg border border-slate-600">
        {/* Simplified neuron drawing */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Dendritas */}
          <path
            d="M 20 30 Q 35 25 40 35 Q 42 40 45 45"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 25 40 Q 30 35 35 40 Q 40 42 45 48"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Soma */}
          <circle cx="45" cy="50" r="8" fill="#3b82f6" fillOpacity="0.8" />
          
          {/* Axón */}
          <path
            d="M 53 50 L 85 47"
            stroke="#ef4444"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Vaina de mielina */}
          <rect x="58" y="47" width="4" height="6" fill="#eab308" fillOpacity="0.8" />
          <rect x="65" y="47" width="4" height="6" fill="#eab308" fillOpacity="0.8" />
          <rect x="72" y="47" width="4" height="6" fill="#eab308" fillOpacity="0.8" />
          
          {/* Terminal sináptica */}
          <circle cx="85" cy="47" r="3" fill="#8b5cf6" fillOpacity="0.8" />
        </svg>
        
        {/* Interactive points */}
        {neuronParts.map((part, index) => (
          <NeuronPart key={index} {...part} />
        ))}
      </div>
      <div className="mt-4 text-sm text-slate-400">
        Pasa el cursor sobre los puntos para más información
      </div>
    </div>
  );
}