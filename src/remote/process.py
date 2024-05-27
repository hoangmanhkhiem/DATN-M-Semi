import src.router.user as u
import src.router.scripts as s
import src.router.ip as ip
import subprocess
import json



def exce_list_process_in_1vm(path_vm):
    try:
        list_process = []
        # Get username and password
        VM_USERNAME = s.VM_USER
        VM_PASSWORD = s.VM_PASSWORD
        path_vm = '"' + path_vm + '"'
        command = s.SCRIPT_CONNECT_TO_SERVER + " " + s.PATH_VMRUN + " -gu " + VM_USERNAME + " -gp " + VM_PASSWORD + " listProcessesInGuest " + path_vm + " -interactive"
        process = subprocess.run(command, shell=True, stdout=subprocess.PIPE)
        listt = process.stdout.splitlines()
        print(listt)
        for i in listt:
            tmp_pair = []
            i = i.split()
            if(len(i)==3):
               i[0] = str(i[0])
               key = i[0].strip("'")
               key = i[0].strip("b")
               key = i[0][6:-2]
               i[2] = str(i[2])
               value = i[2].strip("'")
               value = i[2].strip("b")
               value = value[5:-1]
               tmp_pair.append(key)
               tmp_pair.append(value)
            else:
                continue
            list_process.append(tmp_pair)
        print("List process in VM: ")
        return list_process

    except subprocess.CalledProcessError as e:
        print("Error running command: " + e.cmd)
        print("Return code: " + str(e.returncode))


def find_PID_by_name(name, PATH_VMX):
    VM_USER = '"' + s.VM_USER + '"'
    VM_PASSWORD = '"' + s.VM_PASSWORD + '"'
    PATH_VMX = '"' + PATH_VMX + '"'
    command = s.SCRIPT_CONNECT_TO_SERVER + ' ' + s.PATH_VMRUN + ' -gu ' + VM_USER + ' -gp ' + VM_PASSWORD + ' listProcessesInGuest ' + PATH_VMX + ' -interactive'
    try:
        process = subprocess.run(command, shell=True, stdout=subprocess.PIPE)
        for line in process.stdout.splitlines():
            if name in str(line):
                n = ""
                for i in str(line.split()[0]):
                    if i.isdigit():
                        n += str(i)
                return n
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(f"Failed to find process with name {name}.")
        return "None"


def kill_process_by_name(name, PATH_VMX):
    while True:
        process_id = find_PID_by_name(name,PATH_VMX)
        if "None" in str(process_id):
            return "SC"
        VM_USER = '"' + s.VM_USER + '"'
        VM_PASSWORD = '"' + s.VM_PASSWORD + '"'
        PATH_VMX = '"' + PATH_VMX + '"'
        command = s.SCRIPT_CONNECT_TO_SERVER + ' ' + s.PATH_VMRUN + '-gu ' + VM_USER + ' -gp ' + VM_PASSWORD + ' killProcessInGuest ' + PATH_VMX + ' ' + str(
            process_id)
        try:
            subprocess.run(command, text=True, shell=True, stdout=subprocess.PIPE)
            print(f"Process with ID {process_id} killed.")
        except subprocess.CalledProcessError as e:
            print(f"Error: {e}")
            print(f"Failed to kill process with ID {process_id}.")

