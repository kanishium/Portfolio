const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();

// Middleware
const allowedOrigins = [
    'http://localhost:5173',    // Vite dev server
    'http://localhost:4173',    // Vite preview
    process.env.FRONTEND_URL   // Deployed frontend (e.g. https://your-site.vercel.app)
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (e.g. Postman, server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Change this if you use another provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // 1. Save to Database (Optional backup)
        try {
            const newContact = new Contact({ name, email, message });
            await newContact.save();
        } catch (dbError) {
            console.error('Failed to save to database:', dbError);
        }

        // 2. Send Email Notification to Admin (You)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sends email to yourself
            replyTo: email, // If you click "reply", it replies to the user
            subject: `New Portfolio Contact from ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        };

        // 3. Send Auto-Reply to User
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Send to the user who filled the form
            subject: `Thank you for reaching out, ${name}!`,
            text: `Hi ${name},\n\nThank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nKanishk Kumar`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
                    <h2>Hi ${name},</h2>
                    <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
                    <br/>
                    <p><strong>Your message:</strong></p>
                    <blockquote style="border-left: 4px solid #ddd; padding-left: 15px; color: #555; font-style: italic;">
                        ${message}
                    </blockquote>
                    <br/>
                    <p>Best regards,<br/><strong>Kanishk Kumar</strong></p>
                </div>
            `
        };

        // Send both emails simultaneously
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving/sending contact message:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
