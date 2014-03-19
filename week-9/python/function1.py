# def foo(x):
# 	print('foo called with parameter:%s' %x)
# def sayHi(name):
# 	print('Hello %s' % name)
# foo('sink')
# sayHi('arvind')

# #built in arguments
# def myrange(start=10, end=100):
# 	return range(start, end)

# print(myrange(end=25))

# #multiple arguments
# def multiply(n, *numbers):
# 	return [x*n for x in numbers]

# print(multiply(5, 1,2,3))

def namesplit(ind, names):
	return [names[:ind+1], names[ind+1:]]

print(namesplit(2, ['arvind', 'tim', 'joe', 'chris', 'mike']))