Transcrever Áudio

Aplicação web para transcrição de arquivos de áudio usando o modelo Whisper da OpenAI. O usuário pode enviar arquivos de áudio (.mp3, .wav, .m4a), e a aplicação gera uma transcrição em português, que pode ser baixada em arquivo .txt.

Funcionalidades

Upload de arquivos de áudio.

Transcrição automática para texto em português.

Download da transcrição em .txt.

Interface web com barra de progresso simulada.

Estrutura do Projeto
transcrever_audio/
├─ meu_app/
│   ├─ app.py           # Script principal do Flask
│   ├─ templates/
│   │   └─ index.html   # Página web
│   └─ static/
│       ├─ style.css    # Estilos
│       └─ script.js    # Scripts JS (barra de progresso e feedback)

Pré-requisitos

Python 3.8 ou superior

pip

FFmpeg (necessário para processar arquivos de áudio)

Instalação

Clone o repositório:

git clone https://github.com/RayanneMatos/transcrever_audio.git
cd transcrever_audio/meu_app


Crie um ambiente virtual (opcional, mas recomendado):

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows


Instale as dependências:

pip install --upgrade pip
pip install flask openai-whisper


Instale FFmpeg:

Linux (Debian/Ubuntu):

sudo apt update
sudo apt install ffmpeg -y


Windows:
Baixe de https://ffmpeg.org/download.html
 e adicione ao PATH.

Como rodar
No terminal, dentro da pasta meu_app:
python app.py


Abra o navegador em:
http://127.0.0.1:5000
Você verá a interface para enviar áudios e baixar a transcrição.

Observações

O GitHub Pages não suporta Flask, então o app só roda localmente ou em serviços como Render, Railway ou PythonAnywhere.
O modelo Whisper suporta diferentes tamanhos (tiny, base, small, medium, large). No app.py, o padrão é small.

Créditos
Desenvolvido por Rayanne Matos
Baseado no modelo Whisper da OpenAI
UI simples em HTML, CSS e JavaScript
