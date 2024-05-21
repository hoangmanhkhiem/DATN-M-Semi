import subprocess
import src.router.user as u
import src.router.scripts as s
import src.router.infomation as i
import src.router.program as pr

def send_file_to_vm(path_vm,id):
    try:
        # Get username and password
        path_host,path_file = pr.get_info_program_by_id(id)
        VM_USERNAME = s.VM_USER
        VM_PASSWORD = s.VM_PASSWORD 
        command = [s.SCRIPT_CONNECT_TO_SERVER,s.PATH_VMRUN, "-T", "ws", "-gu", VM_USERNAME, "-gp", VM_PASSWORD, "copyFileFromHostToGuest", path_vm, path_host, path_file]
        print("File sent to VM: " + path_vm)
    except subprocess.CalledProcessError as e:
        print("Error running command: " + e.cmd)
        print("Return code: " + str(e.returncode))


def send_file_to_all_vm(path_file, room):
    try:
        list_pathvm = i.get_pathvm_by_room(room)
        VM_USERNAME, VM_PASSWORD = u.getuser_by_id_room(room)
        VM_USERNAME = '"' + VM_USERNAME + '"'
        VM_PASSWORD = '"' + VM_PASSWORD + '"'
        for path in list_pathvm:
            path = '"' + path + '"'
            command = s.SCRIPT_CONNECT_TO_SERVER + " " + s.PATH_VMRUN + " -gu" + VM_USERNAME + " -gp " + VM_PASSWORD + " CopyFileFromHostToGuest " + path + " " + path_file
            subprocess.run(command, shell=True, stdout=subprocess.PIPE)
            print("File sent to VM: " + path)
    except subprocess.CalledProcessError as e:
        print("Error running command: " + e.cmd)
        print("Return code: " + str(e.returncode))