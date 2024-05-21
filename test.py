import json
def install():
    with open('src/programs/list_programs.json', 'r') as f:
        program = json.load(f)
    for i in program:
        print(i)

install()