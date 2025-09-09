import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { NervousSystemOverview } from "./components/NervousSystemOverview";
import { NeuronDiagram } from "./components/NeuronDiagram";
import { BrainRegions } from "./components/BrainRegions";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Brain, Zap, Activity, Network, Microscope, BookOpen, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
  <div className="container mx-auto px-6 py-12 max-w-7xl flex-1 flex flex-col">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            SISTEMA NERVIOSO
          </h1>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            La red de comunicación más compleja y fascinante del organismo humano
          </p>
        </div>

        {/* Navigation */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800 border border-slate-700 h-16">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Activity className="w-5 h-5" />
              <span className="text-xs">VISIÓN GENERAL</span>
            </TabsTrigger>
            <TabsTrigger value="neurons" className="flex flex-col items-center gap-1 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Zap className="w-5 h-5" />
              <span className="text-xs">NEURONAS</span>
            </TabsTrigger>
            <TabsTrigger value="brain" className="flex flex-col items-center gap-1 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Brain className="w-5 h-5" />
              <span className="text-xs">ENCÉFALO</span>
            </TabsTrigger>
            <TabsTrigger value="central" className="flex flex-col items-center gap-1 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Network className="w-5 h-5" />
              <span className="text-xs">SISTEMA CENTRAL</span>
            </TabsTrigger>
            <TabsTrigger value="peripheral" className="flex flex-col items-center gap-1 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Activity className="w-5 h-5" />
              <span className="text-xs">SISTEMA PERIFÉRICO</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* Left Side - Key Stats */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">DATOS CLAVE</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Brain className="w-8 h-8 text-cyan-400" />
                      <div>
                        <div className="text-2xl font-bold">86 BILLONES</div>
                        <div className="text-slate-400">Neuronas</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Zap className="w-8 h-8 text-yellow-400" />
                      <div>
                        <div className="text-2xl font-bold">120 M/S</div>
                        <div className="text-slate-400">Velocidad de impulsos</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Activity className="w-8 h-8 text-green-400" />
                      <div>
                        <div className="text-2xl font-bold">20%</div>
                        <div className="text-slate-400">Consumo energético corporal</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Network className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="text-2xl font-bold">100 BILLONES</div>
                        <div className="text-slate-400">Conexiones sinápticas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">DIVISIÓN PRINCIPAL</h2>
                <div className="space-y-6 h-full flex flex-col justify-center">
                  <div className="p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-blue-300">SISTEMA NERVIOSO CENTRAL</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>• Cerebro</div>
                      <div>• Médula espinal</div>
                      <div>• Procesamiento</div>
                      <div>• Coordinación</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-slate-500" />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-green-300">SISTEMA NERVIOSO PERIFÉRICO</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>• Nervios craneales</div>
                      <div>• Nervios espinales</div>
                      <div>• Conexión</div>
                      <div>• Transmisión</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="neurons" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
              {/* Left - Neuron Types */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">TIPOS DE NEURONAS</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <h4 className="font-bold text-red-300">SENSORIALES</h4>
                    </div>
                    <p className="text-sm text-slate-300">Transmiten información sensorial al SNC</p>
                  </div>
                  <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <h4 className="font-bold text-blue-300">MOTORAS</h4>
                    </div>
                    <p className="text-sm text-slate-300">Controlan músculos y glándulas</p>
                  </div>
                  <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <h4 className="font-bold text-green-300">INTERNEURONAS</h4>
                    </div>
                    <p className="text-sm text-slate-300">Conectan neuronas en el SNC</p>
                  </div>
                </div>
              </div>

              {/* Center - Neuron Diagram */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <NeuronDiagram />
              </div>

              {/* Right - Communication */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">COMUNICACIÓN</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-600/20 border border-yellow-500/30 rounded-lg">
                    <h4 className="font-bold text-yellow-300 mb-2">SEÑALES ELÉCTRICAS</h4>
                    <p className="text-sm text-slate-300">Impulsos nerviosos a través del axón</p>
                  </div>
                  <div className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg">
                    <h4 className="font-bold text-purple-300 mb-2">SEÑALES QUÍMICAS</h4>
                    <p className="text-sm text-slate-300">Neurotransmisores en sinapsis</p>
                  </div>
                  <div className="p-4 bg-cyan-600/20 border border-cyan-500/30 rounded-lg">
                    <h4 className="font-bold text-cyan-300 mb-2">VELOCIDAD</h4>
                    <p className="text-sm text-slate-300">Hasta 120 metros por segundo</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="brain" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* Left - Brain Image */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">ENCÉFALO HUMANO</h2>
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1725399633872-32ba508b0607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGJyYWluJTIwYW5hdG9teSUyMG5ldXJvc2NpZW5jZXxlbnwxfHx8fDE3NTczOTIzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Anatomía del cerebro humano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">1.4 KG</div>
                    <div className="text-sm text-slate-400">Peso promedio</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xl font-bold text-cyan-400">2%</div>
                    <div className="text-sm text-slate-400">Peso corporal</div>
                  </div>
                </div>
              </div>

              {/* Right - Brain Regions */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">REGIONES PRINCIPALES</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-6 h-6 text-blue-400" />
                      <h4 className="font-bold text-blue-300">CEREBRO</h4>
                    </div>
                    <div className="text-sm text-slate-300">Pensamiento • Memoria • Lenguaje • Control motor</div>
                  </div>
                  <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-green-400" />
                      <h4 className="font-bold text-green-300">CEREBELO</h4>
                    </div>
                    <div className="text-sm text-slate-300">Coordinación • Equilibrio • Movimientos precisos</div>
                  </div>
                  <div className="p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Activity className="w-6 h-6 text-red-400" />
                      <h4 className="font-bold text-red-300">TRONCO CEREBRAL</h4>
                    </div>
                    <div className="text-sm text-slate-300">Respiración • Ritmo cardíaco • Funciones vitales</div>
                  </div>
                  <div className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Network className="w-6 h-6 text-purple-400" />
                      <h4 className="font-bold text-purple-300">SISTEMA LÍMBICO</h4>
                    </div>
                    <div className="text-sm text-slate-300">Emociones • Memoria • Comportamiento</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="central" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* Left - Central Components */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">COMPONENTES</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-blue-600/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-xl font-bold mb-4 text-blue-300">ENCÉFALO</h3>
                    <div className="space-y-2 text-sm">
                      <div>• Centro de procesamiento principal</div>
                      <div>• Funciones cognitivas superiores</div>
                      <div>• Procesamiento sensorial</div>
                      <div>• Control de emociones</div>
                    </div>
                  </div>
                  <div className="p-6 bg-green-600/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-xl font-bold mb-4 text-green-300">MÉDULA ESPINAL</h3>
                    <div className="space-y-2 text-sm">
                      <div>• Vía de comunicación principal</div>
                      <div>• Transmisión de señales</div>
                      <div>• Control de reflejos</div>
                      <div>• Procesamiento básico</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Spinal Cord Details */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">MÉDULA ESPINAL</h2>
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1539815208687-a0f05e15d601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWwlMjBjb3JkJTIwYW5hdG9teSUyMG1lZGljYWx8ZW58MXx8fHwxNzU3MzkyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Anatomía de la médula espinal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-lg font-bold text-cyan-400">45 CM</div>
                    <div className="text-xs text-slate-400">Longitud</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-lg font-bold text-cyan-400">1.5 CM</div>
                    <div className="text-xs text-slate-400">Diámetro</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-lg font-bold text-cyan-400">31</div>
                    <div className="text-xs text-slate-400">Pares nervios</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="peripheral" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
              {/* Left - SNP Overview */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">SNP</h2>
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1725399078960-7bb17a7d1653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXJ2b3VzJTIwc3lzdGVtJTIwZGlhZ3JhbSUyMG1lZGljYWx8ZW58MXx8fHwxNzU3MzkyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Diagrama del sistema nervioso"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-slate-300">
                  Conecta el SNC con órganos, músculos y piel
                </p>
              </div>

              {/* Center - Divisions */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">DIVISIONES</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                    <h4 className="font-bold text-blue-300 mb-2">SOMÁTICO</h4>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• Control voluntario</div>
                      <div>• Músculos esqueléticos</div>
                      <div>• Información sensorial</div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                    <h4 className="font-bold text-green-300 mb-2">AUTÓNOMO</h4>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• Control involuntario</div>
                      <div>• Órganos internos</div>
                      <div>• Funciones vitales</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Autonomic Details */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">SISTEMA AUTÓNOMO</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                    <h4 className="font-bold text-red-300">SIMPÁTICO</h4>
                    <p className="text-sm text-slate-300">"Lucha o huida"</p>
                  </div>
                  <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                    <h4 className="font-bold text-blue-300">PARASIMPÁTICO</h4>
                    <p className="text-sm text-slate-300">"Descanso y digestión"</p>
                  </div>
                  <div className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg">
                    <h4 className="font-bold text-purple-300">ENTÉRICO</h4>
                    <p className="text-sm text-slate-300">Sistema digestivo</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-bold text-cyan-300 mb-3">NERVIOS CRANEALES</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>I. Olfatorio</div>
                    <div>II. Óptico</div>
                    <div>III. Oculomotor</div>
                    <div>V. Trigémino</div>
                    <div>VII. Facial</div>
                    <div>VIII. Auditivo</div>
                    <div>X. Vago</div>
                    <div>XII. Hipogloso</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

    
        </div>
      </div>
    
  );
}