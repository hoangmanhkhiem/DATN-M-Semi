import json
import src.router.infomation as i
import src.router.scripts as s

def get_info_program_by_id(id):
    with open(s.PATH_PROGRAM,"r") as f:
        pro = json.load(f)
        for i in pro:
            if i['id'] == id:
                return i['link_source'], i['link_in_vm']
            