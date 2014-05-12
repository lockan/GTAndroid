import urllib.request, re

f = urllib.request.urlopen('http://www.bcit.ca/study/outlines/busa2720')

f = f.read()

print(str(f))
