import os
from os.path import isfile, join, isdir, exists
import json

# get list of files
ages = [folder for folder in os.listdir("../faces/face_age") if isdir(join("../faces/face_age", folder))]

# map to write to json
map = {}

for age in ages:
    # get path to new
    path = "../faces/face_age/" + age

    # get list of images in image directory
    images = [f for f in os.listdir(path) if isfile(join(path, f))]
    
    # add image list to map and fuck off lol
    map[age] = images

with open("../map.json", "w+") as f:
    json.dump(map, f, indent=4)
    
