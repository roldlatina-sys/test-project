import { MultiSelect } from './components/MultiSelect'
import { Table } from './components/Table'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Establishments Data
        </h1>

        <div className='max-w-lg mt-2 mb-5'>
        <MultiSelect/>
        </div>
        
        <Table />
        
      </div>
    </div>
  );
}

export default App;

