spot = {
    "id": 1,
    (12135, "cool"): "123 Disney ln",
    "price": 350,
    "reviews": [
        {"user": "demo", "text": "Great job!"},
        {"user": "will", "text": "Python is awesome"},
        {"user": "zav", "text": "What framework did you use?"},
    ],
}


# filtered_reviews = []
# for review in spot['reviews']:
#     if review['user'] != 'will' and review['user'] != 'zav':
#         print("user names !", review['user'])
#     filtered_reviews.append(review['user'])


filtered_reviews = [
    review
    for review in spot["reviews"]
    if review["user"] != "will" and review["user"] != "zav"
]


print("Filtered rev", filtered_reviews)


# # new_num_list = [num + 1
#                for num in num_list]

# # for num in num_list:
#     # new_num_list.append(num + 1)

# print("\nNEW LIST\n ", new_num_list)
