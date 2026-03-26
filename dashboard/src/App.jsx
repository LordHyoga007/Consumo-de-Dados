import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Smartphone, Wifi, CreditCard, AlertCircle } from 'lucide-react';

// Dados fictícios de consumo de internet (em GB)
const dataConsumo = [
  { dia: '01/03', gb: 1.2 },
  { dia: '05/03', gb: 2.5 },
  { dia: '10/03', gb: 4.0 },
  { dia: '15/03', gb: 5.8 },
  { dia: '20/03', gb: 8.1 },
  { dia: '25/03', gb: 10.5 },
];

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f5', minHeight: '100vh', padding: '20px' }}>
      <header style={{ backgroundColor: '#660099', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Meu Plano Mobile</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>Bem-vindo! Aqui está o resumo da sua linha.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {/* Card de Consumo */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#660099' }}>
            <Smartphone size={24} style={{ marginRight: '10px' }} />
            <h2 style={{ margin: 0, fontSize: '18px' }}>Consumo de Dados</h2>
          </div>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>10.5 GB</p>
          <p style={{ color: '#666', margin: 0 }}>de 15 GB disponíveis</p>
        </div>

        {/* Card de Fatura */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#660099' }}>
            <CreditCard size={24} style={{ marginRight: '10px' }} />
            <h2 style={{ margin: 0, fontSize: '18px' }}>Última Fatura</h2>
          </div>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>R$ 89,90</p>
          <p style={{ color: 'green', margin: 0, fontWeight: 'bold' }}>Paga em 10/03</p>
        </div>

        {/* Card de Status da Rede */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#660099' }}>
            <Wifi size={24} style={{ marginRight: '10px' }} />
            <h2 style={{ margin: 0, fontSize: '18px' }}>Status da Rede</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', marginRight: '10px' }}></div>
            <p style={{ margin: 0, fontWeight: '500' }}>5G Operando Normalmente</p>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '20px' }}>Histórico de Consumo (Março)</h2>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataConsumo}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="gb" stroke="#660099" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default App;