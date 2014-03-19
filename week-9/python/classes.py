# class Animal(object):
# 	# double underscore!!!
# 	def __init__(self,name):
# 		self.name = name
# 		self.weight = 5
# 		print (name + " Created.")
# 	def grow(self):
# 		self.weight +=1

# lion = Animal('Lion')
# lion.grow()
# print(lion.weight)

# class Fish(Animal):
# 	def __init__(self,name):
# 		super(Fish,self).__init__(name)

# 	def eatPlankton(self):
# 		print("I love plankton")
# 		super(Fish,self).grow()

# flipper = Fish("Flipper")

class GeographicIncident(object):
	def __init__(self,name,year):
		self.name = name
		self.year = year

class Earthquake(GeographicIncident):
	def __init__(self, name, year, mag):
		# Invoking superclass constuctor
		super(Earthquake, self).__init__(name, year)
		self.magnitude = mag
		
earthquake = Earthquake("Great Kanto Earthquake", 1923, 9)

print(earthquake.name)
print(earthquake.year)
print(earthquake.magnitude)
