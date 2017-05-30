import subprocess

def bash_command(command):
    subprocess.call(command, shell=True)

#bash_command(command='cd E_FIELD_FAC_MODEL_FCP \n wine sig_ph_new.exe wine tph.exe \n wine fac_bt_season.exe \n wine ris_surfer_fac.exe')
bash_command(command='cd E_FIELD_FAC_MODEL_FCP \n  wine coef_ut.exe \n wine fac_bt_season.exe \n wine tph.exe \n wine ris_surfer_sigma.exe \n wine ris_surfer_fac.exe')







