#!/bin/bash
# SocorroJá - Quick Start Script

echo "🚀 SocorroJá - Iniciando..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado. Instale em https://nodejs.org"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm não está instalado"
    exit 1
fi

echo "✅ Node.js e npm encontrados"
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit

echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
    echo "🎉 Iniciando Expo..."
    echo ""
    echo "Próximas ações:"
    echo "  1. Instale Expo Go no seu celular (iOS/Android)"
    echo "  2. Escaneie o código QR que aparecerá no terminal"
    echo "  3. Ou pressione 'w' para abrir no navegador"
    echo ""
    
    npx expo start
else
    echo "❌ Erro na instalação das dependências"
    exit 1
fi
