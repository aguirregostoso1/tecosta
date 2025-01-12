document.addEventListener('DOMContentLoaded', function () {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');

    // Função para buscar estados
    function buscarEstados() {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(estados => {
                estados.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordenar por nome
                estados.forEach(estado => {
                    let option = document.createElement('option');
                    option.value = estado.id;
                    option.textContent = estado.nome;
                    estadoSelect.appendChild(option);
                });
            });
    }

    // Função para buscar cidades de um estado
    function buscarCidades(estadoId) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            .then(response => response.json())
            .then(cidades => {
                cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>'; // Limpa as opções anteriores
                cidadeSelect.disabled = false;
                cidades.forEach(cidade => {
                    let option = document.createElement('option');
                    option.value = cidade.nome;
                    option.textContent = cidade.nome;
                    cidadeSelect.appendChild(option);
                });
            });
    }

    // Evento de mudança no estado
    estadoSelect.addEventListener('change', function () {
        let estadoId = estadoSelect.value;
        if (estadoId) {
            buscarCidades(estadoId);
        } else {
            cidadeSelect.innerHTML = '<option value="">Selecione o Estado primeiro</option>';
            cidadeSelect.disabled = true;
        }
    });
    const buscarEstadosIBGE = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v2/malhas/BR');
            if (!response.ok) throw new Error('Erro ao buscar estados do IBGE');
    
            const data = await response.json();
            const estados = {};
    
            // Estrutura de dados do IBGE com estado e seus códigos
            data.data.forEach(estado => {
                estados[estado.sigla] = estado.nome;
            });
    
            return estados;
        } catch (err) {
            console.error('Erro ao buscar dados do IBGE:', err.message);
            return {}; // Caso ocorra algum erro, retorna um objeto vazio
        }
    };

    // Inicializa buscando os estados
    buscarEstados();
});