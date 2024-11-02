# PostgreSQL Multiple Databases with a Single Instance

https://docs.render.com/postgresql-creating-connecting#adding-multiple-databases-to-a-single-instance


## Getting Started

### Connect to your PostgreSQL instance with psql.

Once connected run the following command to create a new database.

```sql
CREATE DATABASE <YOUR_DATABASE_NAME> WITH OWNER <USERNAME_FROM_RENDER>;
```

It will looks something like this: `CREATE DATABASE my_second_db WITH OWNER will;`

---

### Deploy a new web service using the newly created database.

```env
DATABASE_URL=postgresql://<YOUR_USERNAME>:<YOUR_PASSWORD>@<render_supplied_subdomain>.<the_region_you_selected>-postgres.render.com:5432/<YOUR_DATABASE_NAME>
```
It will looks something like this: `postgresql://will:excellentpassword@asdfjkl.oregon-postgres.render.com:5432/my_second_db`

---

### Delete the database.

Connect to your new database using Render's psql command.  Don't forget to change the database name to the new one you're connecting to!

Run the following command to delete the database.

```sql
DROP DATABASE <YOUR_DATABASE_NAME>;
```
It will looks something like this: `DROP DATABASE my_second_db;`

---

### Congratulations!

You can now create multiple databases on Render and connect them to a single PostgreSQL instance.

Further Reading: https://12factor.net/dev-prod-parity
