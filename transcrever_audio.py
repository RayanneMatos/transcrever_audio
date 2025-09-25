from flask import Flask, request, render_template, send_file
import whisper
import os

app = Flask(__name__)

# Carrega o modelo Whisper uma vez
model = whisper.load_model("small")

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Recebe o arquivo enviado
        file = request.files["audio"]
        if file:
            filename = file.filename
            file.save(filename)

            # Transcrição
            result = model.transcribe(filename, language="pt")

            # Salva arquivo txt
            txt_filename = os.path.splitext(filename)[0] + ".txt"
            with open(txt_filename, "w", encoding="utf-8") as f:
                f.write(result["text"])

            return send_file(txt_filename, as_attachment=True)

    return '''
        <h1>Transcrever Áudio</h1>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="audio">
            <input type="submit" value="Transcrever">
        </form>
    '''

if __name__ == "__main__":
    app.run(debug=True)
