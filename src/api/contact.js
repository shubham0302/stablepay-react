// const sgMail = require('@sendgrid/mail')

import sgMail from '@sendgrid/mail'

const key = "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"

// const To_Email = ""

// const

sgMail.setApiKey(key)

const sendMail = async (req) => {
    try {

        const body = req.body;
        console.log(body, "body");


        const data = {
            to: 'sp03022003@gmail.com',
            from: 'Hello@stablepay.global',
            subject: 'Contact Form',
            html: `<p>Name</p>`
        }
        const dashboard = {
            to: 'fincrypt1@agmail.com¸',
            from: 'Hello@stablepay.global',
            subject: 'User Joined',
            // text: email
        }

        await sgMail.send(data);
        await sgMail.send(dashboard);
        return true
        // res.status(200).json({ status: 'hello' })
    } catch (error) {
        console.log(error);
        // res.status(500).json({ status: error })
        return false

    }
}

export default sendMail;