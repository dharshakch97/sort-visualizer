:root {
  --primary-color: #1abc9c;
  --secondary-color: #16a085;
}
* {
  /* Below is the standard CSS code one should add to get rid of default margins and padding which most of tge HTML elements have */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  user-select: none;
}
body {
  position: relative;
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
}

/* Title CSS */
.title {
  background-color: var(--primary-color);
  text-align: center;
  font-size: 1.2em;
  padding-block: 0.5em;
  color: #fff;
  cursor: pointer;
}

/* Navbar CSS */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8em;
  font-size: 16px;
  min-height: 70px;
  padding-block: 0.6em;
  background-color: var(--secondary-color);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.navbar a {
  all: unset;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 6px;
  transition: 0.3s;
  background-color: #1abc9c;
}
.navbar a:hover {
  background-color: transparent;
}
.navbar #menu {
  width: fit-content;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 6px 8px;
  background-color: #1abc9c;
  color: white;
}
.navbar > .icon {
  display: none;
}
#menu,
#random,
#start {
  cursor: pointer;
}

/* Center css */
.center {
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; /* Added shadow to make page border free */
  height: 420px;
  width: 410px;
  max-height: 731px;
}
.array {
  display: flex;
  align-items: flex-start;
  min-height: 100%;
  height: 100%;
  padding: 1rem;
  flex-direction: row;
}
.cell {
  display: flex;
  align-items: flex-start;
  flex: 0.5;
  width: 0.000001%;
  margin: 1px;
  background-color: #d6d6d6;
  resize: horizontal;
  position: relative;
  transition: all 0.4s ease-in;
}
.cell.done {
  background-color: #9cec5b;
  border-color: #9cec5b;
  color: white;
  transition: all 0.4s ease-out;
}
.cell.visited {
  border-color: #6184d8;
  background-color: #6184d8;
  color: white;
  transition: 0.5s;
}
.cell.current {
  border-color: #50c5b7;
  background-color: #50c5b7;
  color: white;
  transition: all 0.4s ease-out;
}
.cell.min {
  background-color: #ff1493;
  border-color: #ff1493;
  color: white;
  transition: all 0.4s ease-out;
}

/* Footer CSS */
.fa.fa-heart {
  color: #eb2c13;
}
footer {
  text-align: center;
  font-size: 18px;
  color: #2c3e50;
  padding: 1.6em;
}
.footer > p:nth-child(1) {
  margin-bottom: 0.6em;
}
.link {
  text-decoration: none;
  font-weight: bold;
  color: #ff5252;
  font-size: 20px;
}

@media screen and (max-width: 600px) {
  .navbar {
    gap: 0.4em;
  }
  .title {
    font-size: 17px;
  }
  .navbar *,
  .navbar a {
    font-size: 14px;
  }
  .footer {
    font-size: 18px;
  }
  a#random {
    order: 4;
  }
  a.start {
    order: 5;
  }
}
@media screen and (max-width: 550px) {
  .center {
    width: 95%;
  }
}
