post = {
    "id": 1,
    "text": "Just deployed my first Python app! #coding #python #developer",
    "likes": 42,
    "tags": ["coding", "python", "developer"],
    "timestamp": "2024-03-15 14:30:00",
    "comments": [
        {"user": "zav", "text": "Great job!"},
        {"user": "will", "text": "Python is sweet"},
        {"user": "zav", "text": "What framework did you use?"},
        {"user": "brandon", "text": "Follow the Zen of Python"},
        {"user": "alexi", "text": "Very pythonic!"},
    ],
    "some_method": lambda x: x + 1
}



# Tuples
# my_tupe = ("hello", "world", 1, 2)

# new_val, is_world, num1, num2 = my_tupe
# # print(f"new val! {new_val}")

# def my_funky_func():
#     food = "tacos"
#     day = "today"
#     some_num = 123
#     return (food, day, some_num)

# print(my_funky_func())
# not_called_food, day, something  = my_funky_func()
# print(f"what does this print: {not_called_food}")


# dupe_list = [1,1,3,3,5,6]
# print(list(set(dupe_list)))


# # my_tupe[0] = "goodbye" # Error
# for t in my_tupe:
#     print(t)




# Sets
# new_set = {"hi"}

# all_tags = {"python", "javascript", "coding", "developer", "python"}  # notice duplicate "python"
# print(all_tags)
# all_tags.



# Built in

# List Comp

# Dict Comp

# num_lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# """
# Use a set to remove duplicate elements from a list
# """
# # print(list(set(num_lst)))


# tup = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
# # """
# # Convert a tuple to a list, and back to a tup
# # """
# lst = list(tup)
# print(lst)
# lst[0] = 100
# print(lst)
# back_to_tup = tuple(lst)
# print(back_to_tup)
# back_to_tup[0] = 1




lst = ["hello", "world", "goodbye", "moon"]
# """
# Use enumerate to print the elements and indices of a list
# """
# print(list(enumerate(lst)))
# [(0, 'hello'), (1, 'world'), (2, 'goodbye'), (3, 'moon')]

# for i, el in list(enumerate(lst)):
#     print(i, el)

# # """
# # Write a function that takes in a list of lists where elements are numbers and returns
# # a new list of lists where every element in the new list is 10
# # greater than the corresponding element in the original list.
# # """
# two_dimensional_list = [[1, 2], [4, 5, 6], [7, 8, 9, 10]]

# # easy_list = [4, 5, 6]
# add_ten_to_list = [[num + 10
#                   for num in easy_list]
#                    for easy_list in two_dimensional_list]

# print(add_ten_to_list)
# print(add_ten_to_list)
# def get_new_list(outer_list):
#     return_lst = []
#     for el in outer_list:
#         some_nested_list = []
#         for num in el:
#             some_nested_list.append(num + 10)
#         return_lst.append(some_nested_list)
#     return return_lst



# print(get_new_list(two_dimensional_list))  # [[11, 12], [14, 15, 16], [17, 18, 19, 20]]


# """
# Use a list comprehension
# """


two_dimensional_list = [[1, 2], [4, 5, 6], [7, 8, 9, 10]]

def get_new_list(lst):
    pass


# print(get_new_list(two_dimensional_list))  # [[11, 12], [14, 15, 16], [17, 18, 19, 20]]


# """
# Use map with a list comprehension
# """
# # # Try completing the pieces individually first
# lst = [4, 5, 6]
# new_list = list(map(lambda el: el + 10, lst))
# print(new_list)


# # print("Just testing the map", new_list) # prints [10, 12]

# easy_list = [4, 5, 6]
# add_ten_to_list = [[num + 10
#                   for num in easy_list]
#                    for easy_list in two_dimensional_list]

two_dimensional_list = [[1, 2], [4, 5, 6], [7, 8, 9, 10]]

def get_new_list(two_d_list):
    return [list(map(lambda el: el + 10, lst)) for lst in two_d_list]

# print(get_new_list(two_dimensional_list))  # [[11, 12], [14, 15, 16], [17, 18, 19, 20]]


# """
# # Write a function that takes in a dictionary and returns
# # a new dict only if the person lives in EST
# """

# print(dict1.items())

# for key, val in dict1.items():
#     print(key, val)

# def filter_dict(a_dict):
#     new_dict = {}

#     for key, val in a_dict.items():
#         # if timezone is est
#         if(val == "EST"):
#             new_dict[key] = val
#         # print(key, val)
#     return new_dict


# [new_el
# for el in iterable
# if condition]
# new_dict_comp = {key: val
#                  for key, val in dict1.items()
#                  if val == "EST"}

# print(f"new_dict_comp: {new_dict_comp}")

# print(filter_dict(dict1))

def dict_comp_func(some_dict):
    return {key: val
                 for key, val in some_dict.items()
                 if val == "EST"}

dict1 = {"will": "CST", "brandon": "EST", "zaviar": "PST", "alex": "EST"}

print(dict_comp_func(dict1))



# """
#  Use a dictionary comprehension to create a new dictionary where returns
# we only have people that live in EST
# """

# dict1 = {"will": "CST", "brandon": "EST", "zaviar": "PST", "alex": "EST"}

# def filter_dict(a_dict: dict):
#     pass

# print(filter_dict(dict1))
