## Client Side Live Link: 
### https://ema-john-client.onrender.com/

#### This repository is hosted in Render App (render.com)

#### N.B: Though it is a free hosting site, it will take some time to load the server, When it goes live. So please give time to load the server first so that on the client side you can see the products and all functionality will work properly. Please Keep Patience.


## Description

### Try to clone the "product add to cart" part of Amazon
    1.      Use Firebase for authentication with
            a.  Google
            b.  Email-Passeord
            c.  Facebook

    2.      Use React Router for Dynamic Routing
    3.      Use browsers localStorage for storing data

### This project contains some pages below:
    1.      Home Page (index.html)
    2.      Shop Page
    3.      Order Review
    4.      Manage Inventory Page
    5.      Error Page
    6.      Login Page
    7.      Shipment Page

### In home page
    ----> Some information about Amazon Company.

### In Shop page
    ----> At first we used some fake data for product viewing. But now we canupload our own data for product viewing.
    ----> Fake data consisi of
        1.  Product image
        2.  Product full name with description
        3.  Brand name
        4.  Stock number

    ----> Order Summary available in the right side of the page
    ----> We used browsers localStorage for Database (storign data locally at clients browser).
    ----> When clicked add to cart, the calculation occured dynamically
    ----> When clicked review order, it navigate to Order Review page

    ----> When clicked on product title, iwe can see all the description of product.

### In Order Review page
    ----> Add to cart items shows here.
    ----> We can remove items from localStorage by clicking the remove button.
    ----> When remove button clicked, order summary calculation is calculated dynamicallty.
    ----> And clicking on place order you redirected to Login page.
    ----> After Sign Up/ Login to Google/Facebook you are redirected to Shipment Page. Here you need to fillup the shipment form to receive the prouduct.
    ----> After successfull submission the form you, are redirectd to Home page.

### In Manage Inventory page
    ----> Click on the Manage Inventory, you are redirected to Login page. After successfull login, you will redrect to Manage Inventory page.
    ----> You can add product and product details from here by submitting the form.
    ----> The form includes Name, Price, Quantity and Image.

### Packages used
    ---->   We used some packages
        1.  React 18.2.0
        2.  React Bootstrap 2.9.0
        3.  React Router 6.16.0
        4.  Fontawesome 6.4.2
        5.  React Fontawesome 0.2.0
        6.  Firebase 10.5.0
        7.  DotEnv 16.3.1
        8.  React Hook Form 7.47.0