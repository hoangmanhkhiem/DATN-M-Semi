import json
import src.router.scripts as scripts


def getuser_by_id_room(id):
    path = scripts.PATH_USER
    try:
        with open(path, 'r') as f:
            user = json.load(f)
            for key in user:
                if key['id'] == id:
                    return key['username'], key['password']
    except:
        return None
    return None