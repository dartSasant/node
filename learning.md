# User Register

## From User Prespective
1. Form FillUp
2. Click reister button

## Form Developer Prespective
1. Destructuring From data (eg:- Full Name, email, password)
2. Validatation of form data (eg:- All feilds are required)
3. Check email form database (eg:- Email must be unique)
4. Hash the password
5. Send token and Store into frontend (either localhost or in cookies)
6. Store to database 
7. Send message to user (eg:- http status code )
    - 200 (Success Reponse)
    - 201 (New data created)
    - 400 (Bad Request)
    - 404 (Not found)
    - 500 (Internal Server Error)
    


# User Login

## Form User Prespective
1. Form FillUp
2. Click login button

### From Developer Prespective
1. Destructing form data
2. Check if email already exists
3. Match the hashed password
4. If the hash match send token to frontend
5. Send message to user (eg: http request)
    - 200 (Success Response)
    - 404 (Not found)
    - 500 (Internal Server Error)


     