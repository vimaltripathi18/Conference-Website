import React, { useState } from 'react';
import './RegistrationForm.scss';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        dateOfBirth: '',
        institution: '',
        department: '',
        jobTitle: '',
        country: '',
        role: '',
        presentationType: '',
        titleOfPresentation: '',
        mailingAddress: '',
        city: '',
        state: '',
        zipCode: '',
        registrationType: '',
        paymentMethod: '',
        billingAddress: '',
        invoiceRequest: false,
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className="registration-form">
            <h1>Conference Registration</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone Number:</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label>Date of Birth:</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />

                <label>Institution/Organization:</label>
                <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />

                <label>Department/Division:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} required />

                <label>Job Title/Position:</label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />

                <label>Country:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />

                <label>Role:</label>
                <select name="role" value={formData.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="presenter">Presenter</option>
                    <option value="attendee">Attendee</option>
                    <option value="sponsor">Sponsor</option>
                </select>

                <label>Presentation Type:</label>
                <select name="presentationType" value={formData.presentationType} onChange={handleChange}>
                    <option value="">Select Presentation Type</option>
                    <option value="oral">Oral</option>
                    <option value="poster">Poster</option>
                </select>

                <label>Title of Presentation:</label>
                <input type="text" name="titleOfPresentation" value={formData.titleOfPresentation} onChange={handleChange} />

                <label>Mailing Address:</label>
                <input type="text" name="mailingAddress" value={formData.mailingAddress} onChange={handleChange} required />

                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />

                <label>State:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />

                <label>Postal Code:</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />

                <label>Registration Type:</label>
                <select name="registrationType" value={formData.registrationType} onChange={handleChange} required>
                    <option value="">Select Registration Type</option>
                    <option value="reserch scholor">Research Scholor</option>
                    <option value="industry person">Industry Person</option>
                    <option value="faculty memeber">Faculty Memeber</option>
                    <option value="student">Student</option>
                </select>

                <label>Payment Method:</label>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="bankTransfer">Bank Transfer</option>
                    <option value="upi">UPI Transfer</option>
                </select>

                <label>Billing Address:</label>
                <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} required />

                <label>
                    <input type="checkbox" name="invoiceRequest" checked={formData.invoiceRequest} onChange={handleChange} />
                    Request Receipt
                </label>

                <label>
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                    I agree to the Terms and Conditions
                </label>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
