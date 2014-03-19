name = "Arvind"
print(len(name))

colors = ["red", "green", "blue", "orange"]
print(len(colors))

print (colors[-1])

print(name[2:4])

print(colors[1:3])

#string interpolation (supplant)
print("hello %s") %("tim")

#loop
print(range(5,50))

for i in colors:
	print(i)

#slicing
colors[1:3] = ['a','b','c']
print(colors)

#list comprehension(map)
students = ["matt", "joe","tim", "arvind"]
print([s[0] for s in students])
#returned item is first, s is arbitrary, students is the object being looped through
print([len(s) for s in students])
print([c for c in colors if not c == "orange"])

