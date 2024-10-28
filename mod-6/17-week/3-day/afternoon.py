## Args / Kwargs
# def some_func(food_1, *args):
# def some_func(*args, food):

def some_func(avacado, food,  hello, *args, **kwargs):
    print(f"POSITIONAL: {avacado} {food}\n\n{hello} \n\n ARGS: {args}\n KWARGS: {kwargs}")


some_func("nanner",  "world",   [1,2,3], {"hello": "world"}, avacado="hi",  food_1="tacos", food_2="chicken", food_3="soup")

























def fake_patch_req(user_id, **kwargs):

    print(f"Updating resource with ID {user_id}")

    print(f"UPDATING RECORD: \n\n")  # noqa: F541
    for key, value in kwargs.items():
        print(f"Updating {key} to {value}")

    return {
        "status": "success",
        "message": f"Resource {user_id} updated successfully",
        "updated_fields": kwargs
    }

response = fake_patch_req(
    user_id=123,
    # name="New Resource Name",
    # spot_name="Disney world",
    description="Updated description",
    is_active=True
)

# print("\nResponse:", response)
