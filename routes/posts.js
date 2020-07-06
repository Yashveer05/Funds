const express = require('express');


const app = express();


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