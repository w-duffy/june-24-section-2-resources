import sqlite3

# with sqlite3.connect("dev.db") as conn:
#     db = conn.cursor()
#     db.execute(
#         """
#         SELECT *
#         FROM users;
#         """
#     )
#     results = db.fetchall()
#     print(results)


try:
    conn = sqlite3.connect("dev.db")


    db = conn.cursor()
    db.execute(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
    )
    # db.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("John", 30))
    db.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Bobbo", 30))
    users = db.execute("SELECT * FROM users")
    print(users)
    print(users.fetchall())
    conn.commit()

except:  # noqa: E722
    print("error")

finally:
    conn.close()
