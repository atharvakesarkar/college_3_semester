# object orinetned programming 
# class person:
#     name = "siddhi"
#     occupation = "Artist"


# a = person()
# print(a.name)
# print(a.occupation)

# a.name = "sneha"
# print(a.name)


# class gfg:
#     def __init__(Self, name , age):
#         Self.name = name
#         Self.age = age

#     def display(Self):
#         print("hello my name is " + Self.name + "and my age is " + Self.age)

# abj = gfg("atharva", "18")
# abj.display()



# def call_by_value(x):
#     x = x *2
#     print("value inside fucntion", x)
#     return

# def call_by_reference(list):
#     list.append("D")
#     print("list inside function", list)
#     return


# my_list = ["E"]
# num = 6
# print("number before function call", num)
# call_by_value(num)
# print("number after function call", num)
# print("list before:", my_list)
# call_by_reference(my_list)
# print("list after:",my_list)


# name = input("enter your age: ")
# print(type(name))

# write a python program to if a number is postive negative or zerp
# write a program to find the area of circle , after giving radius
# write a program to find the swap the number
# write a program to determine if a year is leap year



# 1
# num = float(input("Enter a number: "))

# Check if the number is positive, negative, or zero
# if num > 0:
#     print("The number is Positive.")
# elif num < 0:
#     print("The number is Negative.")
# else:
#     print("The number is Zero.")




# # 2
# radius = float(input("Enter radius of the circle: "))
# area = 3.14159 * radius * radius

# print("Area of the circle is:", area)


# # # 3
# a = int(input("Enter first number (a): "))
# b = int(input("Enter second number (b): "))

# a, b = b, a

# print("After swapping:")
# print("a =", a)
# print("b =", b)


# # 4
# year = int(input("Enter a year: "))

# # Leap year logic
# if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
#     print(year, "is a Leap Year.")
# else:
#     print(year, "is Not a Leap Year.")


# 5
# dividend = int(input("Enter the dividend (number to be divided): "))
# divisor = int(input("Enter the divisor (number to divide with): "))

# quotient = dividend // divisor
# remainder = dividend % divisor


# print("Quotient is:", quotient)
# print("Remainder is:", remainder)




# all the errrors
# # type error
# a = 10
# b = "two"
# print(a + b)


# name error
# name = atharva
# print(name)

# index error:
# mylist = [1,2,3,4]
# print(mylist[5])



# syntax error
# def greet(name):
#     print("hello,'name)
# greet("Atharva")


# key error:
# mydict = {"name": "Atharva",
#           "age": 18,
#           "city": "Dombivli"}
# print(mydict["lastname"])


# value error:
# num = int("abc")


# attribute error
# text = "hello"
# text.append(" world") 


# division error
# x = 10
# y = 0
# result = x / y 


# import error
# import not_a_real_module  

