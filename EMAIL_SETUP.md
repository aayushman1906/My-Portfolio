# EmailJS Setup Guide for Contact Form

## Overview
This guide will help you set up EmailJS to send contact form submissions directly to your email address (aayushmanthakulla@gmail.com) without requiring a backend server.

## Step 1: Create EmailJS Account

1. **Go to EmailJS**: Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Sign Up**: Create a free account
3. **Verify Email**: Check your email and verify your account

## Step 2: Add Email Service

1. **Login to EmailJS Dashboard**
2. **Go to Email Services** (left sidebar)
3. **Click "Add New Service"**
4. **Choose Gmail** (since you're using a Gmail address)
5. **Connect your Gmail account** (aayushmanthakulla@gmail.com)
6. **Note down the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. **Go to Email Templates** (left sidebar)
2. **Click "Create New Template"**
3. **Use this template content**:

```html
Subject: New Contact Form Message from {{from_name}}

Hello Aayushman,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.

Best regards,
Your Portfolio Website
```

4. **Save the template**
5. **Note down the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. **Go to Account** (left sidebar)
2. **Click on "API Keys"**
3. **Copy your Public Key**

## Step 5: Update Your Website

Replace the placeholder values in your `index.html` file with your actual EmailJS credentials:

```javascript
// Replace these values in your index.html file:

// 1. Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// 2. Replace YOUR_SERVICE_ID with your Gmail service ID
emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', templateParams)
```

## Step 6: Test the Contact Form

1. **Open your website**
2. **Go to the contact section**
3. **Fill out the form with test data**
4. **Submit the form**
5. **Check your email** (aayushmanthakulla@gmail.com) for the test message

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Make sure you've created the email service correctly
   - Verify the Service ID is correct

2. **"Template not found" error**
   - Make sure you've created the email template
   - Verify the Template ID is correct

3. **"Public key invalid" error**
   - Make sure you're using the correct public key
   - Check that your EmailJS account is active

4. **Emails not being received**
   - Check your spam folder
   - Verify your Gmail account is properly connected
   - Make sure you're using the correct email address

## Security Notes

- **Public Key**: This is safe to include in your website code
- **Service ID & Template ID**: These are also safe to include in your code
- **Private Key**: Never include this in your website code

## Free Plan Limitations

EmailJS free plan includes:
- 200 emails per month
- Basic templates
- Gmail, Outlook, and other email services

## Upgrade Options

If you need more emails per month:
- **Personal Plan**: $15/month for 1,000 emails
- **Business Plan**: $35/month for 5,000 emails

## Alternative Setup (Using Gmail SMTP)

If you prefer to use Gmail SMTP directly:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**
3. **Use SMTP settings**:
   - Host: smtp.gmail.com
   - Port: 587
   - Username: aayushmanthakulla@gmail.com
   - Password: Your app password

## Code Example

Here's the complete working code for your contact form:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    
    // EmailJS template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email
    };
    
    // Send email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your message! I will get back to you soon.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Sorry, there was an error sending your message. Please try again or contact me directly at aayushmanthakulla@gmail.com');
        })
        .finally(function() {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        });
});
```

## Final Steps

1. **Replace the placeholder values** with your actual EmailJS credentials
2. **Test the form** with a real submission
3. **Check your email** to confirm it's working
4. **Monitor your EmailJS dashboard** for any issues

## Support

If you encounter any issues:
1. **Check EmailJS documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. **Contact EmailJS support**: Available in their dashboard
3. **Check browser console** for error messages

---

**Note**: This setup will send all contact form submissions directly to aayushmanthakulla@gmail.com. Make sure to check your email regularly for new messages from your portfolio website. 