@echo off
REM SocorroJá - Quick Start Script for Windows

echo 🚀 SocorroJá - Iniciando...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js não está instalado. Instale em https://nodejs.org
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm não está instalado
    exit /b 1
)

echo ✅ Node.js e npm encontrados
echo.

REM Navigate to project directory
cd /d "%~dp0"

echo 📦 Instalando dependências...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ Dependências instaladas com sucesso!
    echo.
    echo 🎉 Iniciando Expo...
    echo.
    echo Próximas ações:
    echo   1. Instale Expo Go no seu celular (iOS/Android)
    echo   2. Escaneie o código QR que aparecerá no terminal
    echo   3. Ou pressione 'w' para abrir no navegador
    echo.
    
    call npx expo start
) else (
    echo ❌ Erro na instalação das dependências
    exit /b 1
)
