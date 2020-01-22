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


export class MailHandler {
    constructor() {
        
    }
    
       /**
         * * On and Off fn
         * ? For email confirmation
         * @param key Boolean true 'on', false 'off'
         */
    public async Confirm_Email_fn(from: string, model: any, sub: string, key: Boolean) {
            switch (key) {
                case true: { 
                    try {
                        // const authId = await generateAuthId(model.id)
                        console.log('Mail sent!');
                        // const send = sendConfirmMail({
                        //     to: model.email,
                        //     from: from,
                        //     subject: 'Confirm mail',
                        //     html: `
                        //     <div style="border: 1px solid black; width: 100%;">
                        //     <p style="margin-left: auto; width: 20%;"> 
                        //         hello ${model.firstName}
                        //     <p>
                        //     </div>
                        //     <h2><a style="color:red;" href="${authId}">link</a></h2>`
                            
                        // });
                        // return send;
                    } catch (error) {
                        console.log(error);
                    }
                    break;
                }

                case false: {
                    console.log('Confirm_Email_fn is off');
                }
            
                default:
                    break;
            }
        }
}