PATH_VMRUN = 'cd "C:\Program Files (x86)\VMware\VMware Workstation & vmrun -T ws" '

SCRIPT_CONNECT_TO_SERVER = 'sshpass -p Phap123 ssh Administrator@192.168.38.100 '

SCRIPT_RESTART = SCRIPT_CONNECT_TO_SERVER + PATH_VMRUN +"reset "

SCRIPT_STOP = SCRIPT_CONNECT_TO_SERVER + PATH_VMRUN +"stop "

SCRIPT_SHOW_IP = SCRIPT_CONNECT_TO_SERVER + PATH_VMRUN +"getGuestIPAddress "

SCRIPT_SHOW_CONFIG = SCRIPT_CONNECT_TO_SERVER + " type "

SCRIPT_UPDATE = SCRIPT_CONNECT_TO_SERVER + PATH_VMRUN + " upgradevm "

PATH_DATA = "/home/server/BEDA/static/data/"

PATH_USER = "/home/skromnyy/Documents/BEDARN-master/static/user_data/user_list.json"

PATH_SOURCE = "/home/skromnyy/Documents/BEDARN-master/static/programs/source_program"

PATH_PROGRAM = "/home/server/BEDA/static/programs/list_programs.json"

VM_USER = "admin"

VM_PASSWORD = "123"


