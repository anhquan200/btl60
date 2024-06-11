*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

img {
    max-width: 100%;
    width: 100%;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
}

button {
    text-align: center;
    color: #e5eee9;
    background-color: white;
    padding: .8rem 2.5rem;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: var(--smooth);
}

button:hover {
    background-color: var(--white);
    transition: var(--smooth);
}


:root {
    --yellow: #e3f74c;
    --white:#adc0b6;
    --smooth: all .3s ease-in;
}


/* === header === */
header {
    position: absolute;
    width: 100%;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}


/* menu  */
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  
  .navbar {
    overflow: hidden;
    background-color: #333; 
  }
  
  .navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .subnav {
    float: left;
    overflow: hidden;
  }
  
  .subnav .subnavbtn {
    font-size: 16px;  
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  .navbar a:hover, .subnav:hover .subnavbtn {
    background-color: gray;
  }
  
  .subnav-content {
    display: none;
    position: absolute;
    left: 0;
    background-color: gray;
    width: 100%;
    height: 160px;
    z-index: 1;
  }
  
  .subnav-content a {
    float: left;
    color: yellow;
    text-decoration: none;
  }
  
  .subnav-content a:hover {
    background-color: #eee;
    color: black;
  }
  
  .subnav:hover .subnav-content {
    display: block;
  }

/* menu button */
.navbar__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: var(--smooth);
    z-index: 6;
}

.navbar__icon {
    width: 45px;
    height: 6px;
    background-color: black;
    border-radius: 5px;
    transition: var(--smooth);
    position: relative;
}

.navbar__icon:before,
.navbar__icon:after {
    content: '';
    position: absolute;
    width: 45px;
    height: 6px;
    background-color: black;
    border-radius: 5px;
    transition: var(--smooth);
}

.navbar__icon:before {
    transform: translateY(-12px);
}

.navbar__icon:after {
    transform: translateY(12px);
}

/* button animation */
.open .navbar__icon {
    transform: translateX(-50px);
    background: transparent;
}

.open .navbar__icon:after {
    transform: rotate(-45deg) translate(35px, 35px);
}

.open .navbar__icon:before {
    transform: rotate(45deg) translate(35px, -35px);
}

@media (min-width: 992px) {
    .navbar__links {
        position: initial;
        transform: translateX(0);
        opacity: 1;
        background-color: transparent;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .navbar__link a {
        color: black;
    }
    .navbar__icons {
        display: none;
    }
    .navbar__btn {
        background-color: black;
    }
}

/* === Banner === */
#banner {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
}

.banner__img {
    position: absolute;
    top: 1;
    right: 0;
    z-index: -1;
    padding-top: 10em;
    padding-right: 3em;
}

.banner__heading {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    color: black;
}

.banner__heading h1 {
    font-size: 2.25rem;
    padding-top: 4em;
    margin-bottom: 0.8em;
}

.banner__heading p {
    font-weight: 300;
    line-height: 2em;
    margin-bottom: 1.5em;
}

@media (min-width: 62em) {
    .banner__heading {
        text-align: initial;
        margin: 0;
        padding-top: 0;
    }

    .banner__img {
        width: 40%;
    }
}

/* === Things === */
#things {
    position: relative;
    overflow-x: hidden;
    margin-top: 10em;
}

#things h2 {
    text-align: center;
    color: red;
    margin-bottom: 1em;
}

.things__item {
    margin: 3em 0;
}

.things__item img {
    padding-bottom: 4em;
}

.things__item--heading {
    text-align: center;
    color: black;
}

.things__item--heading p {
    font-weight: 300;
    line-height: 2em;
    max-width: 300px;
    margin: 0 auto;
    padding-top: 1em;
}

@media(min-width: 62em) {
    .things__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
    }
    .things__item img {
        width: 40%;
        padding-bottom: 0;
    }
    .things__item--heading {
        width: 45%;
        text-align: initial;
    }
    .things__item--heading p {
        max-width: 500px;
        margin: 0;
    }
    .things__item:nth-child(odd) img {
        order: 2;
        width: 40%;
        padding-bottom: 0;
    }
    .things__item--heading:nth-child(odd) {
        order: 1;
        width: 45%;
        text-align: initial;
    }
}

/* === Works === */
#works {
    padding-top: 10em;
    position: relative;
    overflow-x: hidden;
}

#works h2 {
    text-align: center;
    color: black;
}

.work__img--project {
    margin: 3em 3em;
}

.works__btn {
    text-align: center;
    margin-left: 1.5em;
    padding-bottom: 3em;
}

.works__btn button {
    font-size: 1.5rem;
    background-color: black;
    color: yellow;
    justify-content: space-evenly;
}

.works__btn button:hover {
   background: gray;
}


/* === Friend === */
#friend {
    padding-top: 10em;
    position: relative;
    overflow-x: hidden;
}

#friend h2 {
    text-align: center;
    color: black;
}

.friend__img--list {
    margin: 2em 0;
}

.friend__img--list:nth-child(odd) {
    padding-top: 5em;
    padding-bottom: 5em;
}


@media (min-width: 62em) {
    #friend h2 {
        margin-bottom: 3em;
    }
    .friend__img {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .friend__img--list {
        margin: 0 5em;
        width: 35%;
    }
}

/* === Contact1 === */
form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
    color: #333;
    margin-bottom: 20px;
}
label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}
input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
input[type="submit"] {
    background-color: #5cb85c;
    color: white;
    border: none;
    cursor: pointer;
}
input[type="submit"]:hover {
    background-color: #4cae4c;
}



/* === Footer === */
#footer {
    overflow: hidden;
    position: relative;
    height: 30em;
    display: flex;
    align-items: center;
    background-color: rgb(210, 226, 177);
}

.footer__heading {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    color: black;
}

.footer__contact {
    margin-top: 2em;
    display: flex;
    justify-content: space-evenly;
    color: black;
}

.footer__contact a {
    text-decoration: none;
    color: black;
}

@media (min-width: 62em) {
    .footer__heading {
        text-align: center;
        margin: 0;
    }
    .footer__contact {
        display: flex;
        justify-content: space-between;
    }
}
