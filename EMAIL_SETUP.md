# 📧 Email Setup Guide for Contact Form

Your contact form is now configured to send emails to `aayushmanthakulla@gmail.com` using EmailJS. Follow these steps to complete the setup:

## 🚀 Setup Steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Custom SMTP"
4. Connect your Gmail account (aayushmanthakulla@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Message from Portfolio Website
**Content:**
```
Hello Aayushman,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Your Website
Replace the placeholders in `index.html`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your service ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init("user_abc123def456");

emailjs.send('service_xyz789', 'template_abc123', templateParams)
```

## ✅ What Happens When Someone Submits the Form:

1. **Validation**: Checks if all fields are filled and email is valid
2. **Loading State**: Button shows "Sending..." and is disabled
3. **Email Sent**: Message is sent to aayushmanthakulla@gmail.com
4. **Success**: User sees "Thank you for your message!" and form resets
5. **Error Handling**: If email fails, user gets error message with your direct email

## 🔧 Alternative: Formspree (Easier Setup)

If EmailJS seems complex, you can use Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get your form endpoint
3. Replace the form action with:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form" id="contactForm">
```

## 🎯 Benefits:

- ✅ **Real emails** sent to your Gmail
- ✅ **Professional** contact form
- ✅ **Spam protection** included
- ✅ **Mobile responsive**
- ✅ **Error handling**
- ✅ **Loading states**

## 📱 Testing:

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (aayushmanthakulla@gmail.com)
4. You should receive the message!

## 🆘 Need Help?

If you need assistance setting up EmailJS:
1. Check their [documentation](https://www.emailjs.com/docs/)
2. Contact their support
3. Or use the simpler Formspree alternative

Your contact form will be fully functional once you complete these steps! 🚀 