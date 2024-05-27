import json
import src.router.scripts as s
import infomation as i
import subprocess


def get_list_ip(path_room):
    ip_list = []
    try:
        with open(path_room, 'r') as f:
            room = json.load(f)
            for key in room:
                ip_list.append(key['ip'])
    except:
        return None
    return ip_list


def get_list_full_ip():
    path_const = s.PATH_DATA
    list_ip = []
    try:
        # Duyet het tat ca cac file trong folder data
        for i in range(1, 4):
            name = "40" + str(i)
            path_room = path_const + name + ".json"
            list_ip.append(get_list_ip(path_room))
    except:
        return None
    return list_ip


def set_ip_by_id(id, ip, name):
    config_list = []
    try:
        name = s.PATH_DATA + name + ".json"
        with open(name, 'r') as f:
            room = json.load(f)
            for key in room:
                if key['id'] == id:
                    key['ip'] = ip
                config_list.append(key)
        with open(name, 'w') as f:
            json.dump(config_list, f)

    except:
        return 0
    return 1


def get_ip_by_id(id, name):
    try:
        name = s.PATH_DATA + name + ".json"
        with open(name, 'r') as f:
            room = json.load(f)
            for key in room:
                if key['id'] == id:
                    return key['ip']
    except:
        return None
    return None


def scan_id_in_range(start, end):
    path_const = s.PATH_DATA
    config_list = []
    try:
        # Duyet het tat ca cac file trong folder data
        for i in range(1, 4):
            name = "40" + str(i)
            path_room = path_const + name + ".json"
            with open(path_room, 'r') as f:
                room = json.load(f)
                for key in room:
                    temp_str = key['ip'].split('.')
                    temp_int = int(temp_str[3])
                    if end > temp_int > start:
                        k = key['id'], key['name'], key['status'], key['ip'], key['network']
                        config_list.append(k)
    except:
        return None
    return config_list


def scan_ip_vm_by_id(id, room):
    try:
        path = i.get_pathvm_by_id_and_room(id, room)
        path = '"' + path + '"'
        subprocess.run([s.PATH_VMRUN, "getGuestIPAddress", path])
    except subprocess.CalledProcessError as e:
        print("Error running command: " + e.cmd)
        print("Return code: " + str(e.returncode))
