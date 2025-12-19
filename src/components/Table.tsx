const DUMMY_DATA = [
  { foo: "1", bar: "Sample 1", baz: "Lorem", qux: "Ipsum", lorem: "Dolor", ipsum: "Sit", amet: "Consectetur" },
  { foo: "2", bar: "Sample 2", baz: "Lorem", qux: "Ipsum", lorem: "Dolor", ipsum: "Sit", amet: "Consectetur" },
  { foo: "3", bar: "Sample 3", baz: "Lorem", qux: "Ipsum", lorem: "Dolor", ipsum: "Sit", amet: "Consectetur" },
]

export function Table() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 bg-opacity-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* TODO: REMOVE ANY */}
            {DUMMY_DATA.map((item: any, index: number) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.foo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.bar}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.baz}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qux}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.lorem}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ipsum}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.amet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
