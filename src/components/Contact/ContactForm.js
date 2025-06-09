import React, { useState } from 'react';
import { Box, VStack, Input, Textarea, Button } from '@chakra-ui/react';
import { send } from 'emailjs-com';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <>
            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={3}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" colorScheme="blue">Send Message</Button>
              </VStack>
            </Box>
    </>
  );
};

export default ContactForm;
