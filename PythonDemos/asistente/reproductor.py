import os
import subprocess
import random
from os.path import join, realpath

_random = random
_subprocess = subprocess
detect_in_row = 0

folder = realpath(join(realpath(__file__),'..', 'fun', 'arnold_audio'))
arnold_mp3 = [
    os.path.join(folder, x)
    for x in os.listdir(folder)
    if ".wav" in x
]

filename = _random.choice(arnold_mp3)
try:
    print("playing", filename)
    _subprocess.check_output(['play', '-v', '.1', filename])
except Exception as e:
    print(str(e))
        