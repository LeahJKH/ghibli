# Class Project
in this class we went thought fetching and displaying information from an api. using https://ghibliapi.vercel.app as an example. we also Learned how to use modules too store info which was later used in app.js. 

<br>

i used this project as a codealong so that they could try their hands at Api and get a guided tutorial throught.

# Changes
i havent changed anything logic based and plan not too as that was the class. now in future renditions ill change up the styling so it looks a bit nicer too the eye as we did minimal css for this project seeing as it was a class in JS.

<br>

```css
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
    background-color: rgb(227, 235, 243);
}
.card-styl {
    background-color: rgb(91, 78, 56);
    width: 580px;
    height: fit-content;
    display: grid;
    grid-template-columns: 180px 1fr;
    border-radius: 20px ;
    overflow: hidden;
    color: rgb(219, 219, 219);
}
.txt-cont {

}
.card-styl > img {
    width: 175px;
    height: fit-content;
}
#ghib-cont {
    margin: auto;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   
}
```
this was how the css was in the begining. 

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ghibli</title>
    <link rel="stylesheet" href="./css/style.css">
    <script type="module" src="./js/app.js"></script>
</head>
<body>
    
    <main id="ghib-cont">

    </main>
</body>
</html>
```
this is how the html looked