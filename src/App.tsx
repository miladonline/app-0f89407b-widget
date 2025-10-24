interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Hello World!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to your simple React widget.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">Data from OpenAI:</h2>
            <pre className="text-sm text-gray-800 overflow-auto">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;