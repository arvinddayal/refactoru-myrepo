# dictionaries are objects.  keys must have quotes, can't use dot notation

def unique(list):
	dict = {}
	for l in list:
		dict[l]= True

	print (dict.keys())

unique(['who', 'likes', 'mango', 'mango', 'mango'])