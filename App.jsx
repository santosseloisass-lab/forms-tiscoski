import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    camiseta: '',
    calca: '',
    calcado: '',
    observacoes: ''
  });

  const [enviado, setEnviado] = useState(false);

  // Lista de nomes ordenada alfabeticamente
  const nomes = [
    'ADRIANE CRESTINA SOARES',
    'ALESSANDRA ARRUDA SOTEIRO ASSUNÇÃO JOAQUIM',
    'ALEX BERTO ELIAS',
    'AMANDA APARECIDA DE SOUZA',
    'ANA CLARA MATIAS ELEOTERIO',
    'ANA PAULA CASTILHO',
    'ARIEL ALEX DA ROSA',
    'BARBARA BARBOSA COSTA',
    'BRUNA BITTENCOURT FERNANDES',
    'CAROLINE MELO ANDRADES CARDOSO',
    'CARLOS DANIEL RIBEIRO',
    'CLEDIMAR TIBURSKI',
    'EDENILSON NOLASCO',
    'EDIMAR VOREL',
    'ENIO JOSE HENRICH',
    'ÉRICA CRISTINA LODI DA SILVA',
    'ELOISA DOS SANTOS SOSNOWSKI',
    'FERNANDO JOSE SOARES FILHO',
    'FLAVIO TADEU',
    'GISELE MOLINA JACINTHO',
    'HEMYLY CLAUDINO',
    'HERIK DA SILVA DE SOUZA',
    'IRAMAR MARINHO JUNIOR',
    'IVAN DE ARAUJO MARQUES',
    'JOHNNY KLEBER DE MORAES',
    'KATIELLY CRISTINE CHAVES',
    'LEANDRO ANTONIO PERONDI',
    'LUCIANA ACCORSI PRADO',
    'LUIZ VICTOR MACIEL CUNHA',
    'MAICON ROLDÃO RAMOS',
    'MARCELO PORCELLI',
    'MARCIEL FERNANDES CARDOSO',
    'MARIA CUSTODIA GODINHO',
    'MARIANA KATCIPIS',
    'MARIELLE BECK',
    'MONIQUE MALLMANN',
    'NELIETTE SOUZA',
    'PAULO HERMANN LUDORF',
    'PAULO RODRIGO ZANQUETA',
    'RAFAEL DA CUNHA',
    'ROSANE KUNST',
    'SANDRO LUIS COITO',
    'SIDNEI MAMED PLANAS',
    'WILLIAM FELIPE TEODORO'
  ];

  const camisetas = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'];
  const calcas = ['34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54'];
  const calcados = ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.camiseta || !formData.calca || !formData.calcado) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Log dos dados (em produção, enviar para backend)
    console.log('Dados do formulário:', formData);

    // Simular envio
    setEnviado(true);
    setTimeout(() => {
      setFormData({
        nome: '',
        camiseta: '',
        calca: '',
        calcado: '',
        observacoes: ''
      });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://tiscoski-fit-form.lovable.app/__l5e/assets-v1/2f23d513-1a4e-4b0c-8dcc-416b6e8c6f81/tiscoski-logo.png" 
            alt="Tiscoski Distribuidora"
            className="h-16"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">Cadastro de Vestimentas</h1>
        <p className="text-center text-gray-600 mb-8">Selecione seu nome e informe seus tamanhos</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome completo <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione seu nome...</option>
                {nomes.map((nome, index) => (
                  <option key={index} value={nome}>
                    {nome}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 pointer-events-none text-gray-600" size={20} />
            </div>
          </div>

          {/* Camiseta */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Camiseta <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="camiseta"
                value={formData.camiseta}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tamanho...</option>
                {camisetas.map((tam, index) => (
                  <option key={index} value={tam}>
                    {tam}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 pointer-events-none text-gray-600" size={20} />
            </div>
          </div>

          {/* Calça */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Calça <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="calca"
                value={formData.calca}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tamanho...</option>
                {calcas.map((tam, index) => (
                  <option key={index} value={tam}>
                    {tam}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 pointer-events-none text-gray-600" size={20} />
            </div>
          </div>

          {/* Calçado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Calçado <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="calcado"
                value={formData.calcado}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Numeração...</option>
                {calcados.map((tam, index) => (
                  <option key={index} value={tam}>
                    {tam}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 pointer-events-none text-gray-600" size={20} />
            </div>
          </div>

          {/* Observações */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observações (opcional)
            </label>
            <textarea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Adicione qualquer observação relevante..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            {enviado ? 'Enviando...' : 'Enviar resposta'}
          </button>
        </form>

        {/* Success Message */}
        {enviado && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            ✓ Formulário enviado com sucesso!
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p className="font-semibold mb-2">Tiscoski Distribuidora — uso interno</p>
          <a href="#" className="text-blue-600 hover:underline">Acesso restrito</a>
        </div>
      </div>
    </div>
  );
}

export default App;
