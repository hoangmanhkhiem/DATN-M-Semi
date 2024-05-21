import json
import src.router.scripts as scripts

def get_config_by_room(path_room):
    config_list = []
    try:
        with open(path_room, 'r') as f:
            room = json.load(f)
            for key in room:
                k = key['id'], key['name'], key['status'], key['os'], key['cpu'], key['memory'], key['disk'], key[
                    'network']
                config_list.append(k)
    except:
        return None
    return config_list, len(config_list)


def get_full_config():
    path_const = scripts.PATH_DATA
    list_config = []
    try:
        for i in range(1, 4):
            path_room = path_const + "40" + str(i) + ".json"
            list_config.append(get_config_by_room(path_room))
    except:
        return None
    return list_config, len(list_config)


def get_id_name_status(path_rooms):
    config_list = []
    try:
        with open(path_rooms, 'r') as f:
            room = json.load(f)
            for key in room:
                k = key['id'], key['name'], key['status']
                config_list.append(k)
    except:
        return None
    return config_list, len(config_list)


def get_full_id_name_status():
    path_const = scripts.PATH_DATA
    list_config = []
    try:
        for i in range(1, 4):
            path_room = path_const + "40" + str(i) + ".json"
            list_config.append(get_id_name_status(path_room))
    except:
        return None
    return list_config, len(list_config)


def get_pathvm_by_room(path_rooms):
    path_const = scripts.PATH_DATA
    path_list = []
    try:
        path_room = path_const + path_rooms + ".json"
        with open(path_room, 'r') as f:
            room = json.load(f)
            for key in room:
                    k = key['path']
                    path_list.append(k)
    except:
        return None
    return path_list

def get_pathvm_by_id_and_room(id, room):
    path_const = scripts.PATH_DATA
    try:
        path_room = path_const + room + ".json"
        with open(path_room, 'r') as f:
            room = json.load(f)
            for key in room:
                if key['id'] == id:
                    k = key['path']
                    return k
    except:
        return None


def get_all_vmpath():
    path_const = scripts.PATH_DATA
    path_list = []
    try:
        for i in range(1,4):
            path_room = path_const + "40" + str(i) + ".json"
            with open(path_room, 'r') as f:
                room = json.load(f)
                for key in room:
                    k = key['path'], key['id']
                    path_list.append(k)
    except:
        return None
    return path_list