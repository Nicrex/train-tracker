import { useState, useEffect } from 'react';
import { TrainMap } from './components/MapContainer';
import { TrainInfoPanel } from './components/TrainInfoPanel';
import { generateTrains, updateTrainPositions } from './data/trains';
import { stations } from './data/stations';
import type { Train } from './types/train';
import './index.css';

function App() {
  const [trains, setTrains] = useState<Train[]>([]);
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize trains
    const initialTrains = generateTrains();
    setTrains(initialTrains);
    setIsLoading(false);

    // Update train positions every 5 seconds
    const interval = setInterval(() => {
      setTrains(currentTrains => updateTrainPositions(currentTrains));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTrainSelect = (train: Train) => {
    setSelectedTrain(train);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading train data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg overflow-hidden flex flex-col">
        <div className="p-4 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">TrainTracker</h1>
          <p className="text-blue-100 text-sm">Live Hungarian Train Tracking</p>
        </div>
        
        <div className="flex-1 p-4 overflow-hidden">
          <TrainInfoPanel
            trains={trains}
            selectedTrain={selectedTrain}
            onTrainSelect={handleTrainSelect}
          />
        </div>

        <div className="p-4 border-t bg-gray-50">
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>Total Trains:</span>
              <span className="font-medium">{trains.length}</span>
            </div>
            <div className="flex justify-between">
              <span>On Time:</span>
              <span className="font-medium text-green-600">
                {trains.filter(t => t.status === 'on-time').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delayed:</span>
              <span className="font-medium text-red-600">
                {trains.filter(t => t.status === 'delayed').length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1">
        <TrainMap
          trains={trains}
          stations={stations}
          selectedTrain={selectedTrain}
        />
      </div>
    </div>
  );
}

export default App;