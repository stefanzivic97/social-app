import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
})

export const sendConfirmMail = (obj: any) => {
    transport.sendMail({
        to: obj.to ? obj.to : 'Prazan',
        from: obj.from ? obj.from : 'Prazan',
        subject: obj.subject ? obj.subject : 'Prazan',
        html: obj.html ? obj.html : `<h1> Prazan </h1>`
    })
}

