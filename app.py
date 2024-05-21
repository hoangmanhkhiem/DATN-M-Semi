from flask import Flask, render_template, request, send_from_directory
import src.remote.restart as restart
import src.remote.program as program
import src.remote.process as process
import json

app = Flask(__name__, template_folder='template')


@app.route('/')
def index():
    return render_template('scanner.html')


@app.route('/forms')
def forms():
    return render_template('forms.html')


@app.route('/manager')
def manager():
    return render_template('manager.html')


@app.route('/details')
def details():
    return render_template('details.html')


@app.route('/process')
def process():
    return render_template('process.html')


@app.route('/src/data/<path:path>', methods=['GET'])
def get_data(path):
    return send_from_directory('src/data', path)


# Reset
@app.route('/src/remote/restart.py', methods=['PUT'])
def restart():
    # restart.restart_vm_by_id(request.json['id'], request.json['room'])
    return 'Restart!'


@app.route('/src/remote/program.py', methods=['PUT'])
def check_program_installed():
    room = request.json['room']
    # return program.check_program_installed_VM(room)
    bool_list = ["1", "1", "1", "0", "1", "0", "1"]
    return bool_list


@app.route('/src/remote/process.py', methods=['PUT'])
def get_list_process():
    room = request.json['room']
    # return process.exce_list_process_in_1vm(room)
    return [{"name": "chrome.exe", "pid": "1234"}, {"name": "notepad.exe", "pid": "5678"}]


@app.route('/src/remote/killprocess', methods=['PUT'])
def kill_process():
    name = request.json['name']
    room = request.json['room']
    # return process.kill_process_by_name(name,room)
    return "SC"


@app.route('/install', methods=['PUT'])
def install():
    id = request.json['id']
    room = request.json['room']
    name_program = request.json['name_program']
    with open('src/programs/list_programs.json', 'r') as f:
        programs = json.load(f)
    for i in programs:
        if i['name'] == name_program:
            # return program.send_file_to_vm(id, room, i['link_source'], i['link_in_vm'])
            return 'SC'
    return 'Error: Program not found!'


if __name__ == '__main__':
    app.run(debug=True)
