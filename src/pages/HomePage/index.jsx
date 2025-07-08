import React, { useState } from 'react';

const HomePage = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('usuarios');

  const menuItems = [
    { id: 'usuarios', label: 'Usuarios', icon: '📊', active: true },
    { id: 'proyectos', label: 'Proyectos', icon: '📋', hasArrow: true },
    { id: 'proveedores', label: 'Proveedores', icon: '📦' },
    { id: 'asignacion', label: 'Asignación', icon: '📝' },
    { id: 'simulador', label: 'Simulador 3D', icon: '🔄' }
  ];

  const projects = [
    { name: 'Cumaruleta', type: 'Rodapies', code: '01 11.3600', image: '🪵' },
    { name: 'Chivacoas', type: 'Chavados', code: '00 10.3680', image: '🪵' },
    { name: 'Cumbalak', type: 'Nuvens', code: '01 10.8000', image: '🪵' }
  ];

  const BarChart = ({ data, maxValue = 8 }) => (
    <div className="h-48 relative">
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-4">
        {data.map((value, index) => (
          <div 
            key={index}
            className={`w-1/4 rounded-t-sm ${
              index % 2 === 0 ? 'bg-orange-400' : 'bg-blue-300'
            }`}
            style={{ height: `${(value / maxValue) * 100}%` }}
          />
        ))}
      </div>
      <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-gray-500 text-sm">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{maxValue - (i * 2)}</span>
        ))}
      </div>
    </div>
  );

  const MaterialsBarChart = ({ data, maxValue = 35 }) => (
    <div className="h-48 relative">
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-4">
        {data.map((value, index) => (
          <div 
            key={index}
            className={`w-1/6 rounded-t-sm ${
              index % 2 === 0 ? 'bg-orange-400' : 'bg-gray-300'
            }`}
            style={{ height: `${(value / maxValue) * 100}%` }}
          />
        ))}
      </div>
      <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-gray-500 text-sm">
        {[35, 25, 15, 5].map((value, i) => (
          <span key={i}>{value}</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-sm">
        <div className="flex items-center mb-10">
          <div className="w-8 h-8 bg-orange-500 rounded mr-2 flex items-center justify-center text-white font-bold">
            E
          </div>
          <span className="text-2xl font-bold text-gray-800">Envifo</span>
        </div>
        
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="mb-4">
                <button
                  onClick={() => setActiveMenuItem(item.id)}
                  className={`w-full flex items-center justify-between p-3 font-medium rounded-lg transition-all ${
                    activeMenuItem === item.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-500 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.label}
                  </div>
                  {item.hasArrow && <span className="text-gray-400">›</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-end items-center mb-8">
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 font-medium hover:text-gray-900">
              Inventario
            </a>
            <a href="#" className="text-gray-600 font-medium hover:text-gray-900">
              Proyectos
            </a>
            <a href="#" className="text-gray-600 font-medium hover:text-gray-900">
              Configuración
            </a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Simulador 3D
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              🔔
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </nav>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inventory Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Inventory Summary
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Mayores pérdidas base life
            </p>
            
            <BarChart data={[2, 5, 4, 2]} />
            
            <div className="flex justify-center items-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-sm mr-2"></div>
                <span className="text-sm text-gray-600">2021/JUL</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-sm mr-2"></div>
                <span className="text-sm text-gray-600">2021/A</span>
              </div>
            </div>
          </div>

          {/* Materials Commerce */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Materiales Commerce
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Inventario Suministros Cda 1500
            </p>
            
            <MaterialsBarChart data={[8, 26, 17, 35, 14]} />
            
            <div className="flex justify-center items-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-sm mr-2"></div>
                <span className="text-sm text-gray-600">DI</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-sm mr-2"></div>
                <span className="text-sm text-gray-600">SI</span>
              </div>
            </div>
          </div>

          {/* My Projects */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              My Projects
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Envoltas San Centro masivas
            </p>
            
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 text-xl">
                      {project.image}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{project.name}</p>
                      <p className="text-sm text-gray-500">{project.type}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-700">{project.code}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Materials */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Materials
            </h2>
            
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  🚛
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Trjetos COD casual</p>
                  <p className="text-sm text-gray-500">envíos, clasificación</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>⏰</span>
                <span>2 hrs masaprox.</span>
              </div>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Ir a Simulador
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { HomePage };