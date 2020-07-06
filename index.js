const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {User, Donation} = require('./Models');

const app = express();
app.use(express.static('public'));


mongoose.connect("mongodb://localhost:27017/Funds").then(() => {
    console.log("database connected");
}).catch((error) => {
    console.log(error);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('./html/home.html', {root: __dirname });
});
app.get('/login', (req, res) => {
    res.sendFile('./html/login.html', {root: __dirname });
});
app.get('/userpage', (req, res) => {
    res.sendFile('./html/userpage.html', {root: __dirname });
})
app.get('/Shopping', (req, res) => {
    res.sendFile('./html/Shopping.html', {root: __dirname });
    })
app.get('/Reports', (req, res) => {
        res.sendFile('./html/reports.html', {root: __dirname });
        })
app.get('/registration', (req, res) => {
        res.sendFile('./html/registration.html', {root: __dirname });
            })
app.get('/AdminL', (req, res) => {
                res.sendFile('./html/AdminL.html', {root: __dirname });
})
app.get('/admin', (req, res) => {
    res.sendFile('./html/admin.html', {root: __dirname });
})
app.get('/userdetails', (req, res) => {
    res.sendFile('./html/userdetails.html', {root: __dirname });
})
app.get('/AdminShopping', (req, res) => {
    res.sendFile('./html/AdminShopping.html', {root: __dirname });
})
app.get('/Adminreports', (req, res) => {
    res.sendFile('./html/Adminreports.html', {root: __dirname });
})
app.get('/Userreport', (req, res) => {
    res.sendFile('./html/reportmain.html', {root: __dirname });
})
app.get('/Rdetails', (req, res) => {
    res.sendFile('./html/Rdetails.html', {root: __dirname });
})

app.get('/ard', (req, res) => {
    res.sendFile('./html/ard.html', {root: __dirname });
})

app.post('/login', (req, res) => {
            const {email, password} = req.body;
    User.find({email, password}).then((data) => {
        if(data.length) {
            res.redirect('/userpage');
        } else {
            res.redirect('/');
        }
    }).catch((error) => {
        console.log(error);
        res.redirect('/');
    });
});

app.get('/donate', (req, res) => {
    res.sendFile('./html/donate.html', {root: __dirname });
});

app.post('/addDonations', (req, res) => {
    const {phone, number, address} = req.body;
    Donation.create({phone, address, numberOfCloths: number}).then((data) => {
        res.redirect('/donate');
    }).catch(error => {
        console.log(error);
    })
});


app.post('/AdminL', (req, res) => {
    const {email, password} = req.body;
User.find({email, password}).then((data) => {
if(data.length) {
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