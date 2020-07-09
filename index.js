const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let { User, Donation, Registration } = require('./Models');
//const Registration = require('./Models2');

const app = express();
app.use(express.static('public'));


mongoose.connect("mongodb://localhost:27017/Funds").then(() => {
    console.log("database connected");
}).catch((error) => {
    console.log(error);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('./html/home.html', { root: __dirname });
});
app.get('/login', (req, res) => {
    res.sendFile('./html/login.html', { root: __dirname });
});
app.get('/userpage', (req, res) => {
    res.sendFile('./html/userpage.html', { root: __dirname });
})
app.get('/Shopping', (req, res) => {
    res.sendFile('./html/Shopping.html', { root: __dirname });
})
app.get('/Reports', (req, res) => {
    res.sendFile('./html/reports.html', { root: __dirname });
})
app.get('/registration', (req, res) => {
    res.sendFile('./html/registration.html', { root: __dirname });
})
app.get('/AdminL', (req, res) => {
    res.sendFile('./html/AdminL.html', { root: __dirname });
})
app.get('/admin', (req, res) => {
    res.sendFile('./html/admin.html', { root: __dirname });
})
app.get('/userdetails', (req, res) => {
    res.sendFile('./html/userdetails.html', { root: __dirname });
})
app.get('/AdminShopping', (req, res) => {
    res.sendFile('./html/AdminShopping.html', { root: __dirname });
})
app.get('/Adminreports', (req, res) => {
    res.sendFile('./html/Adminreports.html', { root: __dirname });
})
app.get('/donate', (req, res) => {
    res.sendFile('./html/donate.html', { root: __dirname });
});
app.get('/reset', (req, res) => {
    res.sendFile('./html/reset.html', { root: __dirname });
});
app.get('/GentsShopping', (req, res) => {
    res.sendFile('./html/GentsShopping.html', { root: __dirname });
});

//login
app.post('/login', (req, res) => {
    var email = ""
    var password = ""
    if (req.body) {
        if (req.body.email) {
            email = req.body.email
        }
        if (req.body.password) {
            password = req.body.password
        }
    }
    if (email === "" || password === "") {
        res.redirect('/');
    }
    console.log("login")
    console.log(req.body)
    Registration.find({ email, password }).then((data) => {
        if (data.length) {
            res.redirect('/userpage');
        } else {
            res.redirect('/');
        }
    }).catch((error) => {
        console.log(error);
        res.redirect('/');
    });
});

//report
app.get("/donations", (req, res) => {
    const { phone } = req.query;
    console.log("Dontation")
    console.log(phone)
    Donation.find({ phone }).then((data) => {
        console.log(data)
        res.status(200)
        res.json(data)
    }).catch((err) => {
        console.log(err);
    });
});

     // add Donation Details 
    app.post('/addDonations', (req, res) => {
        const { phone, number, address } = req.body;
        Donation.create({ phone, address, numberOfCloths: number }).then((data) => {
            res.redirect('/donate');
        }).catch(error => {
            console.log(error);
        })
    });
    

    //Register Form
    app.post('/addUser', (req, res) => {
        const { name, email, password, phone, address } = req.body;
        console.log("Adduser")
        console.log(req.body)
        console.log(name, email, password, phone, address)
        Registration.create({ name, email, password, address, phone }).then((data) => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
    });

   //Admin_login
 app.post('/Alogin', (req, res) => {
    var email = ""
    var password = ""
    if (req.body) {
        if (req.body.email) {
            email = req.body.email
        }
        if (req.body.password) {
            password = req.body.password
        }
    }
    if (email === "" || password === "") {
        res.redirect('/');
    }
    console.log("Adminlogin")
    console.log(req.body)
    Registration.find({ email, password }).then((data) => {
        if (data.length) {
            res.redirect('/admin');
        } else {
            res.redirect('/');
        }
      }).catch((error) => {
        console.log(error);
        res.redirect('/');
     });
 });
    app.listen(5000, () => {
        console.log('app is running on 5000');
    })