import { Train, Clock, MapPin, Users, Zap } from 'lucide-react';
import type { Train as TrainType } from '../types/train';

interface TrainInfoPanelProps {
  trains: TrainType[];
  selectedTrain: TrainType | null;
  onTrainSelect: (train: TrainType) => void;
}

export function TrainInfoPanel({ trains, selectedTrain, onTrainSelect }: TrainInfoPanelProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time': return 'text-green-600 bg-green-50 border-green-200';
      case 'delayed': return 'text-red-600 bg-red-50 border-red-200';
      case 'cancelled': return 'text-red-800 bg-red-100 border-red-300';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'railjet': return 'bg-red-900 text-white';
      case 'eurocity': return 'bg-orange-500 text-white';
      case 'express': return 'bg-red-600 text-white';
      case 'intercity': return 'bg-orange-400 text-white';
      case 'regional': return 'bg-green-500 text-white';
      case 'freight': return 'bg-gray-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'railjet': return '🚄';
      case 'eurocity': return '🚅';
      case 'express': return '🚆';
      case 'intercity': return '🚈';
      case 'regional': return '🚉';
      case 'freight': return '🚂';
      default: return '🚊';
    }
  };

  const sortedTrains = [...trains].sort((a, b) => {
    // Sort by type priority, then by number
    const typePriority = { railjet: 1, eurocity: 2, express: 3, intercity: 4, regional: 5, freight: 6 };
    const aPriority = typePriority[a.type as keyof typeof typePriority] || 7;
    const bPriority = typePriority[b.type as keyof typeof typePriority] || 7;
    
    if (aPriority !== bPriority) return aPriority - bPriority;
    return a.number.localeCompare(b.number);
  });

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
        <Train className="w-6 h-6" />
        <div>
          <h2 className="text-lg font-bold">Hungarian Railways</h2>
          <p className="text-blue-100 text-sm">Live Train Tracking System</p>
        </div>
        <div className="ml-auto">
          <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {trains.length} ACTIVE
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {sortedTrains.map((train) => (
          <div
            key={train.id}
            className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedTrain?.id === train.id 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
            onClick={() => onTrainSelect(train)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getTypeIcon(train.type)}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{train.number}</h3>
                  <p className="text-xs text-gray-600 font-medium">{train.name}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-bold px-2 py-1 rounded ${getTypeColor(train.type)}`}>
                  {train.type.toUpperCase()}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded border ${getStatusColor(train.status)}`}>
                  {train.status === 'delayed' ? `+${train.delay}min` : train.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-600 space-y-1 mb-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className="font-medium">{train.origin}</span>
                <span>→</span>
                <span className="font-medium">{train.destination}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{train.departureTime} - {train.arrivalTime}</span>
                {train.platform && (
                  <>
                    <span className="mx-1">•</span>
                    <span>Platform {train.platform}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-blue-500" />
                  <span className="font-medium">{train.speed} km/h</span>
                </div>
                <div>
                  <span className="text-gray-500">Next:</span>
                  <span className="font-medium ml-1">{train.nextStation}</span>
                </div>
              </div>
              
              {train.capacity.total > 0 && (
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span className="font-medium">
                    {Math.round((train.capacity.occupied / train.capacity.total) * 100)}%
                  </span>
                </div>
              )}
            </div>

            <div className="mt-2 text-xs text-gray-500">
              <span className="font-medium">{train.operator}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Footer */}
      <div className="p-4 border-t bg-gray-50 mt-4">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Total Trains:</span>
              <span className="font-bold">{trains.length}</span>
            </div>
            <div className="flex justify-between">
              <span>On Time:</span>
              <span className="font-bold text-green-600">
                {trains.filter(t => t.status === 'on-time').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delayed:</span>
              <span className="font-bold text-red-600">
                {trains.filter(t => t.status === 'delayed').length}
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Express/IC:</span>
              <span className="font-bold">
                {trains.filter(t => ['railjet', 'eurocity', 'express', 'intercity'].includes(t.type)).length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Regional:</span>
              <span className="font-bold">
                {trains.filter(t => t.type === 'regional').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Freight:</span>
              <span className="font-bold">
                {trains.filter(t => t.type === 'freight').length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}