const nodemailer = require('nodemailer');

module.exports = {
    index: (req,res) => {
        res.render('index');
    },
    contact: (req,res) => {
        console.log('POST DATA', req.body);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'myportfolio.kshore@gmail.com', // *Admin Email
                pass: '' // *Admin Pass
            }
        });
        
        var mailOptions = {
            from: 'myportfolio.kshore@gmail.com', // *Admin Email
            to: 'kshore2k18@gmail.com',
            subject: 'Portfolio Message',
            html: 'From: '+req.body.name+
                    ' Email: '+req.body.email+
                        ' Phone: '+req.body.phone+
                            ' Message: '+req.body.content
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });;
        res.redirect('/');
    }
}