import React, { useState, useEffect } from 'react';
import ContactImg from '../images/contact.png'

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);

    return Object.values(errors).every(error => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you can submit the form data, e.g., send it to an API
      console.log('Form is valid. Submitting...', formData);
      // Reset form fields if needed:
      // setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      console.log('Form is invalid. Please check the errors.');
    }
  };

  useEffect(() => {
    // You can add further validation logic here if needed
  }, [formData]);

  return (
    <div className='container-fluid  text-light' id='Contact'>
      <div className='row p-1'>
        <div className="col-xl-6 mt-5 p-3">
          <img src={ContactImg} className='img-fluid pt-5' />
          <div className='pt-5 contact-detail'>
            <div className='fs-6 p-2'>
              <span className='icon'><i className="fa-solid fa-location-dot"></i> </span>
              151 New Park Ave, Hartford, CT 06106 United States</div>
            <div className='fs-6 p-2'>
              <span className='icon'> <i className="fa-solid fa-phone"></i> </span>
              +0 123 4567 89</div>
            <div className='fs-6 p-2'>
              <span className='icon'><i className="fa-regular fa-envelope"></i> </span>
              support@waretech.com</div>
          </div>
        </div>

        <div className="col-xl-6 p-2">
        <h1 className='feature-heading'>Now Let's Discuss your Project <span> Get a quote!</span></h1>
          <form onSubmit={handleSubmit}>
            <div className='row justify-content-center' >
            <span className='col-xl-6 '>

              <input
                placeholder='Full Name'
                className='p-1 fs-6 mt-4 m-2'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
               <div className='text-danger p-3 '>{formErrors.name}</div>
            </span>
           
            <span className='col-xl-6 '>

              <input
                placeholder='E-Mail'
                className='p-1 fs-6 mt-4 m-2  '
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className='text-danger p-3'>{formErrors.email}</div>
            </span>
            </div>
            <div>

              <input
                placeholder='Subject'
                className='p-1 fs-6 mt-4 m-2 subject '
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            <div className='text-danger p-3'>{formErrors.subject}</div>
            </div>
            <div>

              <textarea
                placeholder='Message' 
                className='p-1 fs-6 mt-4 m-2'
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                cols="30" rows="5"
              />
              <div className='text-danger p-3'>{formErrors.message}</div>
            </div>
     
            <button type="submit " className='btn first-btn m-2 my-1 '>Get Free Consultation</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default FormValidationExample;
