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
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    // Initialize trains
    const initialTrains = generateTrains();
    setTrains(initialTrains);
    setIsLoading(false);
    setLastUpdate(new Date());

    // Update train positions every 3 seconds for more fluid movement
    const interval = setInterval(() => {
      setTrains(currentTrains => {
        const updatedTrains = updateTrainPositions(currentTrains);
        setLastUpdate(new Date());
        return updatedTrains;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTrainSelect = (train: Train) => {
    setSelectedTrain(train);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Loading Hungarian Railway System</h2>
          <p className="text-gray-600">Initializing live train tracking...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-full lg:w-96 lg:h-full bg-white shadow-xl flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 flex-shrink-0" style={{ height: '50vh' }}>
        <TrainInfoPanel
          trains={trains}
          stations={stations}
          selectedTrain={selectedTrain}
          onTrainSelect={handleTrainSelect}
        />
        
        {/* Last Update Footer */}
        <div className="px-4 py-2 bg-gray-100 border-t text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <span>Last Update:</span>
            <span className="font-mono">{lastUpdate.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative h-full w-full">
        <TrainMap
          trains={trains}
          stations={stations}
          selectedTrain={selectedTrain}
          onTrainSelect={handleTrainSelect}
        />
      </div>
    </div>
  );
}

export default App;
