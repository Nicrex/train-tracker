import { Train } from 'lucide-react';
import type { Train as TrainType } from '../types/train';

interface TrainInfoPanelProps {
  trains: TrainType[];
  selectedTrain: TrainType | null;
  onTrainSelect: (train: TrainType) => void;
}

export function TrainInfoPanel({ trains, selectedTrain, onTrainSelect }: TrainInfoPanelProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time': return 'text-green-600 bg-green-50';
      case 'delayed': return 'text-red-600 bg-red-50';
      case 'cancelled': return 'text-red-800 bg-red-100';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'express': return 'bg-red-100 text-red-800';
      case 'intercity': return 'bg-yellow-100 text-yellow-800';
      case 'regional': return 'bg-green-100 text-green-800';
      case 'freight': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-h-96 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4">
        <Train className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Live Trains</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
          {trains.length} active
        </span>
      </div>

      <div className="space-y-2">
        {trains.map((train) => (
          <div
            key={train.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
              selectedTrain?.id === train.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onTrainSelect(train)}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{train.number}</h3>
                <p className="text-xs text-gray-600">{train.name}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-medium px-2 py-1 rounded ${getTypeColor(train.type)}`}>
                  {train.type.toUpperCase()}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(train.status)}`}>
                  {train.status === 'delayed' ? `+${train.delay}min` : train.status}
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>Speed:</span>
                <span className="font-medium">{train.speed} km/h</span>
              </div>
              <div className="flex justify-between">
                <span>Next:</span>
                <span className="font-medium">{train.nextStation}</span>
              </div>
              {train.capacity.total > 0 && (
                <div className="flex justify-between">
                  <span>Occupancy:</span>
                  <span className="font-medium">
                    {Math.round((train.capacity.occupied / train.capacity.total) * 100)}%
                  </span>
                </div>
              )}
            </div>

            <div className="mt-2 text-xs text-gray-500">
              <div>{train.origin} → {train.destination}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}