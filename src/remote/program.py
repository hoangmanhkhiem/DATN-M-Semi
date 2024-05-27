import src.router.scripts as s
import src.router.user as u
import src.router.infomation as i
import src.remote.process as p
import subprocess
import json

list_program = []


def load_program_need_check():
    global list_program
    list_program = []
    try:
        with open(s.PATH_PROGRAM, 'r') as f:
            program = json.load(f)
            for key in program:
                k = key['name'], key['link_source'], key['link_in_vm']
                list_program.append(k)
    except:
        print("Error: Can't load program need check.")


def check_program_installed(room):
    VM_USER, VM_PASSWORD = s.VM_USER, s.VM_PASSWORD
    PATH_VMX = room
    VM_USER = '"' + VM_USER + '"'
    VM_PASSWORD = '"' + VM_PASSWORD + '"'
    PATH_VMX = '"' + PATH_VMX + '"'
    list_info = []
    for name_computer in PATH_VMX:
        alone_info = []
        print(f"Checking program in {name_computer}")
        alone_info.append(name_computer)
        for program_name, program_path_in_ln, program_path in list_program:
            command = s.SCRIPT_CONNECT_TO_SERVER + " " + s.PATH_VMRUN + ' -gu ' + VM_USER + ' -gp ' + VM_PASSWORD + ' runProgramInGuest ' + name_computer + ' -noWait ' + program_path
            try:
                subprocess.run(command, shell=True, capture_output=True, text=True, check=True)
                alone_info.append("1")
            except subprocess.CalledProcessError as e:
                print(f"Error: {e}")
                alone_info.append("0")
            program_name = str(program_name)
            while True:
                process_id = p.find_PID_by_name(program_name, name_computer)
                if "None" in str(process_id):
                    break
                command = s.SCRIPT_CONNECT_TO_SERVER + ' ' + s.PATH_VMRUN + '-gu ' + s.VM_USER + ' -gp ' + s.VM_PASSWORD + ' killProcessInGuest ' + name_computer + ' ' + str(
                    process_id)
                try:
                    subprocess.run(command, text=True, shell=True, stdout=subprocess.PIPE)
                except subprocess.CalledProcessError as e:
                    print(f"Error: {e}")
        list_info.append(alone_info)
    return list_info


def check_program_installed_VM(PATH_VMX):
    VM_USER, VM_PASSWORD = s.VM_USER, s.VM_PASSWORD
    VM_USER = '"' + VM_USER + '"'
    VM_PASSWORD = '"' + VM_PASSWORD + '"'
    PATH_VMX = '"' + PATH_VMX + '"'
    list_info = []
    load_program_need_check()
    print(f"Checking program in {PATH_VMX}")
    # list_info.append(PATH_VMX)
    for program_name, program_path_in_ln, program_path in list_program:
        command = s.SCRIPT_CONNECT_TO_SERVER + " " + s.PATH_VMRUN + ' -gu ' + VM_USER + ' -gp ' + VM_PASSWORD + ' runProgramInGuest ' + PATH_VMX + ' -noWait ' + program_path
        try:
            subprocess.run(command, shell=True, capture_output=True, text=True, check=True)
            list_info.append("1")
        except subprocess.CalledProcessError as e:
            print(f"Error: {e}")
            list_info.append("0")
        program_name = str(program_name)
        while True:
            process_id = p.find_PID_by_name(program_name, PATH_VMX)
            if "None" in str(process_id):
                break
            command = s.SCRIPT_CONNECT_TO_SERVER + ' ' + s.PATH_VMRUN + '-gu ' + s.VM_USER + ' -gp ' + s.VM_PASSWORD + ' killProcessInGuest ' + PATH_VMX + ' ' + str(
                process_id)
            try:
                subprocess.run(command, text=True, shell=True, stdout=subprocess.PIPE)
            except subprocess.CalledProcessError as e:
                print(f"Error: {e}")
    return list_info


def send_file_to_vm(id, room, link_source, link_in_vm):
    VM_USER, VM_PASSWORD = s.VM_USER,s.VM_PASSWORD
    PATH_VMX = i.get_pathvm_by_id_and_room(id, room)
    VM_USER = '"' + VM_USER + '"'
    VM_PASSWORD = '"' + VM_PASSWORD + '"'
    print(f"Sending file to {PATH_VMX}")
    command = [
        "sshpass",
        "-p",
        "Phap123",
        "ssh",
        "Administrator@192.168.38.100",
        "cd",
        "\"C:\\Program Files (x86)\\VMware\\VMware Workstation\"",
        "&",
        "vmrun",
        "-T",
        "ws",
        "-gu",
        VM_USER,
        "-gp",
        VM_PASSWORD,
        "copyFileFromHostToGuest",
        PATH_VMX,
        link_source,
        link_in_vm
    ]    
    try:
        subprocess.run(command, check=True)
        return "SC"
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return "ER"
    

